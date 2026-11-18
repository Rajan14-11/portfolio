import { NextRequest, NextResponse } from "next/server";
import { portfolioKnowledge } from "@/app/data/knowledge";

const SYSTEM_PROMPT = `You are an AI assistant for Rajan Goyal's portfolio website. Your job is to help recruiters and hiring managers learn about Rajan's skills, experience, and projects.

Use ONLY the information provided in the context below to answer questions. If a question cannot be answered from the context, say so honestly and suggest the person reach out to Rajan directly at rajangoyal710@gmail.com.

Keep responses concise and friendly — 2 to 4 sentences for most questions. For technical questions about his stack or experience, be specific. Always be helpful and professional.

Do NOT make up any information that is not in the context. Do NOT answer questions unrelated to Rajan Goyal or this portfolio.

If someone asks if Rajan would be a good fit for a specific role, give an honest assessment based only on his actual skills and experience.

CONTEXT ABOUT RAJAN GOYAL:
${portfolioKnowledge}`;

export type Message = {
  role: "user" | "assistant";
  content: string;
};

function getFallbackResponse(query: string): string {
  const q = query.toLowerCase();

  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("phone") ||
    q.includes("reach") ||
    q.includes("hire") ||
    q.includes("location")
  ) {
    return "You can reach Rajan Goyal via email at rajangoyal710@gmail.com or by phone at +91 76529 32128. He is based in Gurgaon, India, and open to remote roles or relocating anywhere in India.";
  }

  if (
    q.includes("skill") ||
    q.includes("stack") ||
    q.includes("tech") ||
    q.includes("mern") ||
    q.includes("python") ||
    q.includes("django") ||
    q.includes("react") ||
    q.includes("node")
  ) {
    return "Rajan is a Full-Stack Developer proficient in the MERN stack (React, Node.js, Express, MongoDB) and Python/Django (Celery, Django Channels, WebSockets, Redis, PostgreSQL). He also works with Next.js, TypeScript, Tailwind CSS, and AI developer tools like Cursor and Copilot.";
  }

  if (
    q.includes("experience") ||
    q.includes("work") ||
    q.includes("freadom") ||
    q.includes("seclance") ||
    q.includes("role") ||
    q.includes("job")
  ) {
    return "Rajan has 2+ years of experience. Currently, as Senior Associate Developer at Freadom Edu (30k MAU), he reduced bundle size from 50MB to 18MB, cut server calls by 40% with React Query, integrated SpeechSuper API, and built real-time Django Channels features. Previously, he interned at Seclance working on Next.js, Django, and e-commerce apps.";
  }

  if (
    q.includes("project") ||
    q.includes("built") ||
    q.includes("portfolio") ||
    q.includes("procure") ||
    q.includes("maritime") ||
    q.includes("erp") ||
    q.includes("tailor") ||
    q.includes("vulnbounty") ||
    q.includes("flipkart") ||
    q.includes("trello") ||
    q.includes("openinapp")
  ) {
    return "Rajan's featured live projects include the Maritime Procurement Management System (full-stack TypeScript supply chain platform with 5-tier RBAC, supplier blind bidding, PO rejection recovery, and atomic anti-over-delivery controls), the Tailor App customer portal (Next.js, Razorpay payments, geolocation search), Vulnbounty (security coordination & payout workflows), and the Seclance cybersecurity web application.";
  }

  if (
    q.includes("education") ||
    q.includes("college") ||
    q.includes("degree") ||
    q.includes("cgpa") ||
    q.includes("university")
  ) {
    return "Rajan holds a B.E. in Computer Science from UIET, Hoshiarpur (2020–2024) with a CGPA of 8.54 / 10.";
  }

  if (
    q.includes("remote") ||
    q.includes("relocat") ||
    q.includes("notice") ||
    q.includes("available")
  ) {
    return "Rajan is actively looking for full-time full-stack product roles with a 30-day notice period (negotiable). He is open to remote work as well as on-site roles in Delhi NCR / Gurgaon or relocating across India. Feel free to contact him at rajangoyal710@gmail.com for availability.";
  }

  return "Rajan Goyal is a Full-Stack Developer specializing in MERN (React, Node, Express, MongoDB) and Python/Django with 2+ years of experience shipping scalable applications for a 30k MAU edtech platform. For specific inquiries, feel free to email him directly at rajangoyal710@gmail.com.";
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = (await req.json()) as { messages: Message[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    const apiKey = process.env.GROQ_API_KEY || process.env.GEMINI_API_KEY;
    const lastMessage = messages[messages.length - 1];

    if (!apiKey) {
      const fallbackText = getFallbackResponse(lastMessage.content);
      return NextResponse.json({ message: fallbackText });
    }

    // Limit chat history to the last 3 messages to drastically save tokens
    const recentMessages = messages.slice(-3);
    const groqMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...recentMessages.map((m) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.content,
      })),
    ];

    // Priority list of models with high limits on Groq free tier
    const candidateModels = [
      process.env.GROQ_MODEL,
      "qwen/qwen3.8-27b",
      "openai/gpt-oss-20b",
      "openai/gpt-oss-120b",
    ].filter((m, idx, arr): m is string => Boolean(m) && arr.indexOf(m) === idx);

    let replyText = "";

    for (const model of candidateModels) {
      try {
        const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model,
            messages: groqMessages,
            temperature: 0.5,
            max_tokens: 400,
          }),
        });

        if (!groqRes.ok) {
          const errorData = await groqRes.json().catch(() => null);
          throw new Error(errorData?.error?.message || `Groq API HTTP ${groqRes.status}`);
        }

        const groqData = await groqRes.json();
        const choice = groqData.choices?.[0]?.message;
        const text = choice?.content?.trim() || choice?.reasoning?.trim();

        if (!text) {
          throw new Error(`Empty response from Groq API (${model})`);
        }

        replyText = text;
        break;
      } catch (apiErr: unknown) {
        const errMessage = apiErr instanceof Error ? apiErr.message : String(apiErr);
        console.warn(`Groq API attempt with model "${model}" failed:`, errMessage);
      }
    }

    if (replyText) {
      return NextResponse.json({ message: replyText });
    }

    // Fall back to offline knowledge base if all model attempts fail
    console.warn("All Groq API models failed, using knowledge fallback");
    const fallbackText = getFallbackResponse(lastMessage.content);
    return NextResponse.json({ message: fallbackText });
  } catch (error: unknown) {
    console.error("Chat API outer error:", error);
    return NextResponse.json({
      message:
        "Rajan Goyal is a Full-Stack Developer (MERN, Python/Django). You can reach him at rajangoyal710@gmail.com.",
    });
  }
}

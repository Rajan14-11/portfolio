"use client";

import { useState, useRef, useEffect } from "react";
import type { Message } from "@/app/api/chat/route";

const SUGGESTED_QUESTIONS = [
  "What's Rajan's main tech stack?",
  "Has he worked with real-time systems?",
  "Is he open to remote roles?",
  "What has he built at Freadom?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm Rajan's AI assistant. Ask me anything about his skills, experience, or projects — I'll give you honest answers based on his actual work.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [messages, open]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    setShowSuggestions(false);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.message || data.error || "Sorry, something went wrong.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Network error — please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-[90px] right-6 w-[360px] max-w-[calc(100vw-2rem)] h-[480px] bg-card border border-primary-border rounded-2xl flex flex-col z-[200] shadow-[0_8px_40px_rgba(0,0,0,0.35)] overflow-hidden">
          {/* Header */}
          <div className="p-[1rem_1.25rem] border-b border-border-primary flex items-center justify-between bg-bg2 shrink-0">
            <div className="flex items-center gap-[0.65rem]">
              <div className="w-[34px] h-[34px] rounded-full bg-[linear-gradient(135deg,var(--primary),#3B82F6)] flex items-center justify-center text-[0.75rem] font-[800] text-[#0F172A] shrink-0">
                RG
              </div>
              <div>
                <div className="font-bold text-[0.88rem] text-text-primary">
                  Ask Rajan&apos;s Portfolio
                </div>
                <div className="flex items-center gap-[0.35rem] mt-[1px]">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#4ADE80] inline-block" />
                  <span className="text-[0.72rem] text-text-tertiary">
                    Powered by Groq AI
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="bg-transparent border-none text-text-tertiary text-[1.1rem] cursor-pointer p-1 leading-none"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[82%] p-[0.65rem_0.9rem] text-[0.83rem] leading-[1.6] ${
                    msg.role === "user"
                      ? "rounded-[12px_12px_2px_12px] bg-primary text-[#0F172A] font-[600]"
                      : "rounded-[12px_12px_12px_2px] bg-bg2 text-text-primary font-[400] border border-border-primary"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Loading dots */}
            {loading && (
              <div className="flex justify-start">
                <div className="p-[0.65rem_1rem] rounded-[12px_12px_12px_2px] bg-bg2 border border-border-primary flex gap-1 items-center">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-[6px] h-[6px] rounded-full bg-primary inline-block"
                      style={{ animation: `dotBounce 1.2s infinite ${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Suggested questions */}
            {showSuggestions && messages.length === 1 && (
              <div className="mt-2">
                <div className="text-[0.72rem] text-text-tertiary mb-2">
                  Try asking:
                </div>
                <div className="flex flex-col gap-[0.4rem]">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="text-left bg-primary-faint border border-primary-border rounded-lg p-[0.5rem_0.75rem] text-[0.78rem] text-primary cursor-pointer transition-colors duration-200 font-inherit font-[500] hover:bg-primary hover:text-[#0F172A]"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-[0.75rem_1rem] border-t border-border-primary flex gap-2 bg-bg2 shrink-0">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything about Rajan..."
              disabled={loading}
              className="flex-1 bg-card border border-border-primary rounded-lg p-[0.55rem_0.85rem] text-[0.83rem] text-text-primary outline-none font-inherit transition-colors duration-200 focus:border-primary"
            />
            <button
              onClick={() => send(input)}
              disabled={loading || !input.trim()}
              className={`border-none rounded-lg w-9 h-9 flex items-center justify-center shrink-0 transition-colors duration-200 text-base ${
                input.trim() && !loading
                  ? "bg-primary text-[#0F172A] cursor-pointer hover:opacity-90"
                  : "bg-border-primary text-text-secondary cursor-not-allowed"
              }`}
              aria-label="Send message"
            >
              ↑
            </button>
          </div>
        </div>
      )}

      {/* FAB trigger button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open portfolio chat"
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full border-none cursor-pointer flex items-center justify-center text-[1.3rem] z-[200] transition-all duration-200 ${
          open
            ? "bg-border-secondary text-text-primary rotate-45 scale-90 shadow-none"
            : "bg-primary text-[#0F172A] scale-100 shadow-[0_4px_20px_rgba(34,211,238,0.35)] animate-[fabPulse_3s_ease-in-out_infinite]"
        }`}
      >
        {open ? "✕" : "💬"}
      </button>

      <style>{`
        @keyframes dotBounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes fabPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(34,211,238,0.35); }
          50% { box-shadow: 0 4px 28px rgba(34,211,238,0.6), 0 0 0 6px var(--primary-faint); }
        }
      `}</style>
    </>
  );
}

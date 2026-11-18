"use client";

import { useState, useRef, useEffect } from "react";
import type { Message } from "@/app/api/chat/route";

const SUGGESTED_QUESTIONS = [
  "What is Rajan's primary tech stack?",
  "How did he reduce bundle size at Freadom?",
  "What is his experience with real-time systems?",
  "Is he available for remote or on-site roles?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I am Rajan's portfolio assistant. Ask me anything about his production engineering experience, tech stack, or specific projects.",
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
          content: "Network error — please check connection and try again.",
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
        <div className="fixed bottom-[84px] right-6 w-[380px] max-w-[calc(100vw-2rem)] h-[500px] bg-card border border-border-secondary rounded-2xl flex flex-col z-[200] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] overflow-hidden animate-[scaleIn_0.18s_cubic-bezier(0.16,1,0.3,1)]">
          {/* Header */}
          <div className="p-3.5 px-4 border-b border-border-primary flex items-center justify-between bg-surface-soft shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-surface-soft-3 border border-border-secondary flex items-center justify-center text-[10px] font-mono font-bold text-text-primary shrink-0">
                RG
              </div>
              <div>
                <div className="font-semibold text-xs text-text-primary tracking-tight">
                  Portfolio Assistant
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                  <span className="text-[10px] font-mono text-text-tertiary">
                    Groq LPU Inference
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 rounded-lg border border-border-primary bg-surface-soft hover:bg-surface-soft-2 text-text-tertiary hover:text-text-primary flex items-center justify-center transition-colors text-xs cursor-pointer active:scale-95"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages container */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 text-[0.82rem] leading-relaxed ${
                    msg.role === "user"
                      ? "rounded-2xl rounded-tr-sm bg-text-primary text-bg font-medium"
                      : "rounded-2xl rounded-tl-sm bg-surface-soft-2 text-text-primary border border-border-primary"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Loading indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="p-2.5 px-3.5 rounded-2xl rounded-tl-sm bg-surface-soft border border-border-primary flex gap-1.5 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary animate-pulse [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-text-tertiary animate-pulse [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            {/* Suggested questions */}
            {showSuggestions && messages.length === 1 && (
              <div className="mt-2 pt-2 border-t border-border-primary">
                <div className="text-[10px] font-mono uppercase tracking-wider text-text-tertiary mb-2">
                  Suggested inquiries
                </div>
                <div className="flex flex-col gap-1.5">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => send(q)}
                      className="text-left bg-surface-soft border border-border-primary hover:border-border-secondary hover:bg-surface-soft-2 rounded-lg p-2 px-3 text-[11px] text-text-secondary hover:text-text-primary cursor-pointer transition-colors font-medium"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input field */}
          <div className="p-3 border-t border-border-primary flex gap-2 bg-surface-soft shrink-0">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about skills, work at Freadom..."
              disabled={loading}
              className="flex-1 bg-card border border-border-primary rounded-lg px-3 py-2 text-xs text-text-primary placeholder:text-text-tertiary outline-none transition-colors focus:border-border-secondary"
            />
            <button
              onClick={() => send(input)}
              disabled={loading || !input.trim()}
              className={`border-none rounded-lg px-3 flex items-center justify-center shrink-0 transition-all text-xs font-semibold ${
                input.trim() && !loading
                  ? "bg-text-primary text-bg cursor-pointer hover:opacity-90 active:scale-95"
                  : "bg-surface-soft-3 text-text-tertiary cursor-not-allowed"
              }`}
              aria-label="Send message"
            >
              ↵
            </button>
          </div>
        </div>
      )}

      {/* Modern Capsule FAB */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open portfolio assistant"
        className={`fixed bottom-6 right-6 inline-flex items-center gap-2.5 py-2 px-3.5 rounded-full border shadow-lg cursor-pointer transition-all duration-200 z-[200] active:scale-95 ${
          open
            ? "bg-surface-soft-3 border-border-secondary text-text-primary"
            : "bg-card border-border-primary hover:border-border-secondary text-text-primary hover:shadow-xl"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-xs font-medium tracking-tight">
          {open ? "Close Assistant" : "Ask Portfolio AI"}
        </span>
        <span className="text-[10px] font-mono text-text-tertiary px-1 py-0.5 rounded bg-surface-soft border border-border-primary">
          {open ? "Esc" : "↵"}
        </span>
      </button>
    </>
  );
}

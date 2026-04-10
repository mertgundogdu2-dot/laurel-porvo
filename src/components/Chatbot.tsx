"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Merhaba! Laurel İstanbul'a hoş geldiniz. Menü, rezervasyon veya mekanımız hakkında yardımcı olabilirim.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMessage: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([
        ...newMessages,
        { role: "assistant", content: data.message || "Bir hata oluştu. Lütfen +90 (552) 152 15 15 numarasını arayın." },
      ]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Bağlantı hatası. +90 (552) 152 15 15 numarasını arayabilirsiniz." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center rounded-full shadow-xl transition-all duration-300 ${
          open ? "bg-[#1c1c1c]" : "bg-[#4a6741] hover:bg-[#3d5936] hover:scale-105"
        }`}
      >
        {open ? <X size={18} className="text-white" /> : <MessageCircle size={20} className="text-white" />}
      </button>

      {open && (
        <div className="fixed bottom-28 right-8 z-50 w-[370px] max-w-[calc(100vw-48px)] bg-white shadow-2xl shadow-black/10 flex flex-col animate-slide-up overflow-hidden"
             style={{ height: "500px" }}>
          <div className="bg-[#4a6741] px-6 py-5 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
              <span className="font-[family-name:var(--font-cormorant)] text-white text-sm font-semibold">L</span>
            </div>
            <div>
              <h4 className="font-[family-name:var(--font-cormorant)] text-white text-[15px]">Laurel Asistan</h4>
              <span className="font-[family-name:var(--font-inter)] text-[10px] text-white/50">Çevrimiçi</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#fafaf8]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-4 py-3 font-[family-name:var(--font-inter)] text-[13px] leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[#4a6741] text-white rounded-2xl rounded-br-sm"
                    : "bg-white text-[#1c1c1c]/70 shadow-sm rounded-2xl rounded-bl-sm"
                }`}>
                  {msg.content.split("\n").map((line, j) => (
                    <span key={j}>{line}{j < msg.content.split("\n").length - 1 && <br />}</span>
                  ))}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-5 py-4 rounded-2xl rounded-bl-sm shadow-sm flex gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#4a6741]/40 rounded-full typing-dot" />
                  <span className="w-1.5 h-1.5 bg-[#4a6741]/40 rounded-full typing-dot" />
                  <span className="w-1.5 h-1.5 bg-[#4a6741]/40 rounded-full typing-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 flex items-center gap-2 bg-white border-t border-[#1c1c1c]/5">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Mesajınızı yazın..."
              className="flex-1 bg-[#fafaf8] px-4 py-3 text-[#1c1c1c] font-[family-name:var(--font-inter)] text-[13px] focus:outline-none placeholder:text-[#1c1c1c]/20 rounded-full"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="w-10 h-10 bg-[#4a6741] flex items-center justify-center hover:bg-[#3d5936] transition-colors disabled:opacity-30 rounded-full flex-shrink-0"
            >
              {loading ? <Loader2 size={14} className="text-white animate-spin" /> : <Send size={14} className="text-white" />}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

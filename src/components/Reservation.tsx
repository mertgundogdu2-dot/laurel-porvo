"use client";

import { useState } from "react";
import { Check, Loader2 } from "lucide-react";

export default function Reservation() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", time: "", guests: "2", notes: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Bir hata oluştu.");
      }
      setStatus("success");
      setForm({ name: "", email: "", phone: "", date: "", time: "", guests: "2", notes: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Bir hata oluştu.");
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#1c1c1c]/10 px-0 py-4 text-[#1c1c1c] font-[family-name:var(--font-inter)] text-sm focus:border-[#4a6741] focus:outline-none transition-colors placeholder:text-[#1c1c1c]/20";

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="rezervasyon" className="py-36 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-[family-name:var(--font-inter)] text-[#4a6741] text-[10px] tracking-[0.5em] uppercase">
            Yerinizi Ayırtın
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1c1c1c] mt-4">
            Rezervasyon
          </h2>
        </div>

        {status === "success" ? (
          <div className="text-center py-24">
            <Check className="mx-auto text-[#4a6741] mb-8" size={40} strokeWidth={1} />
            <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#1c1c1c] mb-3">
              Rezervasyonunuz Onaylandı
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-[#1c1c1c]/40 text-sm mb-10">
              Sizi ağırlamak için sabırsızlanıyoruz.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="font-[family-name:var(--font-inter)] text-[#4a6741] text-[11px] tracking-[0.2em] uppercase underline underline-offset-4 decoration-[#4a6741]/30 hover:decoration-[#4a6741]"
            >
              Yeni Rezervasyon
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-2">
            <div className="grid md:grid-cols-2 gap-x-12">
              <div>
                <label className="font-[family-name:var(--font-inter)] text-[#1c1c1c]/30 text-[10px] tracking-[0.2em] uppercase">
                  Ad Soyad
                </label>
                <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Adınız Soyadınız" />
              </div>
              <div>
                <label className="font-[family-name:var(--font-inter)] text-[#1c1c1c]/30 text-[10px] tracking-[0.2em] uppercase">
                  E-posta
                </label>
                <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} placeholder="ornek@email.com" />
              </div>
            </div>

            <div>
              <label className="font-[family-name:var(--font-inter)] text-[#1c1c1c]/30 text-[10px] tracking-[0.2em] uppercase">
                Telefon
              </label>
              <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="+90 5XX XXX XX XX" />
            </div>

            <div className="grid md:grid-cols-3 gap-x-12">
              <div>
                <label className="font-[family-name:var(--font-inter)] text-[#1c1c1c]/30 text-[10px] tracking-[0.2em] uppercase">
                  Tarih
                </label>
                <input type="date" required min={today} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClass} />
              </div>
              <div>
                <label className="font-[family-name:var(--font-inter)] text-[#1c1c1c]/30 text-[10px] tracking-[0.2em] uppercase">
                  Saat
                </label>
                <select required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className={inputClass}>
                  <option value="">Seçin</option>
                  {["09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00"].map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-[family-name:var(--font-inter)] text-[#1c1c1c]/30 text-[10px] tracking-[0.2em] uppercase">
                  Kişi
                </label>
                <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className={inputClass}>
                  {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                    <option key={n} value={n}>{n} Kişi</option>
                  ))}
                  <option value="10+">10+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="font-[family-name:var(--font-inter)] text-[#1c1c1c]/30 text-[10px] tracking-[0.2em] uppercase">
                Not
              </label>
              <textarea rows={2} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className={`${inputClass} resize-none`} placeholder="Özel istekleriniz..." />
            </div>

            {status === "error" && (
              <p className="text-red-600/70 font-[family-name:var(--font-inter)] text-sm pt-2">{errorMsg}</p>
            )}

            <div className="pt-12 text-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#4a6741] text-white px-16 py-5 text-[11px] tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] hover:bg-[#3d5936] transition-all duration-300 disabled:opacity-50 inline-flex items-center gap-3"
              >
                {status === "loading" && <Loader2 size={14} className="animate-spin" />}
                Rezervasyon Yap
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

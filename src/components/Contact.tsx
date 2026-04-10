"use client";

import { Phone } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="iletisim" className="bg-[#1c1c1c] text-white">
      {/* Full width image band */}
      <div
        className="h-[300px] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/laurel-exterior.jpg')" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light mb-4">
              Laurel İstanbul
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-white/30 text-sm leading-relaxed">
              Demirciköy ormanlarının içinde, doğanın kalbinde bir gastronomi ve yaşam deneyimi.
            </p>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">
              İletişim
            </h4>
            <div className="font-[family-name:var(--font-inter)] text-sm space-y-3">
              <p className="text-white/60">Demirciköy, Sarıyer</p>
              <p className="text-white/60">İstanbul, Türkiye</p>
              <a href="tel:+905521521515" className="text-white/60 hover:text-white transition-colors block">
                +90 (552) 152 15 15
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">
              Saatler
            </h4>
            <div className="font-[family-name:var(--font-inter)] text-sm space-y-3 text-white/60">
              <p>Pazartesi: <span className="text-[#b8875a]">Kapalı</span></p>
              <p>Salı — Perşembe: 11:30 — 23:00</p>
              <p>Cuma — Pazar: 09:00 — 23:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-[family-name:var(--font-inter)] text-white/15 text-[11px] tracking-wider">
            &copy; {new Date().getFullYear()} Laurel İstanbul
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/laurelistanbul/" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/60 transition-colors">
              <InstagramIcon />
            </a>
            <a href="tel:+905521521515" className="text-white/20 hover:text-white/60 transition-colors">
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

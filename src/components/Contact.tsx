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
      {/* Full width video band */}
      <div className="relative h-[300px] overflow-hidden">
        <video
          src="/porvo-showcase.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light mb-4">
            İletişim
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-white/30 text-sm leading-relaxed">
            Porvo markalarımızın iletişim bilgileri
          </p>
        </div>

        {/* Three locations */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {/* Porvo Burger */}
          <div className="border border-white/10 p-8">
            <h4 className="font-[family-name:var(--font-cormorant)] text-2xl mb-6">Porvo Burger</h4>
            <div className="font-[family-name:var(--font-inter)] text-sm space-y-3">
              <p className="text-white/60">Esentepe Mah. Seyrantepe Cad.</p>
              <p className="text-white/60">No: 1 - 1F Golden Life Sitesi</p>
              <p className="text-white/60">59850 Çorlu/Tekirdağ</p>
              <a href="tel:+905308339359" className="text-white/80 hover:text-white transition-colors block mt-4">
                0530 833 93 59
              </a>
              <a href="mailto:porvoburger@gmail.com" className="text-white/60 hover:text-white transition-colors block">
                porvoburger@gmail.com
              </a>
            </div>
            <a
              href="https://www.instagram.com/porvoburger/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors mt-6"
            >
              <InstagramIcon size={16} />
              <span className="font-[family-name:var(--font-inter)] text-[11px]">@porvoburger</span>
            </a>
          </div>

          {/* Porvo Trattoria */}
          <div className="border border-white/10 p-8">
            <h4 className="font-[family-name:var(--font-cormorant)] text-2xl mb-6">Porvo Trattoria</h4>
            <div className="font-[family-name:var(--font-inter)] text-sm space-y-3">
              <p className="text-white/60">Esentepe Mah. Adnan Doğu Cd.</p>
              <p className="text-white/60">No:11 1/E</p>
              <p className="text-white/60">59860 Çorlu/Tekirdağ</p>
              <a href="tel:+905548814813" className="text-white/80 hover:text-white transition-colors block mt-4">
                0554 881 48 13
              </a>
            </div>
            <a
              href="https://www.instagram.com/porvotrattoria/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors mt-6"
            >
              <InstagramIcon size={16} />
              <span className="font-[family-name:var(--font-inter)] text-[11px]">@porvotrattoria</span>
            </a>
          </div>

          {/* Porvo Kahve Dükkanı */}
          <div className="border border-white/10 p-8">
            <h4 className="font-[family-name:var(--font-cormorant)] text-2xl mb-6">Kahve Dükkanı</h4>
            <div className="font-[family-name:var(--font-inter)] text-sm space-y-3">
              <p className="text-white/60">Kazımiye, Gürbüz Akın Aprt</p>
              <p className="text-white/60">Salih Omurtak Cd. No 20 B</p>
              <p className="text-white/60">59860 Çorlu/Tekirdağ</p>
              <a href="tel:+902826731333" className="text-white/80 hover:text-white transition-colors block mt-4">
                0282 673 13 33
              </a>
            </div>
            <a
              href="https://www.instagram.com/porvokahvedukkani/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors mt-6"
            >
              <InstagramIcon size={16} />
              <span className="font-[family-name:var(--font-inter)] text-[11px]">@porvokahvedukkani</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src="/porvo-beyaz.png" alt="Porvo" className="h-8 opacity-40" />
            <p className="font-[family-name:var(--font-inter)] text-white/15 text-[11px] tracking-wider">
              &copy; {new Date().getFullYear()} Porvo
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/porvoburger/" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white/60 transition-colors">
              <InstagramIcon />
            </a>
            <a href="tel:+905308339359" className="text-white/20 hover:text-white/60 transition-colors">
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

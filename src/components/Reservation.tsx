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

export default function Reservation() {
  return (
    <section id="rezervasyon" className="py-36 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-[family-name:var(--font-inter)] text-[#4a6741] text-[10px] tracking-[0.5em] uppercase">
            Bize Ulaşın
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1c1c1c] mt-4">
            Sipariş & İletişim
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#1c1c1c]/40 text-sm mt-6 max-w-lg mx-auto">
            Sipariş vermek veya bilgi almak için şubelerimizi arayabilir ya da sosyal medya hesaplarımızdan bize ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Porvo Burger */}
          <div className="text-center p-8 border border-[#1c1c1c]/5 hover:border-[#4a6741]/30 transition-colors duration-500">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1c1c1c] mb-4">Porvo Burger</h3>
            <a
              href="tel:+905308339359"
              className="inline-flex items-center gap-2 text-[#4a6741] hover:text-[#3d5936] transition-colors mb-4"
            >
              <Phone size={16} />
              <span className="font-[family-name:var(--font-inter)] text-sm">0530 833 93 59</span>
            </a>
            <a
              href="https://www.instagram.com/porvoburger/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-[#1c1c1c]/40 hover:text-[#1c1c1c]/70 transition-colors"
            >
              <InstagramIcon size={16} />
              <span className="font-[family-name:var(--font-inter)] text-[11px]">@porvoburger</span>
            </a>
          </div>

          {/* Porvo Trattoria */}
          <div className="text-center p-8 border border-[#1c1c1c]/5 hover:border-[#4a6741]/30 transition-colors duration-500">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1c1c1c] mb-4">Porvo Trattoria</h3>
            <a
              href="tel:+905548814813"
              className="inline-flex items-center gap-2 text-[#4a6741] hover:text-[#3d5936] transition-colors mb-4"
            >
              <Phone size={16} />
              <span className="font-[family-name:var(--font-inter)] text-sm">0554 881 48 13</span>
            </a>
            <a
              href="https://www.instagram.com/porvotrattoria/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-[#1c1c1c]/40 hover:text-[#1c1c1c]/70 transition-colors"
            >
              <InstagramIcon size={16} />
              <span className="font-[family-name:var(--font-inter)] text-[11px]">@porvotrattoria</span>
            </a>
          </div>

          {/* Porvo Kahve Dükkanı */}
          <div className="text-center p-8 border border-[#1c1c1c]/5 hover:border-[#4a6741]/30 transition-colors duration-500">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl text-[#1c1c1c] mb-4">Kahve Dükkanı</h3>
            <a
              href="tel:+902826731333"
              className="inline-flex items-center gap-2 text-[#4a6741] hover:text-[#3d5936] transition-colors mb-4"
            >
              <Phone size={16} />
              <span className="font-[family-name:var(--font-inter)] text-sm">0282 673 13 33</span>
            </a>
            <a
              href="https://www.instagram.com/porvokahvedukkani/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-[#1c1c1c]/40 hover:text-[#1c1c1c]/70 transition-colors"
            >
              <InstagramIcon size={16} />
              <span className="font-[family-name:var(--font-inter)] text-[11px]">@porvokahvedukkani</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

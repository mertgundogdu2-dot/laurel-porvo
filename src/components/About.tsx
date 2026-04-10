"use client";

export default function About() {
  return (
    <section id="hakkimizda" className="py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div
              className="aspect-[3/4] bg-cover bg-center"
              style={{ backgroundImage: "url('/laurel-hero2.jpg')" }}
            />
            {/* Floating stat card */}
            <div className="absolute -bottom-8 -right-8 bg-[#4a6741] text-white p-8 hidden md:block">
              <span className="font-[family-name:var(--font-cormorant)] text-5xl font-light block">1500</span>
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase opacity-70">
                m² yeşil alan
              </span>
            </div>
          </div>

          <div>
            <span className="font-[family-name:var(--font-inter)] text-[#4a6741] text-[10px] tracking-[0.5em] uppercase">
              Hikayemiz
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1c1c1c] mt-4 mb-8 leading-[1.1]">
              Doğanın kalbinde,<br />
              <span className="italic text-[#4a6741]">lezzetin zarafeti</span>
            </h2>

            <div className="space-y-5 font-[family-name:var(--font-inter)] text-[#1c1c1c]/55 text-[15px] leading-[1.8]">
              <p>
                Laurel İstanbul, adını doğallılık ve zarafet sembolü olan defne bitkisinden alır. Demirciköy&apos;ün eşsiz orman dokusunda premium bir gastronomi deneyimi sunar.
              </p>
              <p>
                Doğal taş, ahşap ve camın modern mimariyle buluştuğu mekanımızda, Fransız Kafe alanı, geniş restoran bölümü ve çocuk parkıyla her yaştan misafirimizi ağırlıyoruz.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-[#1c1c1c]/8 grid grid-cols-3 gap-8">
              <div>
                <span className="font-[family-name:var(--font-cormorant)] text-3xl text-[#4a6741]">10+</span>
                <p className="font-[family-name:var(--font-inter)] text-[11px] text-[#1c1c1c]/40 mt-1">Yıllık Deneyim</p>
              </div>
              <div>
                <span className="font-[family-name:var(--font-cormorant)] text-3xl text-[#4a6741]">40+</span>
                <p className="font-[family-name:var(--font-inter)] text-[11px] text-[#1c1c1c]/40 mt-1">Menü Çeşidi</p>
              </div>
              <div>
                <span className="font-[family-name:var(--font-cormorant)] text-3xl text-[#4a6741]">0</span>
                <p className="font-[family-name:var(--font-inter)] text-[11px] text-[#1c1c1c]/40 mt-1">Atık Politikası</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

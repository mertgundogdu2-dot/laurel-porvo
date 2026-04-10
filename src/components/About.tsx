"use client";

export default function About() {
  return (
    <section id="hakkimizda" className="py-16 sm:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div
              className="aspect-[3/4] bg-cover bg-center"
              style={{ backgroundImage: "url('/porvo-kurucular.png')" }}
            />
            {/* Floating stat card */}
            <div className="absolute -bottom-8 -right-8 bg-[#4a6741] text-white p-8 hidden md:block">
              <span className="font-[family-name:var(--font-cormorant)] text-5xl font-light block">2022</span>
              <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase opacity-70">
                kuruluş yılı
              </span>
            </div>
          </div>

          <div>
            <span className="font-[family-name:var(--font-inter)] text-[#4a6741] text-[10px] tracking-[0.5em] uppercase">
              Hikayemiz
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1c1c1c] mt-4 mb-8 leading-[1.1]">
              İki arkadaş,<br />
              <span className="italic text-[#4a6741]">bir tutku</span>
            </h2>

            <div className="space-y-5 font-[family-name:var(--font-inter)] text-[#1c1c1c]/55 text-[15px] leading-[1.8]">
              <p>
                Porvo, çocukluk arkadaşları <strong>Ramazan</strong> ve <strong>Faruk</strong>&apos;un ortak tutkusundan doğdu. Adını Finlandiya&apos;daki Porvoo Limanı&apos;ndan alan marka, Mayıs 2022&apos;de hayata geçti.
              </p>
              <p>
                Samimiyetle profesyonelliği bir arada tutan Porvo, her lokasyon ve konseptinde aynı kaliteyi sunmayı ilke edinmiştir. Sabırlı ve kararlı adımlarla büyümeye devam ediyoruz.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-[#1c1c1c]/8 grid grid-cols-3 gap-8">
              <div>
                <span className="font-[family-name:var(--font-cormorant)] text-3xl text-[#4a6741]">3</span>
                <p className="font-[family-name:var(--font-inter)] text-[11px] text-[#1c1c1c]/40 mt-1">Konsept</p>
              </div>
              <div>
                <span className="font-[family-name:var(--font-cormorant)] text-3xl text-[#4a6741]">3</span>
                <p className="font-[family-name:var(--font-inter)] text-[11px] text-[#1c1c1c]/40 mt-1">Lokasyon</p>
              </div>
              <div>
                <span className="font-[family-name:var(--font-cormorant)] text-3xl text-[#4a6741]">1</span>
                <p className="font-[family-name:var(--font-inter)] text-[11px] text-[#1c1c1c]/40 mt-1">Tutku</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

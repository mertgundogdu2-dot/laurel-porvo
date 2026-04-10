"use client";

export default function Features() {
  return (
    <section className="relative">
      {/* Full width chef spotlight */}
      <div className="grid md:grid-cols-2 min-h-[600px]">
        <div
          className="bg-cover bg-center min-h-[400px]"
          style={{ backgroundImage: "url('/chef-bozok.jpg')" }}
        />
        <div className="bg-[#4a6741] text-white flex items-center">
          <div className="p-12 md:p-20 max-w-lg">
            <span className="font-[family-name:var(--font-inter)] text-white/40 text-[10px] tracking-[0.5em] uppercase">
              Mutfağın Arkasında
            </span>
            <h3 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mt-4 mb-6 leading-[1.1]">
              Şef Murat<br />Bozok
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-white/60 text-sm leading-relaxed mb-8">
              Gordon Ramsay&apos;in 3 Michelin yıldızlı mutfağında, Joël Robuchon&apos;un L&apos;Atelier&apos;sinde ve dünyanın en prestijli restoranlarında 10 yılı aşkın deneyim. Dünya mutfağını Demirciköy&apos;ün doğasıyla buluşturuyor.
            </p>
            <div className="flex items-center gap-6 text-white/30">
              <div className="text-center">
                <span className="block font-[family-name:var(--font-cormorant)] text-2xl text-white/80">3</span>
                <span className="text-[9px] font-[family-name:var(--font-inter)] tracking-[0.2em] uppercase">Michelin Star</span>
              </div>
              <div className="w-px h-8 bg-white/15" />
              <div className="text-center">
                <span className="block font-[family-name:var(--font-cormorant)] text-2xl text-white/80">15+</span>
                <span className="text-[9px] font-[family-name:var(--font-inter)] tracking-[0.2em] uppercase">Yıl Uluslararası</span>
              </div>
              <div className="w-px h-8 bg-white/15" />
              <div className="text-center">
                <span className="block font-[family-name:var(--font-cormorant)] text-2xl text-white/80">5</span>
                <span className="text-[9px] font-[family-name:var(--font-inter)] tracking-[0.2em] uppercase">Ülke</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Three pillars */}
      <div className="grid md:grid-cols-3">
        {[
          {
            image: "/laurel-hero3.jpg",
            title: "Doğanın İçinde",
            desc: "Ormanla iç içe 1500m² yeşil alanda, doğal taş ve ahşap mimarisiyle huzur veren bir atmosfer.",
          },
          {
            image: "/laurel-food.jpg",
            title: "Sürdürülebilir Mutfak",
            desc: "Çöpsüz mutfak konseptiyle sıfır atık felsefesi. Her malzeme değerlendirilir, doğaya saygı esastır.",
          },
          {
            image: "/laurel-3.jpg",
            title: "Aile Dostu",
            desc: "Çocuk oyun parkı, bahçede sevimli hayvan dostları ve her yaşa uygun geniş yaşam alanları.",
          },
        ].map((item) => (
          <div key={item.title} className="group relative overflow-hidden">
            <div
              className="aspect-[4/3] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${item.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c]/80 via-[#1c1c1c]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h4 className="font-[family-name:var(--font-cormorant)] text-2xl text-white mb-2">
                {item.title}
              </h4>
              <p className="font-[family-name:var(--font-inter)] text-white/50 text-xs leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

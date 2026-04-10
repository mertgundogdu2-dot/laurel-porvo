"use client";

export default function Features() {
  return (
    <section id="markalar" className="relative">
      {/* Three brand pillars with real photos and logos */}
      <div className="grid md:grid-cols-3">
        {[
          {
            image: "/porvo-burger.jpg",
            title: "Porvo Burger",
            desc: "Damak zevkinize hitap eden çeşitlerle dolu, her lokmada lezzet sunan özel burgerler.",
          },
          {
            image: "/porvo-trattoria.jpg",
            title: "Porvo Trattoria",
            desc: "İtalyan mutfağının en seçkin lezzetleri. Taze malzemelerle hazırlanan pizza ve makarnalar.",
          },
          {
            image: "/porvo-kahve-dukkani.png",
            title: "Kahve Dükkanı",
            desc: "Özenle seçilmiş çekirdekler, deneyimli baristalar ve özel demleme yöntemleriyle nitelikli kahve.",
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

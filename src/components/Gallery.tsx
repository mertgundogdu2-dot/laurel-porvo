"use client";

const images = [
  { src: "/laurel-2.jpg", alt: "Restoran salonu" },
  { src: "/laurel-1.jpg", alt: "Özenli sunum" },
  { src: "/laurel-exterior.jpg", alt: "Dış mekan" },
];

export default function Gallery() {
  return (
    <section className="py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-[family-name:var(--font-inter)] text-[#b8875a] text-[10px] tracking-[0.5em] uppercase">
            Atmosfer
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1c1c1c] mt-4">
            Mekanımız
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {images.map((img) => (
            <div key={img.src} className="group relative overflow-hidden aspect-[3/4]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1s] group-hover:scale-110"
                style={{ backgroundImage: `url('${img.src}')` }}
              />
              <div className="absolute inset-0 bg-[#1c1c1c]/0 group-hover:bg-[#1c1c1c]/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

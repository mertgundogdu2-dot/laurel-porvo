"use client";

import * as React from "react";
import { PhotoStackCard } from "@/components/ui/image-showcase";

const locationsData = [
  {
    images: [
      "/porvo-burger.jpg",
      "/porvo-burger.jpg",
      "/porvo-burger.jpg",
    ],
    category: "BURGER",
    title: "Porvo Burger",
    subtitle: "Çorlu · Golden Life Sitesi",
    logo: "/porvo-burger-logo.png",
  },
  {
    images: [
      "/porvo-trattoria.jpg",
      "/porvo-trattoria.jpg",
      "/porvo-trattoria.jpg",
    ],
    category: "TRATTORIA",
    title: "Porvo Trattoria",
    subtitle: "Çorlu · Adnan Doğu Cd.",
    logo: "/porvo-trattoria-logo.png",
  },
  {
    images: [
      "/porvo-kahve-dukkani.png",
      "/porvo-kahve-dukkani.png",
      "/porvo-kahve-dukkani.png",
    ],
    category: "KAHVE",
    title: "Kahve Dükkanı",
    subtitle: "Çorlu · Salih Omurtak Cd.",
    logo: "/porvo-kahve-dukkani-logo.png",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(1);

  return (
    <section className="py-20 px-6 bg-[#fafaf8]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-[family-name:var(--font-inter)] text-[#b8875a] text-[10px] tracking-[0.5em] uppercase">
            Atmosfer
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1c1c1c] mt-4">
            Mekanlarımız
          </h2>
        </div>

        {/* Desktop: overlapping cards */}
        <div className="hidden md:flex relative h-[420px] w-full items-center justify-center">
          {locationsData.map((loc, index) => (
            <div
              key={loc.title}
              className="absolute"
              style={{
                transform: `translateX(${(index - 1) * 320}px)`,
              }}
            >
              <PhotoStackCard
                images={loc.images}
                category={loc.category}
                title={loc.title}
                subtitle={loc.subtitle}
                logo={loc.logo}
                isActive={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                style={{ backgroundColor: "#000" }}
              />
            </div>
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="flex md:hidden flex-col items-center gap-8">
          {locationsData.map((loc, index) => (
            <PhotoStackCard
              key={loc.title}
              images={loc.images}
              category={loc.category}
              title={loc.title}
              subtitle={loc.subtitle}
              logo={loc.logo}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              style={{ backgroundColor: "#000" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

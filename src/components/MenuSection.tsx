"use client";

import { useState } from "react";
import { menuData } from "@/lib/menu-data";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-36 px-6 bg-[#fafaf8]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-[family-name:var(--font-inter)] text-[#b8875a] text-[10px] tracking-[0.5em] uppercase">
            Şef Murat Bozok
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1c1c1c] mt-4">
            Menü
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-1 mb-20">
          {menuData.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-3 text-[10px] tracking-[0.2em] uppercase font-[family-name:var(--font-inter)] transition-all duration-300 ${
                activeCategory === i
                  ? "text-[#1c1c1c] border-b-2 border-[#4a6741]"
                  : "text-[#1c1c1c]/30 hover:text-[#1c1c1c]/60"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category header */}
        <div className="text-center mb-12">
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl text-[#1c1c1c] font-light">
            {menuData[activeCategory].name}
          </h3>
          <span className="font-[family-name:var(--font-inter)] text-[#1c1c1c]/20 text-[10px] tracking-[0.3em] uppercase">
            {menuData[activeCategory].nameEn}
          </span>
        </div>

        {/* Menu items */}
        <div className="max-w-2xl mx-auto">
          {menuData[activeCategory].items.map((item) => (
            <div
              key={item.name}
              className="group flex items-baseline justify-between py-6 border-b border-[#1c1c1c]/5 last:border-0"
            >
              <div className="flex-1 mr-8">
                <h4 className="font-[family-name:var(--font-cormorant)] text-xl text-[#1c1c1c] group-hover:text-[#4a6741] transition-colors duration-300">
                  {item.name}
                </h4>
                {item.description && (
                  <p className="font-[family-name:var(--font-inter)] text-[#1c1c1c]/30 text-[12px] mt-1">
                    {item.description}
                  </p>
                )}
              </div>
              <span className="font-[family-name:var(--font-cormorant)] text-[#b8875a] text-xl tabular-nums">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        <p className="font-[family-name:var(--font-inter)] text-[#1c1c1c]/15 text-[10px] text-center mt-16 tracking-wider">
          Fiyatlara KDV dahildir · %10 hizmet bedeli uygulanmaktadır
        </p>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { menuData } from "@/lib/menu-data";
import { MenuItemCard } from "@/components/ui/menu-item-card";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-20 px-6 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-[family-name:var(--font-inter)] text-[#b8875a] text-[10px] tracking-[0.5em] uppercase">
            Porvo Burger
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1c1c1c] mt-4">
            Menü
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-1 mb-16">
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

        {/* Menu item cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuData[activeCategory].items.map((item) => (
            <MenuItemCard
              key={item.name}
              imageUrl={item.imageUrl || "/laurel-food.jpg"}
              isVegetarian={item.isVegetarian ?? false}
              name={item.name}
              price={item.price}
              originalPrice={item.price}
              quantity={item.description || ""}
              prepTimeInMinutes={15}
              onAdd={() => {}}
            />
          ))}
        </div>

        <p className="font-[family-name:var(--font-inter)] text-[#1c1c1c]/15 text-[10px] text-center mt-16 tracking-wider">
          Fiyatlar bilgilendirme amaçlıdır · Güncel menü için şubelerimizle iletişime geçin
        </p>
      </div>
    </section>
  );
}

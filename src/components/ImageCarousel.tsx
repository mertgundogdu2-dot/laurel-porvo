"use client";

import { ImageCarouselHero } from "@/components/ui/ai-image-generator-hero";

const porvoImages = [
  { id: "1", src: "/1.png", alt: "Porvo Burger", rotation: -15 },
  { id: "2", src: "/2.png", alt: "Porvo Trattoria", rotation: -8 },
  { id: "3", src: "/3.png", alt: "Porvo lezzet", rotation: 5 },
  { id: "4", src: "/4.png", alt: "Porvo mekan", rotation: 12 },
  { id: "5", src: "/5.png", alt: "Porvo kahve", rotation: -12 },
  { id: "6", src: "/6.png", alt: "Porvo pizza", rotation: 8 },
  { id: "7", src: "/7.png", alt: "Porvo atmosfer", rotation: -5 },
  { id: "8", src: "/8.png", alt: "Porvo etkinlik", rotation: 10 },
];

const porvoFeatures = [
  {
    title: "3 Benzersiz Mekan",
    description: "Burger, Trattoria ve Kahve Dükkanı — her biri kendine özgü bir deneyim sunar.",
  },
  {
    title: "Taze & Yerel",
    description: "Günlük taze malzemeler, yerel üreticilerden özenle seçilmiş hammaddeler.",
  },
  {
    title: "Unutulmaz Anlar",
    description: "Lezzetin ötesinde, hatırlanacak anılar biriktireceğiniz bir atmosfer.",
  },
];

export default function ImageCarousel() {
  return (
    <ImageCarouselHero
      title="Porvo Dünyasına Hoş Geldiniz"
      subtitle="Lezzet & Deneyim"
      description="Çorlu'nun kalbinde üç farklı konsept, bir tutku. Burger'den İtalyan mutfağına, kahveden etkinliklere — Porvo'da her an özel."
      ctaText="Keşfet"
      onCtaClick={() => {
        document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
      }}
      images={porvoImages}
      features={porvoFeatures}
    />
  );
}

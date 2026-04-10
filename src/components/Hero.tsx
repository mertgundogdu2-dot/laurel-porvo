"use client";

import { useRef, useEffect } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section id="anasayfa" className="relative h-screen overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/porvo-burger-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#1c1c1c]/50 z-[1]" />

      {/* Center content */}
      <div className="absolute inset-0 z-[25] flex flex-col items-center justify-center pointer-events-none">
        <img src="/porvo-beyaz.png" alt="Porvo" className="h-12 md:h-16 mb-6 drop-shadow-lg" />
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-6xl md:text-7xl font-light text-white text-center drop-shadow-lg">
          <span className="text-[#7cb86a]">Burger, Pizza, Makarna ve Kahve</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-white/60 drop-shadow-md text-center max-w-lg font-[family-name:var(--font-inter)] tracking-wide">
          Porvo&apos;nun hikayesi samimiyete dayanır. 2022&apos;den bu yana Çorlu&apos;nun vazgeçilmez lezzet durağı.
        </p>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-30 flex flex-col sm:flex-row items-center justify-center gap-5">
        <a
          href="#markalar"
          className="bg-[#4a6741] text-white px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] font-medium hover:bg-white hover:text-[#1c1c1c] transition-all duration-300 min-w-[200px] text-center"
        >
          Keşfet
        </a>
        <a
          href="#menu"
          className="border border-white/25 text-white px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] hover:bg-white/5 transition-all duration-300 min-w-[200px] text-center"
        >
          Menü
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30">
        <a
          href="#hakkimizda"
          className="block w-px h-16 bg-gradient-to-b from-transparent to-white/30 mx-auto animate-pulse"
        />
      </div>
    </section>
  );
}

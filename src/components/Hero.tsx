"use client";

import { useRef, useEffect } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays on load
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section id="anasayfa" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video-hd.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#1c1c1c]/40" />

      <div className="relative text-center px-6 max-w-3xl">
        <p className="font-[family-name:var(--font-inter)] text-white/50 text-[11px] tracking-[0.5em] uppercase mb-12">
          Demirciköy · Sarıyer · İstanbul
        </p>

        <h1 className="font-[family-name:var(--font-cormorant)] text-[5rem] md:text-[7rem] lg:text-[9rem] font-extralight text-white leading-[0.85] tracking-[0.04em]">
          Laurel
        </h1>

        <div className="flex items-center justify-center gap-6 my-8">
          <div className="w-16 h-px bg-white/20" />
          <p className="font-[family-name:var(--font-cormorant)] text-white/40 text-lg italic">
            eat · drink · breathe
          </p>
          <div className="w-16 h-px bg-white/20" />
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#rezervasyon"
            className="bg-white text-[#1c1c1c] px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] font-medium hover:bg-white/90 transition-all duration-300 min-w-[200px]"
          >
            Rezervasyon
          </a>
          <a
            href="#menu"
            className="border border-white/25 text-white px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-[family-name:var(--font-inter)] hover:bg-white/5 transition-all duration-300 min-w-[200px]"
          >
            Menü
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <a href="#hakkimizda" className="block w-px h-16 bg-gradient-to-b from-transparent to-white/30 mx-auto animate-pulse" />
      </div>
    </section>
  );
}

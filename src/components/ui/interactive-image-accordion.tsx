"use client";

import React, { useState, useRef, useEffect } from "react";

interface AccordionVideoItem {
  id: number;
  title: string;
  videoUrl: string;
  posterUrl?: string;
}

const AccordionItem = ({
  item,
  isActive,
  onMouseEnter,
  isMuted,
  isInView,
}: {
  item: AccordionVideoItem;
  isActive: boolean;
  onMouseEnter: () => void;
  isMuted: boolean;
  isInView: boolean;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isActive && isInView) {
      videoRef.current.play().catch(() => {});
      videoRef.current.muted = isMuted;
    } else {
      videoRef.current.pause();
      videoRef.current.muted = true;
    }
  }, [isActive, isMuted, isInView]);

  return (
    <div
      className={`
        relative overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[280px] h-[500px]" : "w-[60px] h-[500px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      <video
        ref={videoRef}
        src={item.videoUrl}
        loop
        playsInline
        muted
        preload="metadata"
        className="absolute inset-0 w-full h-full object-contain"
      />
      <div className="absolute inset-0 bg-black/30" />

      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out font-[family-name:var(--font-inter)]
          ${
            isActive
              ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
              : "w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90"
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

const accordionItems: AccordionVideoItem[] = [
  {
    id: 3,
    title: "Pizza Atölyesi",
    videoUrl: "/porvo-video-3.mp4",
  },
  {
    id: 1,
    title: "Porvo Burger",
    videoUrl: "/porvo-video-1.mp4",
  },
  {
    id: 2,
    title: "Porvo Trattoria",
    videoUrl: "/porvo-video-2.mp4",
  },
];

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#2a2a2a]">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Sol: Metin */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="font-[family-name:var(--font-inter)] text-[#b8875a] text-[10px] tracking-[0.5em] uppercase">
              Sosyal Medya
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-light text-white mt-4 leading-tight">
              Porvo&apos;dan<br />
              <span className="italic text-[#b8875a]">anlar</span>
            </h2>
            <p className="mt-6 font-[family-name:var(--font-inter)] text-white/50 text-base max-w-xl mx-auto md:mx-0 leading-relaxed">
              Mutfağımızdan sahneye, lezzetlerimizden etkinliklerimize... Porvo dünyasından özel anları keşfedin. Burger yapım süreçleri, pizza atölyeleri ve daha fazlası.
            </p>
            <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/porvoburger/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#2a2a2a] font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase px-8 py-4 hover:bg-white/90 transition-colors duration-300"
              >
                Takip Et
              </a>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="inline-flex items-center gap-2 border border-white/20 px-6 py-4 text-white/50 hover:text-white hover:border-white/40 transition-all duration-300"
              >
                {isMuted ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
                )}
                <span className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase">
                  {isMuted ? "Sesi Aç" : "Sesi Kapat"}
                </span>
              </button>
            </div>
          </div>

          {/* Sağ: Video Accordion */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                  isMuted={isMuted}
                  isInView={isInView}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#menu", label: "Menü" },
  { href: "#rezervasyon", label: "Rezervasyon" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl py-4 shadow-[0_1px_0_0_rgba(0,0,0,0.04)]"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <a
          href="#anasayfa"
          className={`font-[family-name:var(--font-cormorant)] text-[22px] font-light tracking-[0.25em] uppercase transition-colors duration-700 ${
            scrolled ? "text-[#1c1c1c]" : "text-white"
          }`}
        >
          Laurel
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase transition-colors duration-500 ${
                scrolled
                  ? "text-[#1c1c1c]/50 hover:text-[#1c1c1c]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#rezervasyon"
            className={`font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase px-6 py-2.5 transition-all duration-500 ${
              scrolled
                ? "bg-[#4a6741] text-white hover:bg-[#3d5936]"
                : "border border-white/30 text-white hover:bg-white/10"
            }`}
          >
            Rezervasyon
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden transition-colors ${scrolled ? "text-[#1c1c1c]" : "text-white"}`}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#1c1c1c]/5 mt-4">
          <div className="flex flex-col items-center py-10 gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase text-[#1c1c1c]/50 hover:text-[#1c1c1c]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

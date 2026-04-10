"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PhotoStackCardProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
  category: string;
  title: string;
  subtitle: string;
  logo?: string;
  isActive?: boolean;
}

const cardVariants = {
  inactive: {
    scale: 1,
    y: 0,
    zIndex: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
  active: {
    scale: 1.05,
    y: -15,
    zIndex: 10,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

export const PhotoStackCard = React.forwardRef<
  HTMLDivElement,
  PhotoStackCardProps
>(({ className, images, category, title, subtitle, logo, isActive, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "group relative flex h-96 w-96 cursor-pointer flex-col overflow-hidden",
        "transition-colors duration-300 ease-in-out",
        className
      )}
      variants={cardVariants}
      animate={isActive ? "active" : "inactive"}
      {...props}
    >
      {/* Fotoğraf - kartın tamamını kaplar */}
      <div className="absolute inset-0">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover scale-[1.08] transition-transform duration-500 group-hover:scale-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Logo ve metin - altta */}
      <div className="relative z-10 mt-auto p-8">
        {logo && (
          <img src={logo} alt={title} className="h-12 mb-3" />
        )}
        <p className="text-sm text-white/70 font-[family-name:var(--font-inter)]">{subtitle}</p>
      </div>
    </motion.div>
  );
});
PhotoStackCard.displayName = "PhotoStackCard";

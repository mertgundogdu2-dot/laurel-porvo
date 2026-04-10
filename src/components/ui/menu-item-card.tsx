"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

interface MenuItemCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  isVegetarian: boolean;
  name: string;
  price: number;
  originalPrice: number;
  quantity: string;
  prepTimeInMinutes: number;
  onAdd: () => void;
}

const MenuItemCard = React.forwardRef<HTMLDivElement, MenuItemCardProps>(
  (
    {
      className,
      imageUrl,
      isVegetarian,
      name,
      price,
      originalPrice,
      quantity,
      prepTimeInMinutes,
      onAdd,
      ...props
    },
    ref
  ) => {
    const savings = originalPrice - price;

    const cardVariants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      hover: { scale: 1.03, transition: { duration: 0.2 } },
    };

    const buttonVariants = {
      tap: { scale: 0.95 },
    };

    const vegIconVariants = {
      initial: { scale: 0 },
      animate: {
        scale: 1,
        transition: { delay: 0.3, type: "spring", stiffness: 200 },
      },
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative flex flex-col w-full max-w-sm overflow-hidden bg-card text-card-foreground shadow-sm group",
          className
        )}
        variants={cardVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        layout
      >
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-48 transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />


          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
            <motion.button
              onClick={onAdd}
              variants={buttonVariants}
              whileTap="tap"
              className="px-8 py-2 text-sm font-bold uppercase transition-all duration-300 transform translate-y-4 border shadow-lg opacity-0 bg-background/80 text-foreground backdrop-blur-sm border-border/50 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={`${name} ekle`}
            >
              Ekle
            </motion.button>
          </div>
        </div>

        <div className="flex flex-col flex-grow p-4 text-left">
          <div className="flex items-baseline gap-2">
            <span className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-foreground">
              {price}₺
            </span>
            {originalPrice > price && (
              <>
                <span className="font-[family-name:var(--font-cormorant)] text-base line-through text-muted-foreground">
                  {originalPrice}₺
                </span>
                {savings > 0 && (
                  <span className="text-sm font-semibold text-green-500">
                    {savings}₺ indirim
                  </span>
                )}
              </>
            )}
          </div>

          <p className="mt-1 font-[family-name:var(--font-inter)] text-sm text-muted-foreground">{quantity}</p>

          <h3 className="mt-2 font-[family-name:var(--font-cormorant)] text-lg font-semibold leading-tight text-foreground">
            {name}
          </h3>

          <div className="flex items-center gap-1.5 mt-auto pt-2 font-[family-name:var(--font-inter)] text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>{prepTimeInMinutes} dk</span>
          </div>
        </div>
      </motion.div>
    );
  }
);

MenuItemCard.displayName = "MenuItemCard";

export { MenuItemCard };

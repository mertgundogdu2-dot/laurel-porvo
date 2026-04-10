import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Porvo | Burger, Pizza, Makarna ve Kahve - Çorlu",
  description:
    "Porvo Çorlu - Burger, pizza, makarna ve kahve lezzetleri. Porvo Burger, Porvo Trattoria ve Porvo Kahve Dükkanı ile Çorlu'nun vazgeçilmez lezzet durağı.",
  keywords: [
    "Porvo",
    "Porvo Çorlu",
    "Porvo Burger",
    "Porvo Trattoria",
    "Porvo Kahve Dükkanı",
    "Çorlu burger",
    "Çorlu pizza",
    "Çorlu kahve",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}

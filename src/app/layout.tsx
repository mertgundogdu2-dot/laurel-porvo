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

export const metadata: Metadata = {
  title: "Laurel İstanbul | Doğanın Kalbinde Gastronomi",
  description:
    "Demirciköy, Sarıyer'de 1500m² yeşil alan içinde premium gastronomi deneyimi. Şef Murat Bozok'un özenle hazırladığı menü, Fransız kafe, çocuk parkı ve huzurlu atmosfer.",
  keywords: [
    "Laurel İstanbul",
    "Demirciköy restoran",
    "Sarıyer restaurant",
    "İstanbul brunch",
    "doğa içinde restoran",
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
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

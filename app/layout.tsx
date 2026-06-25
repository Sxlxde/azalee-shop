import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import CookieBanner from "@/components/layout/CookieBanner";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azalée - L'été se porte en Azalée",
  description:
    "Boutique féminine de robes et accessoires d'été. Lin, fleuri, paille et bijoux dorés — une sélection romantique et solaire.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-sage focus:px-4 focus:py-2 focus:text-white"
        >
          Aller au contenu
        </a>
        <AnnouncementBar />
        <Navbar />
        <main id="main" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CartDrawer />
        <CookieBanner />
      </body>
    </html>
  );
}

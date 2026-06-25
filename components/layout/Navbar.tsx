"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, Menu, ShoppingBag, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/store/cart";
import { useWishlist } from "@/store/wishlist";
import { useHasMounted } from "@/lib/useHasMounted";

const links = [
  { href: "/robes", label: "Robes d'été" },
  { href: "/accessoires", label: "Accessoires" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const openCart = useCart((s) => s.open);
  const cartCount = useCart((s) => s.lines.reduce((n, l) => n + l.qty, 0));
  const wishCount = useWishlist((s) => s.ids.length);
  const mounted = useHasMounted();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/85 backdrop-blur-md">
      <nav className="container-boutique flex h-16 items-center justify-between md:h-20">
        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          aria-label="Ouvrir le menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-6 w-6" strokeWidth={1.5} />
        </button>

        {/* Left links (desktop) */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-ink transition-colors hover:text-sage"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif text-3xl font-semibold tracking-tight text-ink md:absolute md:left-1/2 md:-translate-x-1/2"
        >
          Azalée
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <Link
            href="/favoris"
            aria-label="Mes favoris"
            className="relative hidden sm:block"
          >
            <Heart className="h-5 w-5" strokeWidth={1.5} />
            {mounted && wishCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-deep px-1 text-[0.6rem] font-semibold text-white">
                {wishCount}
              </span>
            )}
          </Link>
          <button
            onClick={openCart}
            aria-label="Ouvrir le panier"
            className="relative"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            {mounted && cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-sage px-1 text-[0.6rem] font-semibold text-white"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile drawer menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-ink/30 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed inset-y-0 left-0 z-50 w-72 bg-cream p-6 md:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-serif text-2xl font-semibold">Azalée</span>
                <button
                  aria-label="Fermer le menu"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-6 w-6" strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex flex-col gap-5">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-serif text-2xl text-ink"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  href="/favoris"
                  onClick={() => setMobileOpen(false)}
                  className="font-serif text-2xl text-ink"
                >
                  Mes favoris
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

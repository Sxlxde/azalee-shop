"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Heart, MapPin, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/store/cart";
import { useWishlist } from "@/store/wishlist";
import { useHasMounted } from "@/lib/useHasMounted";
import SearchBox from "@/components/search/SearchBox";

const links = [
  { href: "/nouveautes", label: "Nouveautés", highlight: true },
  { href: "/robes", label: "Robes d'été" },
  { href: "/jupes", label: "Jupes" },
  { href: "/shorts", label: "Shorts" },
  { href: "/chemisiers", label: "Chemisiers" },
  { href: "/accessoires", label: "Accessoires" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const openCart = useCart((s) => s.open);
  const cartCount = useCart((s) => s.lines.reduce((n, l) => n + l.qty, 0));
  const wishCount = useWishlist((s) => s.ids.length);
  const mounted = useHasMounted();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-cream/90 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-soft" : "border-b border-line"
      }`}
    >
      {/* ── Top row ── */}
      <div className="container-boutique flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Mobile burger */}
        <button
          className="md:hidden"
          aria-label="Ouvrir le menu"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-6 w-6" strokeWidth={1.5} />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl"
        >
          Azalée
        </Link>

        {/* Desktop search (right-center) */}
        <div className="ml-auto hidden w-64 lg:block xl:w-72">
          <SearchBox />
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4 md:gap-5">
          {/* Mobile search toggle */}
          <button
            className="lg:hidden"
            aria-label="Rechercher"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="h-5 w-5" strokeWidth={1.5} />
          </button>
          <Link
            href="/magasins"
            aria-label="Trouver un magasin"
            className="hidden md:block"
          >
            <MapPin className="h-5 w-5" strokeWidth={1.5} />
          </Link>
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
          <Link
            href="/compte"
            aria-label="Mon compte"
            className="hidden sm:block"
          >
            <User className="h-5 w-5" strokeWidth={1.5} />
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
      </div>

      {/* ── Nav links row (desktop) ── */}
      <nav className="hidden border-t border-line/70 md:block">
        <ul className="container-boutique flex items-center justify-center gap-7 py-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm tracking-wide transition-colors hover:text-sage ${
                  l.highlight
                    ? "rounded-full border border-rose-deep px-3 py-1 font-medium text-rose-deep hover:bg-rose-deep hover:text-white"
                    : "text-ink"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Mobile fullscreen search ── */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-cream p-5 lg:hidden"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex-1">
                <SearchBox autoFocus onNavigate={() => setSearchOpen(false)} />
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                aria-label="Fermer la recherche"
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile drawer menu ── */}
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
              className="fixed inset-y-0 left-0 z-50 w-72 overflow-y-auto bg-cream p-6 md:hidden"
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
                    className={`font-serif text-2xl ${
                      l.highlight ? "text-rose-deep" : "text-ink"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
                <hr className="border-line" />
                <Link
                  href="/favoris"
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-ink"
                >
                  Mes favoris
                </Link>
                <Link
                  href="/compte"
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-ink"
                >
                  Mon compte
                </Link>
                <Link
                  href="/magasins"
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-ink"
                >
                  Nos magasins
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-ink"
                >
                  Contact & SAV
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

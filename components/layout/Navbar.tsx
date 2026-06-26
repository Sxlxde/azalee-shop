"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronRight, Heart, MapPin, Search, ShoppingBag, User, X } from "lucide-react";
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

// Menu mobile : en HAUT favoris + nouveautés, puis tous les types de vêtements,
// puis le reste sous un séparateur.
const mobileTop = [
  { href: "/favoris", label: "Mes favoris", highlight: false },
  { href: "/nouveautes", label: "Nouveautés", highlight: true },
];
const mobileCategories = [
  { href: "/robes", label: "Robes d'été" },
  { href: "/jupes", label: "Jupes" },
  { href: "/shorts", label: "Shorts" },
  { href: "/chemisiers", label: "Chemisiers" },
  { href: "/accessoires", label: "Accessoires" },
];
const mobileExtra = [
  { href: "/compte", label: "Mon compte" },
  { href: "/magasins", label: "Nos magasins" },
  { href: "/contact", label: "Contact & SAV" },
  { href: "/notre-histoire", label: "Notre histoire" },
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

  // Fermeture clavier (Esc) pour menu mobile + recherche
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setSearchOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Verrou scroll quand drawer ouvert
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-40 bg-cream/90 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-soft" : "border-b border-line"
      }`}
    >
      {/* ── Top row : burger | logo · search (centrée absolue) · icons ── */}
      <div className="container-boutique relative flex h-16 items-center gap-4 md:h-20">
        {/* Burger (mobile) */}
        <BurgerButton
          open={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        />

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-3xl font-semibold tracking-tight text-ink md:text-4xl"
        >
          Azalée
        </Link>

        {/* Search — CENTRÉE au milieu de la page (desktop) */}
        <div className="absolute left-1/2 hidden w-full max-w-md -translate-x-1/2 px-4 lg:block">
          <SearchBox />
        </div>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-4 md:gap-5">
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
          <Link href="/compte" aria-label="Mon compte" className="hidden sm:block">
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

      {/* ── Mobile fullscreen search (padding symétrique) ── */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-cream lg:hidden"
          >
            <div className="flex h-16 items-center gap-3 border-b border-line px-5">
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

      {/* ── Menu mobile : déroule du haut sous la navbar (style Altius/Jules) ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="absolute inset-x-0 top-full z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-cream shadow-card md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
              }}
              className="container-boutique flex flex-col py-2"
            >
              {mobileTop.map((l) => (
                <MobileLink
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  highlight={l.highlight}
                >
                  {l.label}
                </MobileLink>
              ))}
              {mobileCategories.map((l) => (
                <MobileLink
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </MobileLink>
              ))}
              {mobileExtra.map((l) => (
                <MobileLink
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  small
                >
                  {l.label}
                </MobileLink>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileLink({
  href,
  onClick,
  highlight = false,
  small = false,
  children,
}: {
  href: string;
  onClick: () => void;
  highlight?: boolean;
  small?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: -10 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="border-b border-line/70 last:border-b-0"
    >
      <Link
        href={href}
        onClick={onClick}
        className={`group flex items-center justify-between transition-colors ${
          small
            ? "py-2.5 text-base text-ink/80 hover:text-sage"
            : `py-3 font-serif text-2xl hover:text-sage ${
                highlight ? "text-rose-deep" : "text-ink"
              }`
        }`}
      >
        {children}
        <ChevronRight className="h-4 w-4 text-muted transition-transform group-hover:translate-x-1 group-hover:text-sage" />
      </Link>
    </motion.li>
  );
}

function BurgerButton({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={open}
      className="relative grid h-6 w-6 place-items-center md:hidden"
    >
      <motion.span
        animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
        transition={{ duration: 0.25 }}
        className="absolute h-0.5 w-6 rounded bg-ink"
      />
      <motion.span
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute h-0.5 w-6 rounded bg-ink"
      />
      <motion.span
        animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
        transition={{ duration: 0.25 }}
        className="absolute h-0.5 w-6 rounded bg-ink"
      />
    </button>
  );
}

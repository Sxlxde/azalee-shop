"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORY_META } from "@/lib/types";

const cards = [
  {
    href: "/nouveautes",
    label: "Nouveautés",
    subtitle: "Les dernières arrivées de l'été",
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=900&q=80",
  },
  ...CATEGORY_META.map((c) => ({
    href: `/${c.slug}`,
    label: c.label,
    subtitle: c.subtitle,
    image: c.image,
  })),
];

export default function CategoryCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState({ active: false, startX: 0, scroll: 0 });

  // Défile d'UNE card (largeur réelle du 1er enfant + le gap).
  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const gap = 20; // gap-5
    const amount = first ? first.offsetWidth + gap : 320;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Arrows (mobile + desktop) — anim balayage au hover */}
      <button
        onClick={() => scrollBy(-1)}
        aria-label="Précédent"
        className="arrow-sweep arrow-left absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-line bg-surface/90 p-2 shadow-soft backdrop-blur transition-colors hover:border-sage hover:text-sage md:-left-4"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => scrollBy(1)}
        aria-label="Suivant"
        className="arrow-sweep arrow-right absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-line bg-surface/90 p-2 shadow-soft backdrop-blur transition-colors hover:border-sage hover:text-sage md:-right-4"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-10 pb-4 [scrollbar-width:none] md:px-0 [&::-webkit-scrollbar]:hidden"
        onMouseDown={(e) => {
          setDrag({
            active: true,
            startX: e.pageX,
            scroll: scroller.current?.scrollLeft ?? 0,
          });
        }}
        onMouseMove={(e) => {
          if (!drag.active || !scroller.current) return;
          scroller.current.scrollLeft = drag.scroll - (e.pageX - drag.startX);
        }}
        onMouseUp={() => setDrag((d) => ({ ...d, active: false }))}
        onMouseLeave={() => setDrag((d) => ({ ...d, active: false }))}
      >
        {cards.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            draggable={false}
            className="group relative aspect-[3/4] w-64 shrink-0 snap-center overflow-hidden rounded-lg shadow-soft transition-all duration-300 hover:scale-[1.03] hover:shadow-card sm:w-72 md:snap-start"
          >
            <Image
              src={c.image}
              alt={c.label}
              fill
              draggable={false}
              sizes="288px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 text-white">
              <h3 className="font-serif text-2xl font-semibold">{c.label}</h3>
              <p className="mt-1 text-sm text-white/85">{c.subtitle}</p>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium">
                Découvrir{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

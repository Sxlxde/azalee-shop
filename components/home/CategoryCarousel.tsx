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

  const scrollBy = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Arrows (desktop) */}
      <button
        onClick={() => scrollBy(-1)}
        aria-label="Précédent"
        className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-line bg-surface p-2 shadow-soft transition-colors hover:text-sage md:block"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => scrollBy(1)}
        aria-label="Suivant"
        className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-line bg-surface p-2 shadow-soft transition-colors hover:text-sage md:block"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
            className="group relative aspect-[3/4] w-64 shrink-0 snap-start overflow-hidden rounded-lg shadow-soft sm:w-72"
          >
            <Image
              src={c.image}
              alt={c.label}
              fill
              draggable={false}
              sizes="288px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
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

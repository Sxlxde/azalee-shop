"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/lib/types";
import ProductCard from "@/components/product/ProductCard";

export default function ProductCarousel({ products }: { products: Product[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState({ active: false, startX: 0, scroll: 0 });

  const scrollBy = (dir: 1 | -1) => {
    scroller.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scrollBy(-1)}
        aria-label="Précédent"
        className="arrow-sweep arrow-left absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-line bg-surface p-2 shadow-soft transition-colors hover:border-sage hover:text-sage md:block"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => scrollBy(1)}
        aria-label="Suivant"
        className="arrow-sweep arrow-right absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-line bg-surface p-2 shadow-soft transition-colors hover:border-sage hover:text-sage md:block"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseDown={(e) =>
          setDrag({
            active: true,
            startX: e.pageX,
            scroll: scroller.current?.scrollLeft ?? 0,
          })
        }
        onMouseMove={(e) => {
          if (!drag.active || !scroller.current) return;
          scroller.current.scrollLeft = drag.scroll - (e.pageX - drag.startX);
        }}
        onMouseUp={() => setDrag((d) => ({ ...d, active: false }))}
        onMouseLeave={() => setDrag((d) => ({ ...d, active: false }))}
      >
        {products.map((p) => (
          <div key={p.id} className="w-44 shrink-0 snap-start sm:w-56 lg:w-64">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { searchProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";

export default function SearchBox({
  autoFocus = false,
  onNavigate,
  className = "",
}: {
  autoFocus?: boolean;
  onNavigate?: () => void;
  className?: string;
}) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const results = q.trim() ? searchProducts(q).slice(0, 5) : [];

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    router.push(`/recherche?q=${encodeURIComponent(q.trim())}`);
    setOpen(false);
    onNavigate?.();
  };

  return (
    <div ref={ref} className={`relative ${className}`}>
      <form onSubmit={submit} className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          strokeWidth={1.5}
        />
        <input
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
          type="search"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setOpen(true);
          }}
          onFocus={() => {
            setOpen(true);
            setFocused(true);
          }}
          onBlur={() => setFocused(false)}
          placeholder="Rechercher"
          aria-label="Rechercher un produit"
          className="w-full rounded-full border border-line bg-surface py-2 pl-9 pr-9 text-sm outline-none focus:outline-none"
        />
        {/* Contour sauge qui se dessine progressivement autour de la barre au focus */}
        <svg
          aria-hidden="true"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        >
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="9999"
            ry="9999"
            fill="none"
            stroke="var(--sage)"
            strokeWidth="1.5"
            pathLength={1}
            strokeDasharray={1}
            strokeDashoffset={focused ? 0 : 1}
            style={{ transition: "stroke-dashoffset 0.55s ease" }}
          />
        </svg>
        {q && (
          <button
            type="button"
            onClick={() => setQ("")}
            aria-label="Effacer"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </form>

      {open && q.trim() && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-lg border border-line bg-surface shadow-card">
          {results.length === 0 ? (
            <p className="px-4 py-6 text-center text-sm text-muted">
              Aucun résultat pour « {q} »
            </p>
          ) : (
            <>
              <ul className="max-h-80 overflow-y-auto">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/produit/${p.slug}`}
                      onClick={() => {
                        setOpen(false);
                        onNavigate?.();
                      }}
                      className="flex items-center gap-3 px-3 py-2.5 transition-colors hover:bg-cream"
                    >
                      <div className="relative h-14 w-11 shrink-0 overflow-hidden rounded bg-line">
                        <Image
                          src={p.images[0]}
                          alt=""
                          fill
                          sizes="44px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-serif text-base">{p.name}</p>
                        <p className="text-xs text-muted">{p.material}</p>
                      </div>
                      <span className="price text-sm">{formatPrice(p.price)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <button
                onClick={submit}
                className="block w-full border-t border-line bg-cream px-4 py-3 text-center text-sm font-medium text-sage hover:bg-rose-powder/30"
              >
                Voir tous les résultats →
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

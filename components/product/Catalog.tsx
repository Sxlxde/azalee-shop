"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import type { Product, SortKey } from "@/lib/types";
import ProductCard from "@/components/product/ProductCard";

function uniq<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

export default function Catalog({ products }: { products: Product[] }) {
  const allSizes = useMemo(
    () => uniq(products.flatMap((p) => p.sizes)),
    [products]
  );
  const allColors = useMemo(
    () =>
      uniq(products.flatMap((p) => p.colors.map((c) => c.name))).map((name) => {
        const hex =
          products
            .flatMap((p) => p.colors)
            .find((c) => c.name === name)?.hex ?? "#ccc";
        return { name, hex };
      }),
    [products]
  );
  const allMaterials = useMemo(
    () => uniq(products.map((p) => p.material)),
    [products]
  );
  const maxPrice = useMemo(
    () => Math.max(...products.map((p) => p.price)),
    [products]
  );

  const [sizes, setSizes] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [materials, setMaterials] = useState<string[]>([]);
  const [price, setPrice] = useState(maxPrice);
  const [sort, setSort] = useState<SortKey>("nouveautes");
  const [mobileFilters, setMobileFilters] = useState(false);

  const toggle = (
    value: string,
    list: string[],
    setter: (v: string[]) => void
  ) => setter(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  const filtered = useMemo(() => {
    const result = products.filter((p) => {
      if (sizes.length && !p.sizes.some((s) => sizes.includes(s))) return false;
      if (colors.length && !p.colors.some((c) => colors.includes(c.name)))
        return false;
      if (materials.length && !materials.includes(p.material)) return false;
      if (p.price > price) return false;
      return true;
    });
    result.sort((a, b) => {
      if (sort === "prix-asc") return a.price - b.price;
      if (sort === "prix-desc") return b.price - a.price;
      return Number(b.isNew) - Number(a.isNew);
    });
    return result;
  }, [products, sizes, colors, materials, price, sort]);

  const clearAll = () => {
    setSizes([]);
    setColors([]);
    setMaterials([]);
    setPrice(maxPrice);
  };

  const activeCount =
    sizes.length + colors.length + materials.length + (price < maxPrice ? 1 : 0);

  const FilterPanel = (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-semibold">Filtres</h2>
        {activeCount > 0 && (
          <button
            onClick={clearAll}
            className="text-xs text-sage underline-offset-2 hover:underline"
          >
            Tout effacer
          </button>
        )}
      </div>

      {/* Tailles */}
      <fieldset>
        <legend className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
          Taille
        </legend>
        <div className="flex flex-wrap gap-2">
          {allSizes.map((s) => (
            <button
              key={s}
              onClick={() => toggle(s, sizes, setSizes)}
              aria-pressed={sizes.includes(s)}
              className={`min-w-10 rounded-lg border px-3 py-1.5 text-sm transition-all ${
                sizes.includes(s)
                  ? "border-sage bg-sage text-white"
                  : "border-line hover:border-sage"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Couleurs */}
      <fieldset>
        <legend className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
          Couleur
        </legend>
        <div className="flex flex-wrap gap-2">
          {allColors.map((c) => (
            <button
              key={c.name}
              onClick={() => toggle(c.name, colors, setColors)}
              aria-label={c.name}
              aria-pressed={colors.includes(c.name)}
              title={c.name}
              className={`h-8 w-8 rounded-full border transition-all ${
                colors.includes(c.name)
                  ? "ring-2 ring-sage ring-offset-2 ring-offset-cream"
                  : "border-line"
              }`}
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </fieldset>

      {/* Prix */}
      <fieldset>
        <legend className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
          Prix max : <span className="price text-ink">{price} €</span>
        </legend>
        <input
          type="range"
          min={Math.min(...products.map((p) => p.price))}
          max={maxPrice}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-sage"
          aria-label="Prix maximum"
        />
      </fieldset>

      {/* Matière */}
      <fieldset>
        <legend className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
          Matière
        </legend>
        <div className="space-y-2">
          {allMaterials.map((m) => (
            <label
              key={m}
              className="flex cursor-pointer items-center gap-2 text-sm text-ink"
            >
              <input
                type="checkbox"
                checked={materials.includes(m)}
                onChange={() => toggle(m, materials, setMaterials)}
                className="h-4 w-4 rounded border-line accent-sage"
              />
              {m}
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
      {/* Sidebar desktop */}
      <aside className="hidden lg:block">
        <div className="sticky top-24">{FilterPanel}</div>
      </aside>

      <div>
        {/* Toolbar */}
        <div className="mb-6 flex items-center justify-between gap-4 border-b border-line pb-4">
          <p className="text-sm text-muted">
            {filtered.length} article{filtered.length > 1 ? "s" : ""}
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileFilters(true)}
              className="btn-ghost lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filtres{activeCount > 0 ? ` (${activeCount})` : ""}
            </button>
            <label htmlFor="sort" className="sr-only">
              Trier
            </label>
            <select
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-lg border border-line bg-surface px-3 py-2 text-sm focus:border-sage focus:outline-none"
            >
              <option value="nouveautes">Nouveautés</option>
              <option value="prix-asc">Prix croissant</option>
              <option value="prix-desc">Prix décroissant</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-serif text-2xl">Aucun article trouvé</p>
            <p className="mt-2 text-muted">Essayez d&apos;assouplir vos filtres.</p>
            <button onClick={clearAll} className="btn-secondary mt-6">
              Réinitialiser
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>

      {/* Mobile filters drawer */}
      <AnimatePresence>
        {mobileFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFilters(false)}
              className="fixed inset-0 z-50 bg-ink/40 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] overflow-y-auto bg-cream p-6 lg:hidden"
            >
              <button
                onClick={() => setMobileFilters(false)}
                aria-label="Fermer les filtres"
                className="absolute right-4 top-4 text-muted"
              >
                <X className="h-6 w-6" />
              </button>
              {FilterPanel}
              <button
                onClick={() => setMobileFilters(false)}
                className="btn-primary mt-8 w-full"
              >
                Voir {filtered.length} article{filtered.length > 1 ? "s" : ""}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

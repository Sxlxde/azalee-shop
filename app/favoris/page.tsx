"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { products } from "@/data/products";
import { useWishlist } from "@/store/wishlist";
import { useHasMounted } from "@/lib/useHasMounted";
import ProductCard from "@/components/product/ProductCard";

export default function FavorisPage() {
  const ids = useWishlist((s) => s.ids);
  const mounted = useHasMounted();
  const favoris = mounted ? products.filter((p) => ids.includes(p.id)) : [];

  return (
    <div className="container-boutique py-12 md:py-16">
      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
          Votre sélection
        </p>
        <h1 className="mt-3 font-serif text-5xl font-semibold">Mes favoris</h1>
      </div>

      {!mounted ? null : favoris.length === 0 ? (
        <div className="flex flex-col items-center py-20 text-center">
          <Heart className="h-12 w-12 text-muted" strokeWidth={1} />
          <p className="mt-6 font-serif text-2xl">
            Aucun coup de cœur pour l&apos;instant
          </p>
          <p className="mt-2 text-muted">
            Cliquez sur le cœur d&apos;un article pour le retrouver ici.
          </p>
          <Link href="/robes" className="btn-primary mt-8">
            Parcourir la collection
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {favoris.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

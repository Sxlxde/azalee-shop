"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import WishlistButton from "@/components/product/WishlistButton";
import QuickView from "@/components/product/QuickView";

export default function ProductCard({ product }: { product: Product }) {
  const [quickOpen, setQuickOpen] = useState(false);
  const hasSale = typeof product.oldPrice === "number";

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="group"
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-line">
          <Link href={`/produit/${product.slug}`} aria-label={product.name}>
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            />
            <Image
              src={product.images[1] ?? product.images[0]}
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="scale-105 object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
            />
          </Link>

          {/* Badges */}
          <div className="absolute left-3 top-3 flex flex-col gap-2">
            {product.isNew && <span className="tag-new">Nouveau</span>}
            {hasSale && <span className="tag-sale">Promo</span>}
            {product.tags.includes("coup de cœur") && (
              <span className="tag-new">Coup de cœur</span>
            )}
          </div>

          <div className="absolute right-3 top-3">
            <WishlistButton productId={product.id} />
          </div>

          {/* Quick view */}
          <button
            onClick={() => setQuickOpen(true)}
            className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-center gap-2 rounded-lg bg-surface/95 py-2.5 text-sm font-medium text-ink opacity-0 shadow-soft backdrop-blur transition-all duration-300 hover:bg-surface group-hover:translate-y-0 group-hover:opacity-100"
          >
            <Eye className="h-4 w-4" strokeWidth={1.5} /> Aperçu rapide
          </button>
        </div>

        <div className="mt-3 px-0.5">
          <Link
            href={`/produit/${product.slug}`}
            className="font-serif text-xl leading-tight transition-colors hover:text-sage"
          >
            {product.name}
          </Link>
          <p className="mt-0.5 text-xs text-muted">{product.material}</p>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="price text-sm font-medium">
              {formatPrice(product.price)}
            </span>
            {hasSale && (
              <span className="price text-xs text-muted line-through">
                {formatPrice(product.oldPrice as number)}
              </span>
            )}
          </div>
        </div>
      </motion.article>

      <QuickView
        product={product}
        open={quickOpen}
        onClose={() => setQuickOpen(false)}
      />
    </>
  );
}

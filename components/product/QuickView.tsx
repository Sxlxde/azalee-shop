"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import AddToCart from "@/components/product/AddToCart";

export default function QuickView({
  product,
  open,
  onClose,
}: {
  product: Product;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[70] bg-ink/50"
            aria-hidden="true"
          />
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`Aperçu de ${product.name}`}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid max-h-[90vh] w-full max-w-3xl grid-cols-1 overflow-hidden rounded-lg bg-cream shadow-card md:grid-cols-2"
            >
              <div className="relative hidden aspect-[3/4] md:block">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>

              <div className="relative overflow-y-auto p-6 md:p-8">
                <button
                  onClick={onClose}
                  aria-label="Fermer l'aperçu"
                  className="absolute right-4 top-4 text-muted hover:text-ink"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="mb-4">
                  {product.isNew && <span className="tag-new">Nouveau</span>}
                </div>
                <h2 className="font-serif text-3xl font-semibold leading-tight">
                  {product.name}
                </h2>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="price text-lg font-medium">
                    {formatPrice(product.price)}
                  </span>
                  {product.oldPrice && (
                    <span className="price text-sm text-muted line-through">
                      {formatPrice(product.oldPrice)}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {product.description}
                </p>

                <div className="mt-6">
                  <AddToCart product={product} />
                </div>

                <Link
                  href={`/produit/${product.slug}`}
                  onClick={onClose}
                  className="mt-4 inline-block text-sm text-sage underline-offset-4 hover:underline"
                >
                  Voir la fiche complète →
                </Link>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/types";
import { useCart } from "@/store/cart";

export default function AddToCart({
  product,
  showQty = false,
}: {
  product: Product;
  showQty?: boolean;
}) {
  const add = useCart((s) => s.add);
  const [size, setSize] = useState<string>(
    product.sizes.length === 1 ? product.sizes[0] : ""
  );
  const [color, setColor] = useState(product.colors[0]?.name ?? "Unique");
  const [qty, setQty] = useState(1);
  const [error, setError] = useState(false);

  const onAdd = () => {
    if (!size) {
      setError(true);
      return;
    }
    add(product, size, color, qty);
  };

  return (
    <div className="space-y-5">
      {/* Couleurs */}
      {product.colors.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
            Couleur : <span className="text-ink">{color}</span>
          </p>
          <div className="flex gap-2">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setColor(c.name)}
                aria-label={c.name}
                aria-pressed={color === c.name}
                className={`h-8 w-8 rounded-full border transition-all ${
                  color === c.name
                    ? "ring-2 ring-sage ring-offset-2 ring-offset-cream"
                    : "border-line"
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Tailles */}
      {product.sizes.length > 1 && (
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
            Taille
          </p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSize(s);
                  setError(false);
                }}
                aria-pressed={size === s}
                className={`min-w-11 rounded-lg border px-3 py-2 text-sm transition-all ${
                  size === s
                    ? "border-sage bg-sage text-white"
                    : "border-line hover:border-sage"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          {error && (
            <p role="alert" className="mt-2 text-sm text-rose-deep">
              Merci de choisir une taille.
            </p>
          )}
        </div>
      )}

      {/* Quantité */}
      {showQty && (
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">
            Quantité
          </p>
          <div className="inline-flex items-center rounded-lg border border-line">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="px-3 py-2 hover:text-sage"
              aria-label="Diminuer"
            >
              −
            </button>
            <span className="price w-8 text-center">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="px-3 py-2 hover:text-sage"
              aria-label="Augmenter"
            >
              +
            </button>
          </div>
        </div>
      )}

      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={onAdd}
        className="btn-primary w-full"
      >
        <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
        Ajouter au panier
      </motion.button>

      <p className="flex items-center justify-center gap-1.5 text-xs text-muted">
        <Check className="h-3.5 w-3.5 text-sage" /> Livraison offerte dès 80€
        (démo)
      </p>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/store/cart";
import { formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { isOpen, close, lines, setQty, remove, subtotal } = useCart();
  const total = subtotal();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-50 bg-ink/40"
            aria-hidden="true"
          />
          <motion.aside
            role="dialog"
            aria-label="Panier"
            aria-modal="true"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.32, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-cream shadow-card"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <h2 className="font-serif text-2xl font-semibold">
                Votre panier
              </h2>
              <button onClick={close} aria-label="Fermer le panier">
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <ShoppingBag className="h-10 w-10 text-muted" strokeWidth={1} />
                <p className="text-muted">Votre panier est vide.</p>
                <Link href="/robes" onClick={close} className="btn-primary">
                  Découvrir les robes
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-5 overflow-y-auto px-6 py-5">
                  {lines.map((l) => (
                    <div key={l.id} className="flex gap-4">
                      <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-lg bg-line">
                        <Image
                          src={l.image}
                          alt={l.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <Link
                          href={`/produit/${l.slug}`}
                          onClick={close}
                          className="font-serif text-lg leading-tight hover:text-sage"
                        >
                          {l.name}
                        </Link>
                        <p className="mt-1 text-xs text-muted">
                          {l.color} · Taille {l.size}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center rounded-lg border border-line">
                            <button
                              onClick={() => setQty(l.id, l.qty - 1)}
                              aria-label="Diminuer la quantité"
                              className="px-2 py-1 hover:text-sage"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="price w-7 text-center text-sm">
                              {l.qty}
                            </span>
                            <button
                              onClick={() => setQty(l.id, l.qty + 1)}
                              aria-label="Augmenter la quantité"
                              className="px-2 py-1 hover:text-sage"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <span className="price text-sm font-medium">
                            {formatPrice(l.price * l.qty)}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => remove(l.id)}
                        aria-label={`Retirer ${l.name}`}
                        className="self-start text-muted hover:text-rose-deep"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="border-t border-line px-6 py-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-muted">Sous-total</span>
                    <span className="price font-serif text-2xl font-semibold">
                      {formatPrice(total)}
                    </span>
                  </div>
                  <Link
                    href="/panier"
                    onClick={close}
                    className="btn-primary w-full"
                  >
                    Voir le panier
                  </Link>
                  <button
                    onClick={close}
                    className="mt-2 w-full text-center text-sm text-muted hover:text-sage"
                  >
                    Continuer mes achats
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

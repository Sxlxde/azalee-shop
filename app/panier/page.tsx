"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, Heart } from "lucide-react";
import { useCart } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import { useHasMounted } from "@/lib/useHasMounted";
import ClickCollectBadge from "@/components/ui/ClickCollectBadge";

const SHIPPING = 6.9;
const FREE_FROM = 80;

export default function PanierPage() {
  const { lines, setQty, remove, subtotal, clear } = useCart();
  const mounted = useHasMounted();
  const [ordered, setOrdered] = useState(false);

  const sub = subtotal();
  const shipping = sub >= FREE_FROM || sub === 0 ? 0 : SHIPPING;
  const total = sub + shipping;

  if (!mounted) {
    return <div className="container-boutique py-24" aria-busy="true" />;
  }

  if (ordered) {
    return (
      <div className="container-boutique flex flex-col items-center py-24 text-center md:py-32">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="grid h-20 w-20 place-items-center rounded-full bg-rose-powder text-4xl"
        >
          🌸
        </motion.div>
        <h1 className="mt-6 font-serif text-4xl font-semibold md:text-5xl">
          Merci ! Commande confirmée
        </h1>
        <p className="mt-4 max-w-md text-muted">
          Votre commande de démonstration a bien été enregistrée. Aucun paiement
          n&apos;a été effectué - il s&apos;agit d&apos;une boutique vitrine.
        </p>
        <Link href="/robes" className="btn-primary mt-8">
          Continuer mes achats
        </Link>
      </div>
    );
  }

  if (lines.length === 0) {
    return (
      <div className="container-boutique flex flex-col items-center py-24 text-center md:py-32">
        <ShoppingBag className="h-12 w-12 text-muted" strokeWidth={1} />
        <h1 className="mt-6 font-serif text-4xl font-semibold">
          Votre panier est vide
        </h1>
        <p className="mt-3 text-muted">
          Laissez-vous tenter par notre sélection d&apos;été.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/robes" className="btn-primary">
            Voir les robes
          </Link>
          <Link href="/accessoires" className="btn-secondary">
            Les accessoires
          </Link>
        </div>
        <Link
          href="/favoris"
          className="mt-4 inline-flex items-center gap-2 text-sm text-rose-deep hover:text-sage"
        >
          <Heart className="h-4 w-4" /> Voir mes favoris
        </Link>
      </div>
    );
  }

  return (
    <div className="container-boutique py-12 md:py-16">
      <h1 className="font-serif text-4xl font-semibold md:text-5xl">
        Votre panier
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        {/* Lignes */}
        <div className="divide-y divide-line border-y border-line">
          {lines.map((l) => (
            <div key={l.id} className="flex gap-4 py-6">
              <Link
                href={`/produit/${l.slug}`}
                className="relative h-36 w-28 shrink-0 overflow-hidden rounded-lg bg-line"
              >
                <Image
                  src={l.image}
                  alt={l.name}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </Link>
              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-4">
                  <div>
                    <Link
                      href={`/produit/${l.slug}`}
                      className="font-serif text-xl hover:text-sage"
                    >
                      {l.name}
                    </Link>
                    <p className="mt-1 text-sm text-muted">
                      {l.color} · Taille {l.size}
                    </p>
                  </div>
                  <span className="price font-medium">
                    {formatPrice(l.price * l.qty)}
                  </span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex items-center rounded-lg border border-line">
                    <button
                      onClick={() => setQty(l.id, l.qty - 1)}
                      className="px-3 py-1.5 hover:text-sage"
                      aria-label="Diminuer la quantité"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="price w-8 text-center text-sm">
                      {l.qty}
                    </span>
                    <button
                      onClick={() => setQty(l.id, l.qty + 1)}
                      className="px-3 py-1.5 hover:text-sage"
                      aria-label="Augmenter la quantité"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => remove(l.id)}
                    className="flex items-center gap-1.5 text-sm text-muted hover:text-rose-deep"
                  >
                    <Trash2 className="h-4 w-4" /> Retirer
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="py-4">
            <button
              onClick={clear}
              className="text-sm text-muted hover:text-rose-deep"
            >
              Vider le panier
            </button>
          </div>
        </div>

        {/* Récap */}
        <aside className="h-fit rounded-lg border border-line bg-surface p-6 lg:sticky lg:top-24">
          <h2 className="font-serif text-2xl font-semibold">Récapitulatif</h2>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">Sous-total</dt>
              <dd className="price">{formatPrice(sub)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Livraison</dt>
              <dd className="price">
                {shipping === 0 ? "Offerte" : formatPrice(shipping)}
              </dd>
            </div>
            {shipping > 0 && (
              <p className="text-xs text-muted">
                Plus que {formatPrice(FREE_FROM - sub)} pour la livraison
                offerte.
              </p>
            )}
          </dl>
          <div className="mt-4 flex justify-between border-t border-line pt-4">
            <span className="font-serif text-lg font-semibold">Total</span>
            <span className="price font-serif text-2xl font-semibold">
              {formatPrice(total)}
            </span>
          </div>
          <button
            onClick={() => {
              clear();
              setOrdered(true);
            }}
            className="btn-primary mt-6 w-full"
          >
            Passer commande
          </button>
          <Link
            href="/favoris"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-rose-deep px-4 py-2.5 text-sm font-medium text-rose-deep transition-colors hover:bg-rose-deep hover:text-white"
          >
            <Heart className="h-4 w-4" /> Mes favoris
          </Link>
          <ClickCollectBadge className="mt-4" />
          <p className="mt-3 text-center text-xs text-muted">
            Boutique démo - aucun paiement réel ne sera demandé.
          </p>
        </aside>
      </div>
    </div>
  );
}

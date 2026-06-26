import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { getProduct, products } from "@/data/products";
import { CATEGORY_META } from "@/lib/types";
import { formatPrice } from "@/lib/utils";
import ProductGallery from "@/components/product/ProductGallery";
import AddToCart from "@/components/product/AddToCart";
import WishlistButton from "@/components/product/WishlistButton";
import Accordion from "@/components/ui/Accordion";
import ClickCollectBadge from "@/components/ui/ClickCollectBadge";
import ProductCard from "@/components/product/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Produit - Azalée" };
  return {
    title: `${product.name} - Azalée`,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const categoryLabel =
    CATEGORY_META.find((c) => c.slug === product.category)?.label ??
    product.category;

  return (
    <div className="container-boutique py-8 md:py-12">
      {/* Breadcrumb */}
      <nav
        aria-label="Fil d'Ariane"
        className="mb-8 flex items-center gap-1.5 text-sm text-muted"
      >
        <Link href="/" className="hover:text-sage">
          Accueil
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link href={`/${product.category}`} className="hover:text-sage">
          {categoryLabel}
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={product.images} name={product.name} />

        <div>
          <div className="mb-3 flex gap-2">
            {product.isNew && <span className="tag-new">Nouveau</span>}
            {product.oldPrice && <span className="tag-sale">Promo</span>}
          </div>

          <div className="flex items-start justify-between gap-4">
            <h1 className="font-serif text-4xl font-semibold leading-tight md:text-5xl">
              {product.name}
            </h1>
            <WishlistButton productId={product.id} className="shadow-none" />
          </div>

          <div className="mt-3 flex items-baseline gap-3">
            <span className="price text-2xl font-medium">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="price text-lg text-muted line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>

          <p className="mt-5 leading-relaxed text-muted">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCart product={product} showQty />
          </div>

          <ClickCollectBadge className="mt-4" />

          <div className="mt-10">
            <Accordion
              items={[
                {
                  title: "Description",
                  content: `${product.description} Composition : ${product.material}.`,
                },
                {
                  title: "Matière & entretien",
                  content: `Fabriqué en ${product.material}. Lavage délicat à 30°, séchage à plat, repassage doux. (Informations démo.)`,
                },
                {
                  title: "Livraison & retours",
                  content:
                    "Livraison offerte dès 80€ d'achat, sous 2 à 4 jours ouvrés. Retours gratuits sous 30 jours. (Boutique de démonstration - aucune commande réelle.)",
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Tu aimeras aussi */}
      {related.length > 0 && (
        <section className="mt-20 md:mt-28">
          <h2 className="mb-8 text-center font-serif text-3xl font-semibold md:text-4xl">
            Tu aimeras aussi
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

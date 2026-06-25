import type { Metadata } from "next";
import { getByCategory } from "@/data/products";
import Catalog from "@/components/product/Catalog";
import CategoryHeader from "@/components/product/CategoryHeader";

export const metadata: Metadata = {
  title: "Shorts d'été — Azalée",
  description: "Shorts en lin, taille haute, fluides et denim clair.",
};

export default function ShortsPage() {
  const items = getByCategory("shorts");
  return (
    <>
      <CategoryHeader
        eyebrow="Collection été"
        title="Shorts"
        subtitle="Lin léger, taille haute, fluide ou denim clair. Le confort estival sans renoncer à l'élégance."
      />
      <div className="container-boutique pb-8">
        <Catalog products={items} />
      </div>
    </>
  );
}

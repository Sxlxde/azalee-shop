import type { Metadata } from "next";
import { getByCategory } from "@/data/products";
import Catalog from "@/components/product/Catalog";
import CategoryHeader from "@/components/product/CategoryHeader";

export const metadata: Metadata = {
  title: "Chemisiers d'été — Azalée",
  description: "Chemisiers en lin, broderie anglaise, manches bouffantes et dos noué.",
};

export default function ChemisiersPage() {
  const items = getByCategory("chemisiers");
  return (
    <>
      <CategoryHeader
        eyebrow="Collection été"
        title="Chemisiers"
        subtitle="Broderie anglaise, manches bouffantes, lin ou dos noué : des hauts romantiques pour toutes vos envies d'été."
      />
      <div className="container-boutique pb-8">
        <Catalog products={items} />
      </div>
    </>
  );
}

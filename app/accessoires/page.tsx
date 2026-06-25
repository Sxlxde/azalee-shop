import type { Metadata } from "next";
import { getByCategory } from "@/data/products";
import Catalog from "@/components/product/Catalog";
import CategoryHeader from "@/components/product/CategoryHeader";

export const metadata: Metadata = {
  title: "Accessoires d'été — Azalée",
  description:
    "Chapeaux de paille, sacs en raphia, lunettes de soleil, sandales et bijoux dorés.",
};

export default function AccessoiresPage() {
  const accessoires = getByCategory("accessoires");
  return (
    <>
      <CategoryHeader
        eyebrow="Collection été"
        title="Accessoires"
        subtitle="Capelines de paille, sacs en raphia tressé, lunettes rétro et bijoux dorés. La touche finale d'une silhouette solaire."
      />
      <div className="container-boutique pb-8">
        <Catalog products={accessoires} />
      </div>
    </>
  );
}

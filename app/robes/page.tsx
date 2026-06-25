import type { Metadata } from "next";
import { getByCategory } from "@/data/products";
import Catalog from "@/components/product/Catalog";
import CategoryHeader from "@/components/product/CategoryHeader";

export const metadata: Metadata = {
  title: "Robes d'été - Azalée",
  description:
    "Robes en lin, fleuries, slip dress, midi et mini. La collection été d'Azalée.",
};

export default function RobesPage() {
  const robes = getByCategory("robes");
  return (
    <>
      <CategoryHeader
        eyebrow="Collection été"
        title="Robes d'été"
        subtitle="Lin lavé, voiles fleuris et slip dress satinées. Des coupes fluides pour accompagner vos plus belles journées de soleil."
      />
      <div className="container-boutique pb-8">
        <Catalog products={robes} />
      </div>
    </>
  );
}

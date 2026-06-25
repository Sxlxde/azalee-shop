import type { Metadata } from "next";
import { getByCategory } from "@/data/products";
import Catalog from "@/components/product/Catalog";
import CategoryHeader from "@/components/product/CategoryHeader";

export const metadata: Metadata = {
  title: "Jupes d'été - Azalée",
  description: "Jupes midi, plissées, en lin et fluides. La collection été d'Azalée.",
};

export default function JupesPage() {
  const items = getByCategory("jupes");
  return (
    <>
      <CategoryHeader
        eyebrow="Collection été"
        title="Jupes d'été"
        subtitle="Plissées, midi, en lin ou fluides : des jupes qui ondulent au soleil et accompagnent vos plus belles journées."
      />
      <div className="container-boutique pb-8">
        <Catalog products={items} />
      </div>
    </>
  );
}

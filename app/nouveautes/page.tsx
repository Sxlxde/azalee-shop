import type { Metadata } from "next";
import Image from "next/image";
import { getNew } from "@/data/products";
import Catalog from "@/components/product/Catalog";

export const metadata: Metadata = {
  title: "Nouveautés été — Azalée",
  description: "Les dernières arrivées de la collection été d'Azalée.",
};

export default function NouveautesPage() {
  const items = getNew();
  return (
    <>
      {/* Bandeau éditorial */}
      <section className="relative h-[42vh] min-h-[300px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80"
          alt="Nouveautés été Azalée"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
        <div className="container-boutique absolute inset-x-0 bottom-0 pb-10 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.3em]">
            Fraîchement arrivé
          </p>
          <h1 className="mt-2 font-serif text-5xl font-semibold md:text-6xl">
            Nouveautés été
          </h1>
          <p className="mt-3 max-w-lg text-white/85">
            Les pièces qui font battre notre cœur cette saison. Lin, fleurs et
            lumière du Sud — à découvrir avant tout le monde.
          </p>
        </div>
      </section>

      <div className="container-boutique py-12">
        <Catalog products={items} />
      </div>
    </>
  );
}

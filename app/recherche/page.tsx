"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { searchProducts } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import SearchBox from "@/components/search/SearchBox";

function Results() {
  const params = useSearchParams();
  const q = params.get("q") ?? "";
  const results = searchProducts(q);

  return (
    <div className="container-boutique py-12 md:py-16">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="font-serif text-4xl font-semibold md:text-5xl">
          Recherche
        </h1>
        <div className="mt-6">
          <SearchBox />
        </div>
      </div>

      <p className="mt-10 text-sm text-muted">
        {q ? (
          <>
            {results.length} résultat{results.length > 1 ? "s" : ""} pour «{" "}
            <span className="text-ink">{q}</span> »
          </>
        ) : (
          "Tapez un mot-clé pour lancer la recherche."
        )}
      </p>

      {q && results.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-serif text-2xl">Aucun article trouvé</p>
          <p className="mt-2 text-muted">
            Essayez « lin », « fleuri », « paille » ou « doré ».
          </p>
          <Link href="/nouveautes" className="btn-primary mt-8">
            Voir les nouveautés
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function RecherchePage() {
  return (
    <Suspense fallback={<div className="container-boutique py-24" />}>
      <Results />
    </Suspense>
  );
}

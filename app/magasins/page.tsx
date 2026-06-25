"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { stores } from "@/lib/stores";

const StoreMap = dynamic(() => import("@/components/stores/StoreMap"), {
  ssr: false,
  loading: () => (
    <div className="grid h-[420px] w-full place-items-center rounded-lg bg-line text-muted lg:h-[560px]">
      Chargement de la carte…
    </div>
  ),
});

export default function MagasinsPage() {
  const [focus, setFocus] = useState<[number, number] | null>(null);

  return (
    <div className="container-boutique py-12 md:py-16">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
          Nous rencontrer
        </p>
        <h1 className="mt-3 font-serif text-5xl font-semibold">Nos magasins</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Retrouvez l&apos;univers Azalée dans le Sud-Ouest, à Toulouse et à Agen.
          Poussez la porte, on vous attend au soleil.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_380px]">
        <StoreMap stores={stores} focus={focus} />

        <div className="space-y-4">
          {stores.map((s) => (
            <button
              key={s.id}
              onClick={() => setFocus([s.lat, s.lng])}
              className="block w-full rounded-lg border border-line bg-surface p-5 text-left transition-colors hover:border-sage"
            >
              <h2 className="font-serif text-2xl font-semibold">{s.name}</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                  {s.address}
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-sage" />
                  {s.hours}
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-sage" />
                  {s.phone}
                </li>
              </ul>
              <a
                href={s.directions}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sage hover:text-sage-dark"
              >
                <Navigation className="h-4 w-4" /> Itinéraire
              </a>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

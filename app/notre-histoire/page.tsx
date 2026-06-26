import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Notre histoire - Azalée",
  description:
    "Azalée, née de deux sœurs du Sud-Ouest amoureuses de l'été, du lin et de la Méditerranée.",
};

const timeline = [
  {
    year: "2019",
    title: "Une idée entre deux rives",
    text: "Camille et Léa, deux sœurs nées entre Agen et Toulouse, rêvent d'une garde-robe d'été aussi douce que leurs souvenirs d'enfance.",
  },
  {
    year: "2021",
    title: "Les premières pièces",
    text: "Premiers croquis, premiers métrages de lin lavé. La marque prend forme dans un petit atelier toulousain.",
  },
  {
    year: "2022",
    title: "La première boutique",
    text: "Azalée ouvre rue Saint-Rome, à Toulouse. Le bouche-à-oreille fait le reste.",
  },
  {
    year: "Aujourd'hui",
    title: "Deux boutiques, un même soleil",
    text: "Toulouse et Agen, et bientôt vous. Toujours la même obsession : la lumière du Sud cousue dans chaque vêtement.",
  },
];

export default function NotreHistoirePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1600&q=80"
          alt="Lumière d'été dans le Sud-Ouest"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.3em]">
            Notre histoire
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-semibold leading-tight md:text-7xl">
            Deux sœurs, un été qui ne finit jamais
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="container-boutique max-w-3xl py-16 text-center md:py-24">
        <Reveal>
          <p className="font-serif text-2xl italic leading-relaxed text-ink md:text-3xl">
            « Nous voulions des vêtements qui sentent le lin chaud, les marchés du
            matin et les baignades qui s&apos;éternisent. »
          </p>
          <p className="mt-6 text-sm uppercase tracking-widest text-muted">
            Camille &amp; Léa, fondatrices
          </p>
        </Reveal>
      </section>

      {/* BLOC 1 */}
      <section className="container-boutique grid items-center gap-10 pb-16 md:grid-cols-2 md:pb-24">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?auto=format&fit=crop&w=1100&q=80"
              alt="Atelier de couture lin"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl font-semibold leading-tight">
            Le Sud-Ouest dans la peau
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            Entre les pruniers d&apos;Agen et les briques roses de Toulouse,
            Camille et Léa ont grandi les pieds dans l&apos;herbe et la tête au
            soleil. De ces étés sans fin est née une certitude : la beauté tient
            dans la simplicité d&apos;une matière noble portée avec liberté.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Chaque pièce Azalée est pensée comme un souvenir d&apos;été - légère,
            sincère, faite pour durer plus qu&apos;une saison.
          </p>
        </Reveal>
      </section>

      {/* TIMELINE */}
      <section className="bg-rose-powder/20">
        <div className="container-boutique py-16 md:py-24">
          <Reveal>
            <h2 className="mb-12 text-center font-serif text-4xl font-semibold md:text-5xl">
              Notre chemin
            </h2>
          </Reveal>
          <div className="mx-auto max-w-2xl">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.05}>
                <div className="relative flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="grid h-3 w-3 place-items-center rounded-full bg-sage" />
                    {i < timeline.length - 1 && (
                      <span className="mt-1 w-px flex-1 bg-sage/30" />
                    )}
                  </div>
                  <div className="-mt-1 pb-2">
                    <span className="price font-serif text-2xl font-semibold text-sage">
                      {t.year}
                    </span>
                    <h3 className="mt-1 font-serif text-xl font-semibold">
                      {t.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-boutique py-16 text-center md:py-24">
        <Reveal>
          <h2 className="font-serif text-4xl font-semibold md:text-5xl">
            Faites entrer l&apos;été chez vous
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/nouveautes" className="btn-primary">
              Découvrir la collection
            </Link>
            <Link href="/magasins" className="btn-secondary">
              Visiter nos boutiques
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

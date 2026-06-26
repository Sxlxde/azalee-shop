import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import Reveal from "@/components/ui/Reveal";
import CategoryCarousel from "@/components/home/CategoryCarousel";
import ProductCarousel from "@/components/home/ProductCarousel";
import MarqueeBar from "@/components/layout/MarqueeBar";

const heroImg =
  "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1600&q=80";
const lookImg =
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1400&q=80";

export default function Home() {
  const coups = products.filter((p) => p.tags.includes("coup de cœur"));

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-powder/30 via-cream to-cream" />
        <div className="container-boutique relative grid items-center gap-10 py-12 md:grid-cols-2 md:py-20">
          <Reveal className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
              Collection été
            </p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              L&apos;été se porte
              <br />
              en <span className="italic text-sage">Azalée</span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted md:mx-0">
              Robes de lin, imprimés fleuris et accessoires de paille. Une
              sélection romantique et solaire, pensée pour briller au soleil.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Link href="/nouveautes" className="btn-primary">
                Découvrir les nouveautés <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/robes" className="btn-secondary">
                Voir les robes
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-card">
              <Image
                src={heroImg}
                alt="Femme en robe d'été légère"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* BANDEAU MARQUEE — entre hero et catégories */}
      <MarqueeBar />

      {/* CATÉGORIES — carrousel défilable */}
      <section className="container-boutique py-16 md:py-24">
        <Reveal>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
                Explorer
              </p>
              <h2 className="mt-2 font-serif text-4xl font-semibold md:text-5xl">
                Toutes nos catégories
              </h2>
            </div>
          </div>
          <CategoryCarousel />
        </Reveal>
      </section>

      {/* LOOKBOOK ÉDITORIAL */}
      <section className="relative overflow-hidden">
        <div className="container-boutique grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-card">
              <Image
                src={lookImg}
                alt="Lookbook été Azalée"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
              Le lookbook
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Des matières qui respirent,
              <br />
              <span className="italic text-rose-deep">des coupes qui dansent</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              Chaque pièce est choisie pour sa douceur sur la peau et son tombé
              naturel. Le lin lavé, la gaze de coton, le raphia tressé main : la
              promesse d&apos;un été léger, du matin jusqu&apos;au coucher du
              soleil.
            </p>
            <Link
              href="/robes"
              className="mt-8 inline-flex items-center gap-2 text-sage hover:text-sage-dark"
            >
              Explorer la collection <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* COUPS DE CŒUR — carrousel */}
      <section className="container-boutique py-16 md:py-24">
        <Reveal>
          <div className="group mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
              La sélection
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
              Nos coups de cœur
            </h2>
          </div>
          <ProductCarousel products={coups} />
        </Reveal>
      </section>

      {/* NOTRE HISTOIRE — teaser */}
      <section className="container-boutique py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1503104834685-7205e8607eb9?auto=format&fit=crop&w=1200&q=80"
                alt="Deux sœurs fondatrices d'Azalée dans le Sud-Ouest"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
              Notre histoire
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight md:text-5xl">
              Deux sœurs, un été
              <br />
              <span className="italic text-rose-deep">qui ne finit jamais</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              Camille &amp; Léa ont grandi entre Agen et Toulouse, bercées par le
              lin, les marchés du Sud et la lumière de la Méditerranée. Azalée est
              né de cette envie : capturer la douceur d&apos;un été éternel.
            </p>
            <Link
              href="/notre-histoire"
              className="mt-8 inline-flex items-center gap-2 text-sage hover:text-sage-dark"
            >
              Découvrir notre histoire <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-rose-powder/30">
        <div className="container-boutique py-16 text-center md:py-20">
          <Reveal>
            <h2 className="font-serif text-4xl font-semibold md:text-5xl">
              Rejoignez le cercle Azalée
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              Inscrivez-vous pour recevoir les nouveautés et les coups de cœur de
              la saison, avant tout le monde.
            </p>
            <form
              className="mx-auto mt-8 flex max-w-md gap-2"
              action="/"
              method="get"
            >
              <label htmlFor="hero-news" className="sr-only">
                E-mail
              </label>
              <input
                id="hero-news"
                type="email"
                placeholder="votre@email.fr"
                className="min-w-0 flex-1 rounded-lg border border-line bg-surface px-4 py-3 text-sm focus:border-sage focus:outline-none"
              />
              <button type="submit" className="btn-primary">
                Je m&apos;inscris
              </button>
            </form>
            <p className="mt-3 text-xs text-muted">Démo - aucun e-mail envoyé.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

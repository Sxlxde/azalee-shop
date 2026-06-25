import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";

const heroImg =
  "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1600&q=80";
const lookImg =
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1400&q=80";

export default function Home() {
  const coups = products.filter((p) => p.tags.includes("coup de cœur")).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-powder/30 via-cream to-cream" />
        <div className="container-boutique relative grid items-center gap-10 py-12 md:grid-cols-2 md:py-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
              Collection été
            </p>
            <h1 className="mt-4 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              L&apos;été se porte
              <br />
              en <span className="italic text-sage">Azalée</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              Robes de lin, imprimés fleuris et accessoires de paille. Une
              sélection romantique et solaire, pensée pour briller au soleil.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/robes" className="btn-primary">
                Découvrir les robes <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/accessoires" className="btn-secondary">
                Les accessoires
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

      {/* BANDEAU NOUVEAUTÉS */}
      <section className="border-y border-line bg-surface">
        <div className="container-boutique flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-center text-sm text-muted">
          <span>✿ Nouveautés été en ligne</span>
          <span className="hidden sm:inline">·</span>
          <span>Livraison offerte dès 80€ (démo)</span>
          <span className="hidden sm:inline">·</span>
          <span>Retours faciles sous 30 jours</span>
        </div>
      </section>

      {/* CATÉGORIES */}
      <section className="container-boutique py-16 md:py-24">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <CategoryCard
              href="/robes"
              title="Robes d'été"
              subtitle="Lin, fleuri, slip dress, midi & mini"
              img="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80"
            />
            <CategoryCard
              href="/accessoires"
              title="Accessoires"
              subtitle="Paille, raphia, lunettes & bijoux dorés"
              img="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80"
            />
          </div>
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

      {/* COUPS DE CŒUR */}
      <section className="container-boutique py-16 md:py-24">
        <Reveal>
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
              La sélection
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
              Nos coups de cœur
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {coups.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
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
            <p className="mt-3 text-xs text-muted">Démo — aucun e-mail envoyé.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function CategoryCard({
  href,
  title,
  subtitle,
  img,
}: {
  href: string;
  title: string;
  subtitle: string;
  img: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[4/3] overflow-hidden rounded-lg shadow-soft"
    >
      <Image
        src={img}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white md:p-8">
        <h3 className="font-serif text-3xl font-semibold md:text-4xl">{title}</h3>
        <p className="mt-1 text-sm text-white/85">{subtitle}</p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium">
          Découvrir <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

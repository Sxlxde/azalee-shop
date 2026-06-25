import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-boutique flex flex-col items-center py-32 text-center">
      <p className="font-serif text-7xl font-semibold text-sage">404</p>
      <h1 className="mt-4 font-serif text-3xl font-semibold">
        Cette page s&apos;est envolée au soleil
      </h1>
      <p className="mt-3 text-muted">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}

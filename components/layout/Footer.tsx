import Link from "next/link";
import Newsletter from "@/components/layout/Newsletter";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="container-boutique py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <span className="font-serif text-3xl font-semibold">Azalée</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              L&apos;été se porte en Azalée. Une sélection romantique de robes
              et d&apos;accessoires pour des journées ensoleillées.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
              Boutique
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/robes" className="hover:text-sage">
                  Robes d&apos;été
                </Link>
              </li>
              <li>
                <Link href="/accessoires" className="hover:text-sage">
                  Accessoires
                </Link>
              </li>
              <li>
                <Link href="/favoris" className="hover:text-sage">
                  Mes favoris
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
              Maison
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/confidentialite" className="hover:text-sage">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-sage">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <Newsletter />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} Azalée — Boutique démo (portfolio).</p>
          <p>Conçu avec soin · Aucun paiement réel.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Instagram } from "lucide-react";
import Newsletter from "@/components/layout/Newsletter";

function TikTok({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.6 5.82a4.28 4.28 0 0 1-1.07-2.82h-3.1v12.18a2.34 2.34 0 1 1-2.34-2.34c.16 0 .32.02.47.05V9.7a5.4 5.4 0 0 0-.47-.02 5.42 5.42 0 1 0 5.42 5.42V9.01a7.35 7.35 0 0 0 4.27 1.37V7.28a4.28 4.28 0 0 1-3.1-1.46z" />
    </svg>
  );
}

const cols = [
  {
    title: "Boutique",
    links: [
      { href: "/nouveautes", label: "Nouveautés" },
      { href: "/robes", label: "Robes d'été" },
      { href: "/jupes", label: "Jupes" },
      { href: "/shorts", label: "Shorts" },
      { href: "/chemisiers", label: "Chemisiers" },
      { href: "/accessoires", label: "Accessoires" },
    ],
  },
  {
    title: "Aide",
    links: [
      { href: "/contact", label: "Contact & SAV" },
      { href: "/contact", label: "FAQ" },
      { href: "/contact", label: "Livraison" },
      { href: "/contact", label: "Retours sous 30j" },
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/confidentialite", label: "Confidentialité" },
    ],
  },
  {
    title: "La marque",
    links: [
      { href: "/notre-histoire", label: "Notre histoire" },
      { href: "/magasins", label: "Nos magasins" },
      { href: "/favoris", label: "Mes favoris" },
      { href: "/compte", label: "Mon compte" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="container-boutique py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="font-serif text-3xl font-semibold">Azalée</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              L&apos;été se porte en Azalée. Une sélection romantique de robes,
              jupes, shorts, chemisiers et accessoires, née dans le Sud-Ouest.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram Azalée"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-sage hover:text-sage"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="TikTok Azalée"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-sage hover:text-sage"
              >
                <TikTok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
                {col.title}
              </h3>
              <ul className="space-y-3 text-sm">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-sage">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <div className="max-w-md">
            <Newsletter />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} Azalée — Boutique démo (portfolio).</p>
          <div className="flex items-center gap-3">
            <span>Paiements acceptés :</span>
            <div className="flex gap-1.5">
              {["VISA", "MC", "CB", "3×"].map((p) => (
                <span
                  key={p}
                  className="rounded border border-line bg-cream px-2 py-1 text-[0.65rem] font-semibold tracking-wide"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

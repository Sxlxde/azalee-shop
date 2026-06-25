import type { Metadata } from "next";
import LegalLayout from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions légales - Azalée",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-2xl font-semibold text-ink">{title}</h2>
      <div className="mt-3 space-y-3 text-muted">{children}</div>
    </section>
  );
}

export default function MentionsLegalesPage() {
  return (
    <LegalLayout title="Mentions légales" updated="juin 2026">
      <p className="text-muted">
        Azalée est un projet de démonstration réalisé dans un cadre portfolio.
        Les informations ci-dessous sont fictives et fournies à titre
        d&apos;illustration.
      </p>

      <Section title="Éditeur du site">
        <p>
          Site vitrine de démonstration « Azalée ». Réalisation : projet
          portfolio. Aucune activité commerciale réelle n&apos;est exercée via ce
          site.
        </p>
      </Section>

      <Section title="Hébergement">
        <p>
          Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA
          91789, États-Unis.
        </p>
      </Section>

      <Section title="Propriété intellectuelle">
        <p>
          Les visuels utilisés sont des images de démonstration (placeholders).
          Les marques, noms de produits et textes sont fictifs ou utilisés à des
          fins d&apos;exemple.
        </p>
      </Section>

      <Section title="Paiement & commandes">
        <p>
          Aucun paiement n&apos;est traité sur ce site. Le tunnel d&apos;achat et
          la confirmation de commande sont simulés à des fins de démonstration.
        </p>
      </Section>
    </LegalLayout>
  );
}

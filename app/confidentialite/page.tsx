import type { Metadata } from "next";
import LegalLayout from "@/components/ui/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Azalée",
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

export default function ConfidentialitePage() {
  return (
    <LegalLayout title="Politique de confidentialité" updated="juin 2026">
      <p className="text-muted">
        Azalée est un site de démonstration (portfolio). Aucune donnée n&apos;est
        réellement collectée, traitée ni transmise à des tiers. Le texte
        ci-dessous illustre la structure d&apos;une politique RGPD type.
      </p>

      <Section title="1. Responsable du traitement">
        <p>
          Le présent site est édité à titre d&apos;exemple. Pour un site
          marchand réel, le responsable du traitement serait l&apos;éditeur de
          la boutique, joignable à une adresse de contact dédiée.
        </p>
      </Section>

      <Section title="2. Données collectées">
        <p>
          Dans cette démo, seules des informations techniques minimales sont
          stockées <strong>localement dans votre navigateur</strong> (panier,
          favoris, choix de cookies) via le localStorage. Elles ne quittent
          jamais votre appareil.
        </p>
      </Section>

      <Section title="3. Cookies">
        <p>
          Une bannière de consentement vous permet d&apos;accepter, refuser ou
          personnaliser les cookies. Votre choix est conservé dans votre
          navigateur. Aucun cookie de suivi tiers n&apos;est réellement déposé.
        </p>
      </Section>

      <Section title="4. Vos droits">
        <p>
          Conformément au RGPD, vous disposeriez d&apos;un droit d&apos;accès, de
          rectification, d&apos;effacement et d&apos;opposition. Pour exercer ces
          droits sur un site réel, il suffirait de contacter le responsable du
          traitement.
        </p>
      </Section>

      <Section title="5. Suppression des données locales">
        <p>
          Vous pouvez à tout moment vider le panier, retirer vos favoris ou
          effacer les données de site dans les réglages de votre navigateur.
        </p>
      </Section>
    </LegalLayout>
  );
}

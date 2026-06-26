const ITEMS = [
  "Nouveautés été en ligne",
  "Livraison offerte dès 80€ (démo)",
  "Retours faciles sous 30 jours",
];

export default function MarqueeBar() {
  // Une "moitié" = les items répétés assez de fois pour dépasser la largeur de
  // l'écran (sinon un vide apparaît sur grand écran). On rend 2 moitiés
  // identiques dans une piste w-max et on translate de -50% : boucle seamless.
  const half = Array.from({ length: 4 }).flatMap((_, rep) =>
    ITEMS.map((t) => (
      <span key={`${rep}-${t}`} className="flex items-center">
        <span className="px-4 text-rose-deep">❀</span>
        <span className="whitespace-nowrap text-[0.65rem] font-medium uppercase tracking-[0.25em] text-ink">
          {t}
        </span>
      </span>
    ))
  );

  const sequence = (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {half}
    </div>
  );

  return (
    <div className="group border-y border-line bg-cream">
      <div className="marquee-viewport flex overflow-hidden py-2">
        <div className="marquee-track flex w-max">
          {sequence}
          {sequence}
        </div>
      </div>
      {/* Texte accessible (non animé) pour lecteurs d'écran */}
      <span className="sr-only">{ITEMS.join(", ")}</span>
    </div>
  );
}

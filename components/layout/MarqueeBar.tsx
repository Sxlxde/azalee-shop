const ITEMS = [
  "Nouveautés été en ligne",
  "Livraison offerte dès 80€ (démo)",
  "Retours faciles sous 30 jours",
];

export default function MarqueeBar() {
  // Une "séquence" = items séparés par la fleur ❀ (rose poudré). Dupliquée 2x
  // pour une boucle infinie fluide (translateX -50%). Pause au hover.
  const sequence = (
    <div className="flex shrink-0 items-center" aria-hidden="true">
      {ITEMS.map((t) => (
        <span key={t} className="flex items-center">
          <span className="px-3 text-rose-deep">❀</span>
          <span className="whitespace-nowrap text-[0.65rem] font-medium uppercase tracking-[0.25em] text-ink">
            {t}
          </span>
        </span>
      ))}
      <span className="px-3 text-rose-deep">❀</span>
    </div>
  );

  return (
    <div className="group border-y border-line bg-cream">
      <div className="marquee-viewport flex overflow-hidden py-2">
        <div className="marquee-track flex">
          {sequence}
          {sequence}
        </div>
      </div>
      {/* Texte accessible (non animé) pour lecteurs d'écran */}
      <span className="sr-only">{ITEMS.join(", ")}</span>
    </div>
  );
}

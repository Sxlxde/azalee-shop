export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="container-boutique max-w-3xl py-12 md:py-16">
      <h1 className="font-serif text-4xl font-semibold md:text-5xl">{title}</h1>
      <p className="mt-2 text-sm text-muted">Dernière mise à jour : {updated}</p>
      <div className="prose-azalee mt-10 space-y-8 text-sm leading-relaxed text-ink">
        {children}
      </div>
    </div>
  );
}

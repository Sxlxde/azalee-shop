export default function CategoryHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="container-boutique py-12 text-center md:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-serif text-5xl font-semibold md:text-6xl">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-muted">{subtitle}</p>
    </div>
  );
}

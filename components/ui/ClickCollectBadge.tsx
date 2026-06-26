import { Store } from "lucide-react";

export default function ClickCollectBadge({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 rounded-lg border border-sage/30 bg-sage/10 px-3 py-2 text-sm text-ink ${className}`}
    >
      <Store className="h-4 w-4 shrink-0 text-sage" strokeWidth={1.5} />
      <span>
        <strong className="font-medium">Click &amp; Collect</strong> - retrait
        gratuit à Toulouse &amp; Agen
      </span>
    </div>
  );
}

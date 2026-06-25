"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useWishlist } from "@/store/wishlist";
import { useHasMounted } from "@/lib/useHasMounted";

export default function WishlistButton({
  productId,
  className = "",
}: {
  productId: string;
  className?: string;
}) {
  const toggle = useWishlist((s) => s.toggle);
  const ids = useWishlist((s) => s.ids);
  const mounted = useHasMounted();
  const active = mounted && ids.includes(productId);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(productId);
      }}
      aria-label={active ? "Retirer des favoris" : "Ajouter aux favoris"}
      aria-pressed={active}
      className={`grid h-9 w-9 place-items-center rounded-full bg-surface/90 shadow-soft backdrop-blur transition-colors hover:bg-surface ${className}`}
    >
      <motion.span whileTap={{ scale: 0.8 }}>
        <Heart
          className={`h-4 w-4 transition-colors ${
            active ? "fill-rose-deep text-rose-deep" : "text-ink"
          }`}
          strokeWidth={1.5}
        />
      </motion.span>
    </button>
  );
}

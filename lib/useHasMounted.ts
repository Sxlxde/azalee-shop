"use client";

import { useEffect, useState } from "react";

/** Évite le mismatch d'hydratation pour les stores persistés (localStorage). */
export function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

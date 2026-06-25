"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const MESSAGES = [
  "Soldes : jusqu'à -50% sur une sélection*",
  "Paiement en 3 ou 4× sans frais",
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % MESSAGES.length),
      4000
    );
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <div className="relative z-50 bg-rose-powder/70 text-ink">
      <div className="container-boutique flex h-9 items-center justify-center overflow-hidden">
        {reduce ? (
          <p className="text-center text-[0.7rem] font-medium uppercase tracking-[0.2em]">
            {MESSAGES.join("  ·  ")}
          </p>
        ) : (
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-center text-[0.7rem] font-medium uppercase tracking-[0.2em]"
            >
              {MESSAGES[index]}
            </motion.p>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

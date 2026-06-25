"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const MESSAGES = [
  "Soldes : jusqu'à -50%",
  "Paiement en 3 ou 4× sans frais",
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  // Auto-rotate sur TOUS les écrans (desktop inclus). On change l'index en continu ;
  // seule la transition animée est désactivée si prefers-reduced-motion.
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % MESSAGES.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative z-50 bg-rose-powder/70 text-ink">
      <div className="container-boutique flex h-9 items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={index}
            initial={reduce ? false : { y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { y: -12, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.4, ease: "easeOut" }}
            className="text-center text-[0.7rem] font-medium uppercase tracking-[0.2em]"
          >
            {MESSAGES[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}

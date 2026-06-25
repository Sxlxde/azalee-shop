"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Choice = "all" | "essential" | null;

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [customOpen, setCustomOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("azalee-cookies");
    if (!stored) setVisible(true);
  }, []);

  const decide = (choice: Exclude<Choice, null>) => {
    localStorage.setItem("azalee-cookies", choice);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-2xl rounded-lg border border-line bg-surface p-5 shadow-card sm:p-6"
          role="dialog"
          aria-label="Consentement aux cookies"
        >
          <p className="font-serif text-xl font-semibold">Un peu de douceur 🍃</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Nous utilisons des cookies pour améliorer votre visite. Vous pouvez
            tout accepter, refuser, ou personnaliser vos choix.
          </p>

          <AnimatePresence>
            {customOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  <li className="flex items-center justify-between rounded-lg bg-cream px-3 py-2">
                    <span>Essentiels (toujours actifs)</span>
                    <span className="text-sage">Activé</span>
                  </li>
                  <li className="flex items-center justify-between rounded-lg bg-cream px-3 py-2">
                    <span>Mesure d&apos;audience</span>
                    <span>Optionnel</span>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-5 flex flex-wrap gap-3">
            <button onClick={() => decide("all")} className="btn-primary">
              Accepter
            </button>
            <button
              onClick={() => decide("essential")}
              className="btn-secondary"
            >
              Refuser
            </button>
            <button
              onClick={() => setCustomOpen((o) => !o)}
              className="btn-ghost"
            >
              Personnaliser
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

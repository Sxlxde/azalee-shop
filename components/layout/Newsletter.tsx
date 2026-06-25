"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true); // faux submit, succès optimiste
    setEmail("");
  };

  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted">
        Lettre d&apos;été
      </h3>
      {sent ? (
        <p className="flex items-center gap-2 text-sm text-sage">
          <Check className="h-4 w-4" /> Merci ! À très vite dans votre boîte.
        </p>
      ) : (
        <form onSubmit={submit} className="space-y-3">
          <p className="text-sm text-muted">
            Nouveautés & coups de cœur, sans spam.
          </p>
          <div className="flex gap-2">
            <label htmlFor="newsletter-email" className="sr-only">
              Votre e-mail
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.fr"
              className="min-w-0 flex-1 rounded-lg border border-line bg-cream px-3 py-2 text-sm focus:border-sage focus:outline-none"
            />
            <button type="submit" className="btn-primary px-4 py-2">
              OK
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

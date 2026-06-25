"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, LogOut, Package, User } from "lucide-react";
import { products } from "@/data/products";
import { useWishlist } from "@/store/wishlist";
import { useHasMounted } from "@/lib/useHasMounted";
import ProductCard from "@/components/product/ProductCard";

type Tab = "login" | "signup";

export default function ComptePage() {
  const [tab, setTab] = useState<Tab>("login");
  const [connected, setConnected] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");
    if (!email.includes("@") || password.length < 6) {
      setError("E-mail valide et mot de passe d'au moins 6 caractères requis.");
      return;
    }
    setError("");
    setFirstName(String(form.get("firstName") ?? "") || "vous");
    setConnected(true); // fake — aucune vraie auth
  };

  if (connected) {
    return <AccountSpace firstName={firstName} onLogout={() => setConnected(false)} />;
  }

  return (
    <div className="container-boutique flex justify-center py-12 md:py-20">
      <div className="w-full max-w-md">
        <h1 className="text-center font-serif text-4xl font-semibold">
          Mon compte
        </h1>

        {/* Tabs */}
        <div className="mt-8 grid grid-cols-2 rounded-lg border border-line bg-surface p-1">
          {(["login", "signup"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => {
                setTab(t);
                setError("");
              }}
              className={`rounded-md py-2.5 text-sm font-medium transition-colors ${
                tab === t ? "bg-sage text-white" : "text-muted hover:text-ink"
              }`}
            >
              {t === "login" ? "Se connecter" : "Créer un compte"}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.form
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit}
            className="mt-8 space-y-4"
          >
            {tab === "signup" && (
              <div className="grid grid-cols-2 gap-3">
                <Field label="Prénom" name="firstName" autoComplete="given-name" />
                <Field label="Nom" name="lastName" autoComplete="family-name" />
              </div>
            )}
            <Field
              label="E-mail"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <Field
              label="Mot de passe"
              name="password"
              type="password"
              autoComplete={tab === "login" ? "current-password" : "new-password"}
              required
            />

            {error && (
              <p role="alert" className="text-sm text-rose-deep">
                {error}
              </p>
            )}

            <button type="submit" className="btn-primary w-full">
              {tab === "login" ? "Se connecter" : "Créer mon compte"}
            </button>

            {tab === "login" && (
              <button
                type="button"
                onClick={() => alert("Démo : aucun e-mail réel n'est envoyé.")}
                className="block w-full text-center text-sm text-muted hover:text-sage"
              >
                Mot de passe oublié ?
              </button>
            )}

            <p className="text-center text-xs leading-relaxed text-muted">
              En continuant, vous acceptez notre{" "}
              <Link href="/confidentialite" className="text-sage underline">
                politique de confidentialité
              </Link>
              . Boutique démo — aucune donnée sensible n&apos;est conservée.
            </p>
          </motion.form>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted">
        {label}
        {required && " *"}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm focus:border-sage focus:outline-none"
      />
    </label>
  );
}

function AccountSpace({
  firstName,
  onLogout,
}: {
  firstName: string;
  onLogout: () => void;
}) {
  const ids = useWishlist((s) => s.ids);
  const mounted = useHasMounted();
  const favoris = mounted ? products.filter((p) => ids.includes(p.id)) : [];

  return (
    <div className="container-boutique py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center"
      >
        <div className="grid h-16 w-16 place-items-center rounded-full bg-rose-powder text-3xl">
          🌸
        </div>
        <h1 className="mt-4 font-serif text-4xl font-semibold">
          Bienvenue chez Azalée
        </h1>
        <p className="mt-2 text-muted">Ravi de vous revoir, {firstName} !</p>
        <button
          onClick={onLogout}
          className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted hover:text-rose-deep"
        >
          <LogOut className="h-4 w-4" /> Se déconnecter
        </button>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <Card icon={<Package className="h-5 w-5" />} title="Mes commandes">
          <p className="text-sm text-muted">
            Aucune commande pour l&apos;instant. (Espace de démonstration.)
          </p>
          <Link href="/nouveautes" className="btn-ghost mt-4">
            Découvrir la collection
          </Link>
        </Card>

        <Card icon={<User className="h-5 w-5" />} title="Mes informations">
          <dl className="space-y-1 text-sm text-muted">
            <div>Prénom : {firstName}</div>
            <div>E-mail : démo@azalee.fr</div>
            <div>Adresse : à compléter</div>
          </dl>
        </Card>

        <Card icon={<Heart className="h-5 w-5" />} title="Ma wishlist">
          <p className="text-sm text-muted">
            {favoris.length} article{favoris.length > 1 ? "s" : ""} en favori.
          </p>
          <Link href="/favoris" className="btn-ghost mt-4">
            Voir mes favoris
          </Link>
        </Card>
      </div>

      {favoris.length > 0 && (
        <div className="mt-14">
          <h2 className="mb-6 font-serif text-2xl font-semibold">
            Vos coups de cœur
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
            {favoris.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-line bg-surface p-6">
      <div className="flex items-center gap-2 text-sage">
        {icon}
        <h3 className="font-serif text-xl font-semibold text-ink">{title}</h3>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

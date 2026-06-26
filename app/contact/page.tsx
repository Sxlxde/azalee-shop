"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Clock, Mail, Phone } from "lucide-react";
import Accordion from "@/components/ui/Accordion";

const faq = [
  {
    title: "Quels sont les délais de livraison ?",
    content:
      "Livraison sous 2 à 4 jours ouvrés en France métropolitaine, offerte dès 80€ d'achat. (Démo - aucune commande réelle.)",
  },
  {
    title: "Comment retourner un article ?",
    content:
      "Vous disposez de 30 jours pour nous retourner un article. Le retour est gratuit : une étiquette prépayée est jointe à votre colis.",
  },
  {
    title: "Comment choisir ma taille ?",
    content:
      "Chaque fiche produit propose un guide des tailles. En cas de doute entre deux tailles, nous conseillons de prendre la plus grande pour le lin.",
  },
  {
    title: "Quels moyens de paiement acceptez-vous ?",
    content:
      "Carte bancaire, et paiement en 3 ou 4× sans frais dès 60€. (Fonctionnalité simulée dans cette démo.)",
  },
  {
    title: "Comment suivre ma commande ?",
    content:
      "Un e-mail de suivi vous est envoyé dès l'expédition. Vous retrouvez aussi vos commandes dans votre espace compte.",
  },
  {
    title: "Proposez-vous le Click & Collect ?",
    content:
      "Oui ! Le retrait en magasin est gratuit dans nos boutiques de Toulouse et d'Agen. Sélectionnez « Click & Collect » au moment de la commande, votre colis vous attend sous 2h. (Fonctionnalité simulée dans cette démo.)",
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="container-boutique py-12 md:py-16">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
          On vous répond sous 24h
        </p>
        <h1 className="mt-3 font-serif text-5xl font-semibold">Contact &amp; SAV</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Une question sur une commande, une taille, un retour ? Notre équipe est
          là pour vous accompagner.
        </p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        {/* Formulaire */}
        <div>
          <h2 className="font-serif text-2xl font-semibold">Écrivez-nous</h2>
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 rounded-lg border border-sage/40 bg-sage/10 p-6 text-center"
            >
              <Check className="mx-auto h-8 w-8 text-sage" />
              <p className="mt-3 font-serif text-xl">Message envoyé 🌸</p>
              <p className="mt-1 text-sm text-muted">
                Merci ! Nous revenons vers vous sous 24h. (Démo - rien
                n&apos;est réellement envoyé.)
              </p>
              <button
                onClick={() => setSent(false)}
                className="btn-ghost mt-4"
              >
                Envoyer un autre message
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="mt-6 space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nom" name="name" required />
                <Field label="E-mail" name="email" type="email" required />
              </div>
              <Field label="Sujet" name="subject" required />
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-muted">
                  Message *
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm focus:border-sage focus:outline-none"
                />
              </label>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Envoyer le message
              </button>
            </form>
          )}

          <div className="mt-8 space-y-3 border-t border-line pt-6 text-sm text-muted">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-sage" /> contact@azalee.fr
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-sage" /> 05 61 00 00 12
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-sage" /> Lun-Sam, 9h-18h · réponse
              sous 24h
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="font-serif text-2xl font-semibold">Questions fréquentes</h2>
          <div className="mt-6">
            <Accordion items={faq} defaultOpen={0} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        className="w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm focus:border-sage focus:outline-none"
      />
    </label>
  );
}

# Azalée — Boutique e-commerce (DEMO portfolio)

Storefront féminin de robes & accessoires d'été. **Démo vitrine** : pas de vrai
backend, pas de paiement. Données statiques, panier & favoris en local
(localStorage).

> _« L'été se porte en Azalée. »_

## Stack

- **Next.js 14** (App Router) + **TypeScript** strict
- **Tailwind CSS** (tokens couleur verrouillés)
- **Zustand** — panier + wishlist persistés (localStorage)
- **Framer Motion** — micro-interactions
- **lucide-react** — icônes
- **next/font/google** — Cormorant Garamond (serif) + Inter (sans)

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrir **http://localhost:3000**.

Build de prod : `npm run build` puis `npm run start`.

## Pages

| Route | Contenu |
|-------|---------|
| `/` | Home : hero, catégories, lookbook, coups de cœur, newsletter |
| `/robes` | Catalogue robes + filtres + tri |
| `/accessoires` | Catalogue accessoires + filtres + tri |
| `/produit/[slug]` | Fiche produit : galerie, tailles, couleurs, accordéon, similaires |
| `/panier` | Panier complet + faux checkout |
| `/favoris` | Wishlist |
| `/confidentialite`, `/mentions-legales` | Pages légales (RGPD light) |

## Changer les photos

Toutes les images sont dans **`data/products.ts`** (URLs Unsplash distantes).
Remplace simplement chaque URL par ta vraie photo (2 images par produit, garde
le **ratio portrait 3:4**). Les hero/lookbook/catégories sont dans
`app/page.tsx`.

Si tu utilises un nouveau domaine d'images, ajoute-le dans
`next.config.mjs` → `images.remotePatterns`.

## Design tokens (couleurs verrouillées)

| Rôle | Hex |
|------|-----|
| Fond crème | `#FBF8F5` |
| Sauge (CTA) | `#8A9A7B` |
| Sauge hover | `#6E7E5F` |
| Rose poudré | `#E8C5C5` |
| Rose profond | `#C98B8B` |
| Texte | `#3A3632` |
| Texte muted | `#8C857C` |
| Bordure | `#ECE5DD` |

## Pousser mes changements

```bash
git add .
git commit -m "Mon message"
git push
```

---

_Démo portfolio. Pour une vraie boutique : Stripe + CMS (Sanity/Shopify) +
auth + base de données._

import type { Category, Product } from "@/lib/types";

// Images = placeholders Unsplash (URLs distantes). Ratio portrait 3:4.
// Remplace simplement les URLs ci-dessous par tes vraies photos (2 images/produit).
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

const ROBE_SIZES = ["XS", "S", "M", "L", "XL"];
const BAS_SIZES = ["34", "36", "38", "40", "42"];
const SANDAL_SIZES = ["36", "37", "38", "39", "40", "41"];
const ONE_SIZE = ["Taille unique"];

export const products: Product[] = [
  // ───────────────────────── ROBES (10) ─────────────────────────
  {
    id: "r1",
    slug: "robe-lin-cassis",
    name: "Robe Lin Cassis",
    category: "robes",
    price: 89,
    oldPrice: 119,
    colors: [
      { name: "Sauge", hex: "#8A9A7B" },
      { name: "Crème", hex: "#FBF8F5" },
    ],
    sizes: ROBE_SIZES,
    images: [u("1496747611176-843222e1e57c"), u("1572804013309-59a88b7e92f1")],
    material: "100% lin lavé",
    description:
      "Une robe midi en lin lavé, fluide et respirante, taillée pour les longues journées d'été. Sa coupe ceinturée souligne la taille avec délicatesse.",
    isNew: true,
    tags: ["lin", "midi", "coup de cœur"],
  },
  {
    id: "r2",
    slug: "robe-fleurie-azur",
    name: "Robe Fleurie Azur",
    category: "robes",
    price: 79,
    colors: [
      { name: "Bleu azur", hex: "#90B9CB" },
      { name: "Rose poudré", hex: "#E8C5C5" },
    ],
    sizes: ROBE_SIZES,
    images: [u("1502716119720-b23a93e5fe1b"), u("1487412720507-e7ab37603c6f")],
    material: "Viscose fleurie",
    description:
      "Imprimé floral romantique sur un voile de viscose léger. Une robe qui danse au moindre souffle de vent, idéale pour les soirées en terrasse.",
    isNew: true,
    tags: ["fleuri", "midi"],
  },
  {
    id: "r3",
    slug: "slip-dress-soie-perle",
    name: "Slip Dress Soie Perle",
    category: "robes",
    price: 109,
    colors: [
      { name: "Perle", hex: "#F2ECE4" },
      { name: "Terracotta", hex: "#C98B8B" },
    ],
    sizes: ROBE_SIZES,
    images: [u("1485968579580-b6d095142e6e"), u("1496217590455-aa63a8350eea")],
    material: "Satin de viscose",
    description:
      "La slip dress par excellence : bretelles fines, tombé satiné et dos nu subtil. Minimaliste le jour, sophistiquée le soir.",
    isNew: false,
    tags: ["slip dress", "dos-nu", "coup de cœur"],
  },
  {
    id: "r4",
    slug: "mini-robe-broderie-anglaise",
    name: "Mini Robe Broderie Anglaise",
    category: "robes",
    price: 69,
    oldPrice: 95,
    colors: [{ name: "Blanc cassé", hex: "#FBF8F5" }],
    sizes: ROBE_SIZES,
    images: [u("1503342217505-b0a15ec3261c"), u("1515886657613-9f3515b0c78f")],
    material: "Coton broderie anglaise",
    description:
      "Mini robe en coton ajouré, fraîche et lumineuse. La broderie anglaise apporte cette touche bohème-chic intemporelle.",
    isNew: false,
    tags: ["mini", "coton"],
  },
  {
    id: "r5",
    slug: "robe-dos-nu-amalfi",
    name: "Robe Dos-Nu Amalfi",
    category: "robes",
    price: 99,
    colors: [
      { name: "Jaune soleil", hex: "#E9C46A" },
      { name: "Sauge", hex: "#8A9A7B" },
    ],
    sizes: ROBE_SIZES,
    images: [u("1572804013427-4d7ca7268217"), u("1490481651871-ab68de25d43d")],
    material: "Crêpe de viscose",
    description:
      "Dos nu noué et jupe portefeuille pour une silhouette solaire. Inspirée des escapades sur la côte amalfitaine.",
    isNew: true,
    tags: ["dos-nu", "midi"],
  },
  {
    id: "r6",
    slug: "robe-lin-portofino",
    name: "Robe Lin Portofino",
    category: "robes",
    price: 95,
    colors: [
      { name: "Rayé crème", hex: "#ECE5DD" },
      { name: "Sauge", hex: "#8A9A7B" },
    ],
    sizes: ROBE_SIZES,
    images: [u("1583496661160-fb5886a0aaaa"), u("1496747611176-843222e1e57c")],
    material: "Lin mélangé",
    description:
      "Robe chemise en lin à fines rayures, boutonnée et ceinturée. L'élégance décontractée d'un déjeuner au port.",
    isNew: false,
    tags: ["lin", "midi"],
  },
  {
    id: "r7",
    slug: "robe-fleurie-jardin",
    name: "Robe Fleurie Jardin Secret",
    category: "robes",
    price: 85,
    colors: [{ name: "Multi fleurs", hex: "#C98B8B" }],
    sizes: ROBE_SIZES,
    images: [u("1487412720507-e7ab37603c6f"), u("1469334031218-e382a71b716b")],
    material: "Viscose EcoVero",
    description:
      "Un jardin fleuri imprimé sur une robe longue à manches ballon. Romantique, vaporeuse, faite pour rêver.",
    isNew: false,
    tags: ["fleuri", "longue"],
  },
  {
    id: "r8",
    slug: "robe-bustier-riviera",
    name: "Robe Bustier Riviera",
    category: "robes",
    price: 105,
    colors: [
      { name: "Corail", hex: "#E07A5F" },
      { name: "Crème", hex: "#FBF8F5" },
    ],
    sizes: ROBE_SIZES,
    images: [u("1572804013309-59a88b7e92f1"), u("1515372039744-b8f02a3ae446")],
    material: "Popeline de coton",
    description:
      "Bustier structuré et jupe corolle pour une allure pin-up moderne. La pièce forte de vos soirées d'été.",
    isNew: false,
    tags: ["bustier", "midi", "coup de cœur"],
  },
  {
    id: "r9",
    slug: "robe-mini-crochet",
    name: "Mini Robe Crochet",
    category: "robes",
    price: 75,
    colors: [{ name: "Écru", hex: "#E8DFD3" }],
    sizes: ROBE_SIZES,
    images: [u("1515886657613-9f3515b0c78f"), u("1485968579580-b6d095142e6e")],
    material: "Coton crochet",
    description:
      "Maille crochetée main, esprit vacances. Se porte sur un maillot ou à même la peau pour un look bohème assumé.",
    isNew: true,
    tags: ["mini", "crochet", "bohème"],
  },
  {
    id: "r10",
    slug: "robe-longue-mykonos",
    name: "Robe Longue Mykonos",
    category: "robes",
    price: 119,
    oldPrice: 149,
    colors: [
      { name: "Blanc", hex: "#FFFFFF" },
      { name: "Bleu azur", hex: "#90B9CB" },
    ],
    sizes: ROBE_SIZES,
    images: [u("1496217590455-aa63a8350eea"), u("1503342217505-b0a15ec3261c")],
    material: "Coton gaze froissée",
    description:
      "Longue robe en gaze de coton aérienne, fendue sur le côté. La sensation d'une brise marine à chaque pas.",
    isNew: false,
    tags: ["longue", "coton", "coup de cœur"],
  },

  // ───────────────────────── JUPES (5) ─────────────────────────
  {
    id: "j1",
    slug: "jupe-plissee-soleil",
    name: "Jupe Plissée Soleil",
    category: "jupes",
    price: 69,
    colors: [
      { name: "Jaune soleil", hex: "#E9C46A" },
      { name: "Crème", hex: "#FBF8F5" },
    ],
    sizes: BAS_SIZES,
    images: [u("1551163943-3f6a855d1153"), u("1583846783214-7229a91b20ed")],
    material: "Mousseline plissée",
    description:
      "Jupe midi plissée au tombé aérien, taille élastiquée confortable. Elle ondule à chaque pas comme un rayon de soleil.",
    isNew: true,
    tags: ["plissée", "midi"],
  },
  {
    id: "j2",
    slug: "jupe-lin-portovenere",
    name: "Jupe Lin Portovenere",
    category: "jupes",
    price: 65,
    oldPrice: 85,
    colors: [
      { name: "Sauge", hex: "#8A9A7B" },
      { name: "Sable", hex: "#E0C9A6" },
    ],
    sizes: BAS_SIZES,
    images: [u("1594633312681-425c7b97ccd1"), u("1532453288672-3a27e9be9efd")],
    material: "100% lin",
    description:
      "Jupe portefeuille en lin, longueur midi et fente discrète. La pièce fraîche et chic des journées chaudes.",
    isNew: false,
    tags: ["lin", "midi", "coup de cœur"],
  },
  {
    id: "j3",
    slug: "jupe-fluide-riviera",
    name: "Jupe Fluide Riviera",
    category: "jupes",
    price: 59,
    colors: [{ name: "Fleurs roses", hex: "#E8C5C5" }],
    sizes: BAS_SIZES,
    images: [u("1583846783214-7229a91b20ed"), u("1551163943-3f6a855d1153")],
    material: "Viscose fluide",
    description:
      "Longue jupe fluide à imprimé floral, taille haute et mouvement vaporeux. Idéale du déjeuner au coucher de soleil.",
    isNew: true,
    tags: ["fluide", "fleuri", "longue"],
  },
  {
    id: "j4",
    slug: "jupe-midi-denim-clair",
    name: "Jupe Midi Denim Clair",
    category: "jupes",
    price: 72,
    colors: [{ name: "Denim clair", hex: "#A9C0D6" }],
    sizes: BAS_SIZES,
    images: [u("1582418702059-97ebafb35d09"), u("1594633312681-425c7b97ccd1")],
    material: "Denim léger",
    description:
      "Jupe midi en denim clair, boutonnée devant, esprit seventies. Se marie à tous vos chemisiers d'été.",
    isNew: false,
    tags: ["denim", "midi"],
  },
  {
    id: "j5",
    slug: "jupe-courte-broderie",
    name: "Jupe Courte Broderie",
    category: "jupes",
    price: 55,
    colors: [{ name: "Blanc cassé", hex: "#FBF8F5" }],
    sizes: BAS_SIZES,
    images: [u("1532453288672-3a27e9be9efd"), u("1582418702059-97ebafb35d09")],
    material: "Coton brodé",
    description:
      "Jupe courte en coton brodé, taille haute et volants délicats. La touche bohème qui réveille les jambes hâlées.",
    isNew: false,
    tags: ["broderie", "courte"],
  },

  // ───────────────────────── SHORTS (4) ─────────────────────────
  {
    id: "s1",
    slug: "short-lin-taille-haute",
    name: "Short Lin Taille Haute",
    category: "shorts",
    price: 49,
    colors: [
      { name: "Sable", hex: "#E0C9A6" },
      { name: "Blanc", hex: "#FFFFFF" },
    ],
    sizes: BAS_SIZES,
    images: [u("1591195853828-11db59a44f6b"), u("1565084888279-aca607ecce0c")],
    material: "Lin mélangé",
    description:
      "Short taille haute en lin, ceinture nouée et coupe ample. Le confort d'une matière qui respire par grande chaleur.",
    isNew: true,
    tags: ["lin", "taille haute", "coup de cœur"],
  },
  {
    id: "s2",
    slug: "short-fluide-paloma",
    name: "Short Fluide Paloma",
    category: "shorts",
    price: 45,
    oldPrice: 59,
    colors: [
      { name: "Rose poudré", hex: "#E8C5C5" },
      { name: "Sauge", hex: "#8A9A7B" },
    ],
    sizes: BAS_SIZES,
    images: [u("1565084888279-aca607ecce0c"), u("1591195853828-11db59a44f6b")],
    material: "Viscose fluide",
    description:
      "Short fluide à la coupe souple, taille élastiquée. Effet jupe-short élégant, parfait pour les balades en ville.",
    isNew: false,
    tags: ["fluide"],
  },
  {
    id: "s3",
    slug: "short-denim-clair",
    name: "Short Denim Clair",
    category: "shorts",
    price: 52,
    colors: [{ name: "Denim clair", hex: "#A9C0D6" }],
    sizes: BAS_SIZES,
    images: [u("1582418702059-97ebafb35d09"), u("1565084888279-aca607ecce0c")],
    material: "Denim coton",
    description:
      "Short en denim clair délavé, ourlets bruts et taille haute. L'indémodable des vacances, du matin au soir.",
    isNew: true,
    tags: ["denim", "taille haute"],
  },
  {
    id: "s4",
    slug: "short-tailleur-amande",
    name: "Short Tailleur Amande",
    category: "shorts",
    price: 58,
    colors: [
      { name: "Amande", hex: "#D9D3C4" },
      { name: "Terracotta", hex: "#C98B8B" },
    ],
    sizes: BAS_SIZES,
    images: [u("1591195853828-11db59a44f6b"), u("1582418702059-97ebafb35d09")],
    material: "Crêpe léger",
    description:
      "Short tailleur à pli marqué, allure soignée et féminine. Se porte avec un chemisier rentré pour un look chic.",
    isNew: false,
    tags: ["tailleur"],
  },

  // ─────────────────────── CHEMISIERS (5) ───────────────────────
  {
    id: "c1",
    slug: "chemisier-broderie-anglaise",
    name: "Chemisier Broderie Anglaise",
    category: "chemisiers",
    price: 62,
    colors: [{ name: "Blanc cassé", hex: "#FBF8F5" }],
    sizes: ROBE_SIZES,
    images: [u("1564257631407-4deb1f99d992"), u("1485462537746-965f33f7f6a7")],
    material: "Coton broderie anglaise",
    description:
      "Chemisier en coton ajouré, col rond et manches courtes à volant. La fraîcheur romantique de la broderie anglaise.",
    isNew: true,
    tags: ["broderie", "coton", "coup de cœur"],
  },
  {
    id: "c2",
    slug: "chemisier-lin-manches-bouffantes",
    name: "Chemisier Lin Manches Bouffantes",
    category: "chemisiers",
    price: 58,
    colors: [
      { name: "Sauge", hex: "#8A9A7B" },
      { name: "Blanc", hex: "#FFFFFF" },
    ],
    sizes: ROBE_SIZES,
    images: [u("1485462537746-965f33f7f6a7"), u("1564257631407-4deb1f99d992")],
    material: "100% lin",
    description:
      "Chemisier en lin aux manches bouffantes, poignets boutonnés. Une pièce structurée et aérienne à la fois.",
    isNew: false,
    tags: ["lin", "manches bouffantes"],
  },
  {
    id: "c3",
    slug: "chemisier-dos-noue-soleil",
    name: "Chemisier Dos Noué Soleil",
    category: "chemisiers",
    price: 54,
    oldPrice: 72,
    colors: [{ name: "Jaune soleil", hex: "#E9C46A" }],
    sizes: ROBE_SIZES,
    images: [u("1551489186-cf8726f514f8"), u("1485462537746-965f33f7f6a7")],
    material: "Coton léger",
    description:
      "Chemisier crop au dos noué, esprit estival et solaire. Se porte sur un short taille haute pour un look équilibré.",
    isNew: true,
    tags: ["dos noué", "crop"],
  },
  {
    id: "c4",
    slug: "chemisier-fleuri-capri",
    name: "Chemisier Fleuri Capri",
    category: "chemisiers",
    price: 56,
    colors: [{ name: "Fleurs bleues", hex: "#90B9CB" }],
    sizes: ROBE_SIZES,
    images: [u("1554568218-0f1715e72254"), u("1551489186-cf8726f514f8")],
    material: "Viscose imprimée",
    description:
      "Chemisier fluide à imprimé floral, col cravate à nouer. Une touche méditerranéenne pleine de douceur.",
    isNew: false,
    tags: ["fleuri", "fluide"],
  },
  {
    id: "c5",
    slug: "chemisier-raye-marin",
    name: "Chemisier Rayé Marin",
    category: "chemisiers",
    price: 52,
    colors: [
      { name: "Rayé bleu", hex: "#90B9CB" },
      { name: "Rayé sauge", hex: "#8A9A7B" },
    ],
    sizes: ROBE_SIZES,
    images: [u("1554568218-0f1715e72254"), u("1564257631407-4deb1f99d992")],
    material: "Coton popeline",
    description:
      "Chemisier oversize à fines rayures, esprit marinière revisité. L'allure décontractée chic des bords de mer.",
    isNew: false,
    tags: ["rayé", "oversize"],
  },

  // ─────────────────────── ACCESSOIRES (6) ───────────────────────
  {
    id: "a1",
    slug: "capeline-riviera",
    name: "Capeline Riviera",
    category: "accessoires",
    price: 45,
    colors: [
      { name: "Paille naturelle", hex: "#E0C9A6" },
      { name: "Noir", hex: "#3A3632" },
    ],
    sizes: ONE_SIZE,
    images: [u("1565115021788-2c5b3f6d1d54"), u("1521369909029-2afed882baee")],
    material: "Paille de papier tressée",
    description:
      "Large capeline en paille tressée, ruban de gros-grain noué. Protection solaire et allure de star de cinéma garanties.",
    isNew: true,
    tags: ["chapeau", "paille"],
  },
  {
    id: "a2",
    slug: "sac-raphia-amalfi",
    name: "Sac Raphia Amalfi",
    category: "accessoires",
    price: 59,
    oldPrice: 79,
    colors: [{ name: "Raphia naturel", hex: "#D9C2A3" }],
    sizes: ONE_SIZE,
    images: [u("1591561954557-26941169b49e"), u("1584917865442-de89df76afd3")],
    material: "Raphia naturel & cuir",
    description:
      "Sac cabas en raphia tressé à la main, anses cuir. Spacieux pour la plage comme pour le marché provençal.",
    isNew: false,
    tags: ["sac", "raphia", "coup de cœur"],
  },
  {
    id: "a3",
    slug: "lunettes-soleil-capri",
    name: "Lunettes de Soleil Capri",
    category: "accessoires",
    price: 39,
    colors: [
      { name: "Écaille", hex: "#8B5E3C" },
      { name: "Crème", hex: "#FBF8F5" },
    ],
    sizes: ONE_SIZE,
    images: [u("1572635196237-14b3f281503f"), u("1511499767150-a48a237f0083")],
    material: "Acétate, verres UV400",
    description:
      "Monture oversize en acétate, verres teintés protection UV400. La touche rétro qui sublime n'importe quel look.",
    isNew: true,
    tags: ["lunettes", "rétro"],
  },
  {
    id: "a4",
    slug: "sandales-dorees-santorin",
    name: "Sandales Dorées Santorin",
    category: "accessoires",
    price: 65,
    colors: [
      { name: "Doré", hex: "#C9A24B" },
      { name: "Argent", hex: "#C7C7C7" },
    ],
    sizes: SANDAL_SIZES,
    images: [u("1543163521-1bf539c55dd2"), u("1603487742131-4160ec999306")],
    material: "Cuir métallisé",
    description:
      "Sandales plates à lanières fines et finition métallisée. Confortables du matin au soir, scintillantes au soleil.",
    isNew: false,
    tags: ["sandales", "doré"],
  },
  {
    id: "a5",
    slug: "collier-dore-soleil",
    name: "Collier Doré Soleil",
    category: "accessoires",
    price: 29,
    colors: [{ name: "Doré", hex: "#C9A24B" }],
    sizes: ONE_SIZE,
    images: [u("1515562141207-7a88fb7ce338"), u("1611652022419-a9419f74343d")],
    material: "Plaqué or 18 carats",
    description:
      "Fin collier pendentif soleil en plaqué or. Se superpose à l'envi pour un effet layering ensoleillé.",
    isNew: false,
    tags: ["bijou", "doré", "coup de cœur"],
  },
  {
    id: "a6",
    slug: "chapeau-paille-boheme",
    name: "Chapeau Paille Bohème",
    category: "accessoires",
    price: 42,
    colors: [{ name: "Paille naturelle", hex: "#E0C9A6" }],
    sizes: ONE_SIZE,
    images: [u("1521369909029-2afed882baee"), u("1565115021788-2c5b3f6d1d54")],
    material: "Paille naturelle",
    description:
      "Chapeau à bord moyen, esprit bohème, finition franges. Le compagnon idéal des festivals et after-beach.",
    isNew: true,
    tags: ["chapeau", "paille", "bohème"],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getNew(): Product[] {
  return products.filter((p) => p.isNew);
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.material.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
}

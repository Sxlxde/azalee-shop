export type Category =
  | "robes"
  | "jupes"
  | "shorts"
  | "chemisiers"
  | "accessoires";

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: Category;
  price: number;
  oldPrice?: number;
  colors: ProductColor[];
  sizes: string[];
  images: string[];
  material: string;
  description: string;
  isNew: boolean;
  tags: string[];
}

export type SortKey = "nouveautes" | "prix-asc" | "prix-desc";

export interface CategoryMeta {
  slug: Category;
  label: string;
  subtitle: string;
  image: string;
}

export const CATEGORY_META: CategoryMeta[] = [
  {
    slug: "robes",
    label: "Robes d'été",
    subtitle: "Lin, fleuri, slip dress, midi & mini",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "jupes",
    label: "Jupes d'été",
    subtitle: "Midi, plissée, lin & fluide",
    image:
      "https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "shorts",
    label: "Shorts",
    subtitle: "Lin, taille haute & denim clair",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "chemisiers",
    label: "Chemisiers",
    subtitle: "Broderie anglaise, manches bouffantes",
    image:
      "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "accessoires",
    label: "Accessoires",
    subtitle: "Paille, raphia, lunettes & bijoux dorés",
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80",
  },
];

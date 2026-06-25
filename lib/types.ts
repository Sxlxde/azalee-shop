export type Category = "robes" | "accessoires";

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

"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/lib/types";

export interface CartLine {
  id: string; // unique = product.id + size + color
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  qty: number;
}

interface CartState {
  lines: CartLine[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (p: Product, size: string, color: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: () => number;
  subtotal: () => number;
}

const lineId = (productId: string, size: string, color: string) =>
  `${productId}__${size}__${color}`;

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      isOpen: false,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      add: (p, size, color, qty = 1) =>
        set((state) => {
          const id = lineId(p.id, size, color);
          const existing = state.lines.find((l) => l.id === id);
          if (existing) {
            return {
              isOpen: true,
              lines: state.lines.map((l) =>
                l.id === id ? { ...l, qty: l.qty + qty } : l
              ),
            };
          }
          return {
            isOpen: true,
            lines: [
              ...state.lines,
              {
                id,
                productId: p.id,
                slug: p.slug,
                name: p.name,
                price: p.price,
                image: p.images[0],
                size,
                color,
                qty,
              },
            ],
          };
        }),
      remove: (id) =>
        set((state) => ({ lines: state.lines.filter((l) => l.id !== id) })),
      setQty: (id, qty) =>
        set((state) => ({
          lines: state.lines
            .map((l) => (l.id === id ? { ...l, qty: Math.max(1, qty) } : l))
            .filter((l) => l.qty > 0),
        })),
      clear: () => set({ lines: [] }),
      count: () => get().lines.reduce((n, l) => n + l.qty, 0),
      subtotal: () => get().lines.reduce((s, l) => s + l.price * l.qty, 0),
    }),
    { name: "azalee-cart" }
  )
);

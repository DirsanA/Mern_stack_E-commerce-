import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [], // Initialize the products state as an empty array
  setProducts: (products) => set({ products }), // Action to update the products state
}));

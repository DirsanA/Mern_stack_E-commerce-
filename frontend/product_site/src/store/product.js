import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [], // Initialize the products state as an empty array
  setProducts: (products) => set({ products }), // Action to update the products state
  createProduct: async (newProduct) => {
    // Check if all fields are filled
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return {
        success: false,
        message: "Please fill all the fields!",
      };
    }

    // Make the API call to create a new product
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct), // Send the newProduct data in the body
      });

      // Check if the response was successful
      if (res.ok) {
        const data = await res.json();
        set((state) => ({
          products: [...state.products, data.data], // Add the new product to the products list
        }));

        return { success: true, message: "Product created successfully!" };
      } else {
        return {
          success: false,
          message: "Failed to create product. Please try again later.",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: "An error occurred while creating the product.",
      };
    }
  },
  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data.data });
  },
}));

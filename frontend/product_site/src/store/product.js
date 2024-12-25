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
  // the product deleted account
  deleteProduct: async (pid) => {
    console.log("Attempting to delete product with ID:", pid);

    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE",
    });

    const data = await res.json();
    console.log("Delete API response:", data);

    if (!data.success) {
      console.log("Failed to delete product:", data.message);
      return {
        success: false,
        message: data.message,
      };
    }

    // If deletion is successful, update the state by removing the deleted product
    set((state) => {
      const updatedProducts = state.products.filter(
        (product) => product._id !== pid
      );
      console.log("Updated products list:", updatedProducts);
      return { products: updatedProducts }; // Remove the deleted product from the state
    });

    console.log("Product deleted successfully!");
    return {
      success: true,
      message: "Product deleted successfully!",
    };
  },
}));

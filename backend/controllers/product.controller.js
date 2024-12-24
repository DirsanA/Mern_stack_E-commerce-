import Product from "../config/models/product.model.js";
import mongoose from "mongoose"; // Import mongoose for ObjectId validation

// getting all products
export const getProduct = async (req, res) => {
  try {
    const products = await Product.find({}); // Fetch all products
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body; // The user will send this data

  // Validate if required fields are provided
  if (!product.name || product.price == null || !product.image) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields!",
    });
  }

  // Create a new product instance using the provided data
  const newProduct = new Product(product);
  try {
    // Save the new product to the database
    await newProduct.save();
    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.error("Error in creating product:", error);
    res.status(500).json({
      success: false,
      message: "Server error, could not create product.",
    });
  }
};

// route for delete product
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  // Validate Object ID format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid Product ID",
    });
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product is deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// route for update product
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  // Validate Object ID format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid Product ID",
    });
  }

  // Check if required fields are provided
  if (!product.name || product.price == null || !product.image) {
    return res.status(400).json({
      success: false,
      message: "Please provide all required fields!",
    });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true, // Return the updated product
    });

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

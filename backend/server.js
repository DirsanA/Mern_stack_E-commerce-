import express from "express";
import Product from "./config/models/product.model.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"; // For environment variables

dotenv.config(); // Initialize dotenv to access .env variables

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable for port if available

// Middleware to parse incoming JSON data
app.use(express.json()); // It should be outside the route handler

// Connect to the database before starting the server
connectDB()
  .then(() => {
    // Start the server only after successful DB connection
    app.listen(PORT, () => {
      console.log(`The server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
    process.exit(1); // Exit the process if DB connection fails
  });

// Define the POST route to create a product
app.post("/api/products", async (req, res) => {
  const product = req.body; // The user will send this data

  // Validate if required fields are provided
  if (!product.name || !product.price || !product.image) {
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
});

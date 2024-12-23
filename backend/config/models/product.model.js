// Import mongoose library for MongoDB interaction
import mongoose from "mongoose";

// Define the schema for the product collection in MongoDB
const productSchema = new mongoose.Schema(
  // mongoose is the object where as schema is method
  {
    // Product name - must be a string and is required
    name: {
      type: String,
      required: true,
    },
    // Product price - must be a number and is required
    price: {
      type: Number,
      required: true,
    },
    // Product image - must be a string (URL) and is required
    image: {
      type: String,
      required: true,
    },
  },
  // Enable timestamps - automatically adds createdAt and updatedAt fields
  { timestamps: true }
);

// Create a Mongoose model for the Product collection using the schema
const product = mongoose.model("product", productSchema);

export default product;

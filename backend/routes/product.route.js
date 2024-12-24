import express from "express";

import {
  getProduct,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Fetching all products
router.get("/", getProduct);

// Creating a new product
router.post("/", createProduct);

// Updating a product by ID
router.put("/:id", updateProduct);

// Deleting a product by ID
router.delete("/:id", deleteProduct);

export default router;

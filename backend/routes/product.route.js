import express from "express";

import {
  getProduct,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../controllers/product.controller.js";
const router = express.Router();

// updating the product
router.put("/", updateProduct);
// featching all products
router.get("/", getProduct);

router.delete("/", deleteProduct);

// Define the POST route to create a product
router.post("/", createProduct);

export default router;

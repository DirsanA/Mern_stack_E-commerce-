import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/product.route.js";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000; // Use environment variable for port if available

// Middleware to parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/products", productRoutes); // Correct route path

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

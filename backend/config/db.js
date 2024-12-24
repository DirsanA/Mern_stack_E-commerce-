// db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Loading the .env variables to following folders

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {});

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1); // Exit with failure code 1
  }
};

import Product from "../config/models/product.model.js";

// getting all products
export const getProduct = async (req, res) => {
  try {
    const products = await Product.find({}); // empty object means featching all products
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
};

// routte for delete product

export const deleteProduct = async (req, res) => {
  const { id } = req.params; // Destructure to get the product id from the URL params
  console.log(id); // Log the id to the console
  // Add your deletion logic here
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Product is deleted",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "product is not found!",
    });
  }
};

// route for update product

export const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = req.body; // accept the user updated from the body
  try {
    const updateProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "product is updated succesfuly",
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      success: false,
      message: "server error",
    });
  }
};

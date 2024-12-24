import Product from "../config/models/product.model";
export default getProduct = async (req, res) => {
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

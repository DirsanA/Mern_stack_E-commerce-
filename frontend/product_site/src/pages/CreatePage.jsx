import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  // State for new product
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();
  // Handle Add Product
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct); // Fixed spelling error here too
    console.log("Success:", success); // Fixed spelling error here
    console.log("Message:", message);
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={"full"}
          background={useColorModeValue("white", "gray.700")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            {/* Product Name */}
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  name: e.target.value,
                })
              }
            />
            {/* Product Price */}
            <Input
              placeholder="Product Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  price: e.target.value,
                })
              }
            />
            {/* Product Image */}
            <Input
              placeholder="Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,
                  image: e.target.value,
                })
              }
            />
            {/* Add Product Button */}
            <Button colorScheme="blue" onClick={handleAddProduct}>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;

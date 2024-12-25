import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  HStack,
  Button,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useProductStore } from "../store/product"; // Import the zustand store

const ProductCard = ({ product }) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "gray.800");
  const toast = useToast();

  // Fetch the deleteProduct function from zustand store
  const { deleteProduct } = useProductStore();

  // Handle delete product
  const handleDelete = async () => {
    const { success, message } = await deleteProduct(product._id);

    // Show toast notifications based on success or failure
    if (success) {
      toast({
        title: "Product Deleted",
        description: message,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <Box
      bg={bg}
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    >
      <Image
        src={product.image}
        alt={product.name}
        h={48}
        w={"full"}
        objectFit={"cover"}
      />
      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={2}>
          {product.name}
        </Heading>
        <Text fontWeight={"bold"} fontSize={"xl"} color={textColor} mb={4}>
          ${product.price}
        </Text>
        <HStack spacing={2}>
          <Button leftIcon={<FiEdit />} colorScheme="blue">
            Edit
          </Button>
          <Button
            leftIcon={<FiTrash />}
            colorScheme="red"
            onClick={handleDelete} // Attach delete handler
          >
            Delete
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProductCard;

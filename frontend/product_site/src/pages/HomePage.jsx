import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom"; // Import from react-router-dom

const HomePage = () => {
  return (
    <Container maxW={"container.xl"} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgClip={"text"}
          bgGradient={"linear(to-r,cyan.400,blue.500)"}
          textAlign={"center"}
        >
          Current Product 🚀
        </Text>
        <SimpleGrid
          column={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        ></SimpleGrid>

        <Text
          fontSize={"xl"}
          fontWeight={"bold"}
          bgClip={"text"}
          color={"gray.500"}
          bgGradient={"linear(to-r,cyan.400,blue.500)"}
          textAlign={"center"}
        >
          No product found 😢
          <Link to={"/create"}>
            <Text
              as="span"
              color={"blue.500"}
              _hover={{ textDecoration: "underline" }}
            >
              Create a Product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  );
};

export default HomePage;

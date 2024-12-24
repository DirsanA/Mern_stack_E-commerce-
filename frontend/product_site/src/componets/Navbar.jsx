import {
  Button,
  Container,
  Flex,
  Text,
  HStack,
  Link as ChakraLink,
  Icon,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CgAddR } from "react-icons/cg";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        {/* Logo */}
        <Text
          fontSize={{ base: 22, sm: "28" }}
          fontWeight={"bold"}
          textAlign={"center"}
          textTransform={"uppercase"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <ChakraLink as={RouterLink} to={"/"}>
            Product Store 🛍️
          </ChakraLink>
        </Text>

        {/* Add Product Button */}
        <HStack spacing={2} alignItems={"center"}>
          <ChakraLink as={RouterLink} to={"/create"}>
            <Button p={4}>
              <Icon as={CgAddR} fontSize={20} />
            </Button>
          </ChakraLink>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

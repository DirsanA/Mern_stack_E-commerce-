import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Optional: Customize the default theme
const theme = extendTheme({
  config: {
    initialColorMode: "light", // or "dark"
    useSystemColorMode: false,
  },
});

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

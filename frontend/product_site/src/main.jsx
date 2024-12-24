import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom"; // Corrected import

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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);

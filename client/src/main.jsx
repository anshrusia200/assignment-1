import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./config/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ColorModeScript initialColorMode={theme.config} />
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </>
);

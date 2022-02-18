import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";

// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import { LocaleProvider } from "./Components/LocaleProvider/LocaleProvider";

// 2. Call `extendTheme` and pass your custom values
const styles = {
  global: (props) => ({
    body: {
      bg: mode("gray.100", "#141214")(props)
    }
  })
};

const theme = extendTheme({
  styles,
  fonts: {
    heading: "Permanent Marker",
    body: "Roboto"
  },
  config: {
    initialColorMode: "dark"
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>

      <LocaleProvider>
        <App />
      </LocaleProvider>
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);

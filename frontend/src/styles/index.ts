import { extendTheme } from "@chakra-ui/react";
import { global } from "./global.styles";

const theme = extendTheme({
  styles: {
    global,
  },

  colors: {
    red: "#A41623",
    orange: "#303030",
    white: "#FAFAFA",
    black: {
      1: "#ffffff",
    },
  },

  fonts: {
    body: `'Open Sans', sans-serif`,
    heading: `'Lora', serif`,
  },
});

export default theme;

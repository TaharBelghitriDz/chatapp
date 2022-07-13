import { extendTheme } from "@chakra-ui/react";
import { global } from "./global.styles";

const theme = extendTheme({
  styles: {
    global,
  },
  fonts: {
    body: `'Open Sans', sans-serif`,
    heading: `'Lora', serif`,
  },
});

export default theme;

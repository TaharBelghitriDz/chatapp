import { extendTheme } from "@chakra-ui/react";
import { global } from "./global.styles";

const theme = extendTheme({
  styles: {
    global,
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Outfit', sans-serif`,
  },
});

export default theme;

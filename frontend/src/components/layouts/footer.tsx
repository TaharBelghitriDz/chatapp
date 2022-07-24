import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { routes, routsObject } from "../../types/core.types";

const routs: routsObject = {
  "/": <Box>footer </Box>,
  "/login": <Box>footer </Box>,
  "/blog": <Box>footer </Box>,
  "/chat": <Box pos="fixed" />,
  "/profile": <div> profile footer </div>,
};

const Footer = () => {
  const { route } = useRouter();

  if (Object.keys(routs).includes(route)) return routs[route as routes];
  else return <div />;
};

export default Footer;

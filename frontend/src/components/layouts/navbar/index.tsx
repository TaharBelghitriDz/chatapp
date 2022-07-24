import { useRouter } from "next/router";
import HomeNavbar from "./home.navbar";
import { routes, routsObject } from "../../../types/core.types";
import { Box } from "@chakra-ui/react";

const routs: routsObject = {
  "/": <HomeNavbar />,
  "/login": <HomeNavbar />,
  "/blog": <HomeNavbar />,
  "/chat": <Box pos="fixed" />,
  "/profile": <div> profile navbar </div>,
};

const Navbar = () => {
  const { route } = useRouter();

  if (Object.keys(routs).includes(route)) return routs[route as routes];
  else return <div />;
};

export default Navbar;

import { useRouter } from "next/router";
import HomeNavbar from "./home.navbar";
import { routes, routsObject } from "../../../interfaces/core.types";

const routs: routsObject = {
  "/": <HomeNavbar />,
  "/chat": <div> chat navbar </div>,
  "/profile": <div> profile navbar </div>,
};

const Navbar = () => {
  const { route } = useRouter();

  if (Object.keys(routs).includes(route)) return routs[route as routes];
  else return <div> 400 page </div>;
};

export default Navbar;

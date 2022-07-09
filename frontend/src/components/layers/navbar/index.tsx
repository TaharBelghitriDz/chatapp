import { useRouter } from "next/router";
import HomeNavbar from "./home.navbar";

const Navbar = () => {
  const { route } = useRouter();
  console.log(route);

  if (route === "/chat") return <div> chat navbar </div>;
  else return <HomeNavbar />;
};

export default Navbar;

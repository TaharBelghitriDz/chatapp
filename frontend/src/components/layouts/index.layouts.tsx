import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useWindowSize } from "../../hooks/window.hook";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  const size = useWindowSize();

  return (
    <>
      <Navbar />
      <Box children={children} />
      <Footer />
    </>
  );
};

export default Layout;

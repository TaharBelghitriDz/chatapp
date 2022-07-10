import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useWindowSize } from "../hooks/window.hook";
import Footer from "./layers/footer";
import Navbar from "./layers/navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  const size = useWindowSize();

  return (
    <>
      <Navbar />
      <Box pt="50px" children={children} />
      <Footer />
    </>
  );
};

export default Layout;

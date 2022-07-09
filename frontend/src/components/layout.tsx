import { ReactNode } from "react";
import { useWindowSize } from "../hooks/window.hook";
import Footer from "./layers/footer";
import Navbar from "./layers/navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  const size = useWindowSize();

  return (
    <>
      <Navbar />
      <div children={children} />
      <Footer />
    </>
  );
};

export default Layout;

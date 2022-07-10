import { Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomeNavbar = () => {
  const [view, setView] = useState({ place: "", url: "" });
  useEffect(() => {
    const place =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("token")
          ? "chat"
          : "login or signup"
        : "login & signup";

    setView({ place, url: place !== "chat" ? "/login" : "chat" });
  }, []);

  return (
    <Flex
      flexDirection="row"
      px="5vw"
      h="50px"
      justifyContent="space-between"
      alignItems="center"
      fontWeight="light"
      fontSize="20px"
      pos="fixed"
      top="0"
      left="0"
      w="100vw"
    >
      <Text fontSize="36px" fontWeight="bold">
        ola
      </Text>
      <HStack spacing="30px">
        <Link href="#">
          <Text cursor="pointer" _hover={{ color: "#A41623" }}>
            blog
          </Text>
        </Link>
        <Link href="#">
          <Text cursor="pointer" _hover={{ color: "#A41623" }}>
            about us
          </Text>
        </Link>
        <Link href={view.url} tabIndex={-1}>
          <Text cursor="pointer" _hover={{ color: "#A41623" }}>
            {view.place}
          </Text>
        </Link>
      </HStack>
    </Flex>
  );
};
export default HomeNavbar;

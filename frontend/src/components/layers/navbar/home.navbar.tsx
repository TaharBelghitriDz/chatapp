import { Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomeNavbar = () => {
  const [view, setView] = useState("");
  useEffect(() => {
    setView(
      typeof localStorage !== "undefined"
        ? localStorage.getItem("token")
          ? "chat"
          : "login or signup"
        : "login & signup"
    );
  }, []);

  return (
    <Flex
      flexDirection="row"
      bg="green"
      px="5vw"
      h="50px"
      justifyContent="space-between"
      alignItems="center"
      fontWeight="light"
      fontSize="20px"
    >
      <Text fontSize="36px"> ola </Text>
      <HStack spacing="30px">
        <Link href="#">blog</Link>
        <Link href="#">about us</Link>
        <Link href="#" tabIndex={-1}>
          {view}
        </Link>
      </HStack>
    </Flex>
  );
};
export default HomeNavbar;

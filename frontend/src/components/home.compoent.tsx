import { Box, Flex, Text, Image } from "@chakra-ui/react";

const HomeComponent = () => {
  return (
    <Flex
      flexDirection="column"
      w="90vw"
      ml="5vw"
      pt="10vh"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <Box
        fontFamily="'Lora', serif"
        fontWeight="bold"
        fontSize="50px"
        textAlign="center"
        maxW="870px"
      >
        Keep in mind,
        <p /> <span style={{ color: "#A41623" }}>One</span> good
        <span style={{ color: "#A41623" }}> conversation </span>
        {` `}
        can shift the direction forever.
        <Image
          src="https://i.postimg.cc/D0dj1y2S/Group-24.png"
          zIndex={-10}
          pos="absolute"
          top="0"
          left="5vw"
          h="90vh"
          w="90vw"
        />
      </Box>
      <Text
        w={320}
        fontSize={20}
        fontFamily="'Josefin Sans', sans-serif"
        pt="40px"
        textAlign="center"
        fontWeight="bold"
      >
        you can share you profile and message all the people you know
      </Text>
      <Flex
        mt="50px"
        flexDirection="row"
        alignItems="baseline"
        justifyContent="space-between"
        w="90%"
        left="5vw"
      >
        <Image src="https://i.postimg.cc/mZYBmYkH/Group-23.png" w="200px" />
        <Image
          src="https://i.postimg.cc/HWRsNY4q/hands-with-heart-4883949-4073132-removebg-preview-1.png"
          w="200px"
        />
        <Image src="https://i.postimg.cc/mgqvLkh4/Group-17.png" w="300px" />
      </Flex>
    </Flex>
  );
};

export default HomeComponent;

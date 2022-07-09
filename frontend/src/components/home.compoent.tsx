import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const HomeComponent = () => {
  return (
    <Flex flexDirection="row" w="100vw" pt="5vh" justifyContent="center">
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
      </Box>
    </Flex>
  );
};

export default HomeComponent;

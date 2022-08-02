import { HStack, Skeleton, SkeletonText, VStack } from "@chakra-ui/react";

export const LoadingUserComp = () => {
  return (
    <HStack
      width="80%"
      px="10px"
      w="full"
      justifyContent="space-between"
      alignItems="flex-end"
      h="50xp"
      rounded="15px"
      p="10px"
    >
      <Skeleton h="50px" w="50px" bg="gray" rounded="15px" />
      <HStack w="calc(100% - 70px)" justifyContent="space-between">
        <VStack alignItems="start" spacing="10px" lineHeight="15px">
          <SkeletonText h="20px" noOfLines={1} fontWeight="bold" w="100px" />
          <SkeletonText h="20px" noOfLines={1} fontWeight="bold" w="100px" />
        </VStack>
      </HStack>
    </HStack>
  );
};

export const LoadingUser = () => (
  <>
    <LoadingUserComp />
    <LoadingUserComp />
    <LoadingUserComp />
    <LoadingUserComp />
    <LoadingUserComp />
  </>
);

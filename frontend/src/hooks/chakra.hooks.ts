import { useToast } from "@chakra-ui/react";
import { useCustomToasterType } from "../types/chakraui.types";

export const useCustomToaster = () => {
  const toast = useToast();

  return ({
    title,
    description,
    status = "error",
    duration = 3000,
  }: useCustomToasterType) =>
    toast({
      title,
      description,
      status,
      duration,
      isClosable: true,
    });
};

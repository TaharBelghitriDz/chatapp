import { Theme } from "@chakra-ui/react";
import { SystemStyleObject } from "@chakra-ui/theme-tools";

type StyleInterpolation =
  | SystemStyleObject
  | ((options: StyleOptions) => SystemStyleObject);

interface StyleOptions {
  theme: Theme;
  colorMode: "light" | "dark";
  colorScheme: string;
}

export interface StyleConfig {
  baseStyle: StyleInterpolation;
  sizes: { [size: string]: StyleInterpolation };
  variants: { [variant: string]: StyleInterpolation };
  defaultProps?: {
    variant: string;
    size: string;
  };
}

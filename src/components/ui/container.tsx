import { Box, type BoxProps } from "@chakra-ui/react";

export function Container(props: BoxProps) {
  return (
    <Box
      w="full"
      maxW="frame"
      mx="auto"
      px={{ base: "20px", md: "40px", xl: "margin" }}
      {...props}
    />
  );
}

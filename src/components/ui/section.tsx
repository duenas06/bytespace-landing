import { Box, type BoxProps } from "@chakra-ui/react";

import { Container } from "./container";

type SectionProps = BoxProps & {
  containerProps?: BoxProps;
};

export function Section({ children, containerProps, ...rest }: SectionProps) {
  return (
    <Box as="section" position="relative" py={{ base: "56px", md: "80px", xl: "96px" }} {...rest}>
      <Container position="relative" zIndex={1} {...containerProps}>
        {children}
      </Container>
    </Box>
  );
}

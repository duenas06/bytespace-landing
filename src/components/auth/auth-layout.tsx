import { Box, Link, SimpleGrid, Stack } from "@chakra-ui/react";
import NextLink from "next/link";

import { GridBackdrop, LogoMark } from "@/components/common";
import { Container } from "@/components/ui";

type AuthLayoutProps = {
  showcase: React.ReactNode;
  children: React.ReactNode;
};

export function AuthLayout({ showcase, children }: AuthLayoutProps) {
  return (
    <Box as="main" position="relative" minH="100dvh" bg="brand.800" overflow="hidden">
      <GridBackdrop />

      <Container position="relative" zIndex={1} py={{ base: "32px", xl: "40px" }}>
        <Stack gap={{ base: "32px", xl: "40px" }}>
          <Link asChild aria-label="ByteSpace home" alignSelf="flex-start">
            <NextLink href="/">
              <LogoMark tone="light" h="34px" />
            </NextLink>
          </Link>

          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            gap={{ base: "40px", xl: "64px" }}
            alignItems="start"
          >
            {showcase}
            <Box justifySelf={{ lg: "flex-end" }} w="full" display="flex" justifyContent="flex-end">
              {children}
            </Box>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}

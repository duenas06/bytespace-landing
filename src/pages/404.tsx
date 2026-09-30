import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import { GridBackdrop } from "@/components/common";
import { Seo } from "@/components/seo";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { Button, Container } from "@/components/ui";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found"
        description="Try to use a correct url or go back to homepage to start again"
      />
      <Box as="main" position="relative" bg="brand.800" overflow="hidden">
        <GridBackdrop />

        <Box position="relative" zIndex={1}>
          <SiteHeader />

          <Container pb={{ base: "80px", xl: "125px" }}>
            <Box position="relative" pt={{ base: "48px", xl: "100px" }}>
              <Text
                aria-hidden="true"
                position="absolute"
                top="0"
                left="50%"
                transform="translateX(-50%)"
                fontFamily="heading"
                fontWeight="semibold"
                lineHeight="1"
                fontSize={{ base: "180px", md: "300px", xl: "420px" }}
                bgGradient="linear-gradient(180deg, {colors.accent.500} 38%, rgba(203, 252, 1, 0) 92%)"
                bgClip="text"
                color="transparent"
                userSelect="none"
                pointerEvents="none"
              >
                404
              </Text>

              <Stack
                position="relative"
                align="center"
                textAlign="center"
                gap="24px"
                pt={{ base: "120px", md: "200px", xl: "270px" }}
              >
                <Heading
                  as="h1"
                  fontFamily="heading"
                  fontWeight="semibold"
                  lineHeight="1.2"
                  fontSize={{ base: "34px", md: "48px", xl: "64px" }}
                  color="fg.inverted"
                  maxW="920px"
                >
                  The page you are looking for doesn&rsquo;t exist
                </Heading>
                <Text textStyle="body.l" color="whiteAlpha.900">
                  Try to use a correct url or go back to homepage to start again
                </Text>
                <Button asChild scale="lg" visual="accent" mt="16px">
                  <NextLink href="/">Back to Home</NextLink>
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      </Box>
      <SiteFooter />
    </>
  );
}

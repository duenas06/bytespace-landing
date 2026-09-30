import { Box, Heading, Stack, Text } from "@chakra-ui/react";

import { GridBackdrop } from "@/components/common";
import { SiteHeader } from "@/components/layout";
import { Container } from "@/components/ui";

type PageIntroProps = {
  title: string;
  description: string;
};

export function PageIntro({ title, description }: PageIntroProps) {
  return (
    <Box position="relative" bg="brand.800" overflow="hidden">
      <GridBackdrop />
      <Box position="relative" zIndex={1}>
        <SiteHeader />
        <Container pt={{ base: "32px", xl: "52px" }} pb={{ base: "48px", xl: "80px" }}>
          <Stack gap="16px" maxW="720px" color="fg.inverted">
            <Heading as="h1" textStyle="heading.m">
              {title}
            </Heading>
            <Text textStyle="body.l" color="whiteAlpha.900">
              {description}
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

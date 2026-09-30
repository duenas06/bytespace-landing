import { Box, HStack, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import { InlineForm, Logo } from "@/components/common";
import { Container } from "@/components/ui";
import { footerColumns, legalNav } from "@/data/navigation";

export function SiteFooter() {
  return (
    <Box as="footer" bg="bg" pt={{ base: "56px", xl: "80px" }} pb="40px">
      <Container>
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "48px", xl: "80px" }}>
          <Stack gap="24px" maxW="560px">
            <Logo tone="dark" />
            <Text textStyle="body.m" color="fg.muted">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </Text>
            <InlineForm
              name="newsletter-email"
              type="email"
              placeholder="Enter your email"
              ctaLabel="Search"
              inputMaxW="376px"
            />
            <Text textStyle="body.xs" color="fg.muted" maxW="460px">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 2, md: 3 }} gap={{ base: "32px", xl: "40px" }}>
            {footerColumns.map((column) => (
              <Stack key={column.id} gap="16px">
                <Text textStyle="label.m">{column.title}</Text>
                {column.links.map((link) => (
                  <Link
                    key={link.href}
                    asChild
                    textStyle="body.m"
                    color="fg.muted"
                    _hover={{ color: "fg.brand", textDecoration: "none" }}
                  >
                    <NextLink href={link.href}>{link.label}</NextLink>
                  </Link>
                ))}
              </Stack>
            ))}
          </SimpleGrid>
        </SimpleGrid>

        <Box borderTopWidth="1px" borderColor="border" mt={{ base: "48px", xl: "96px" }} pt="24px">
          <Stack
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
            gap="16px"
          >
            <Text textStyle="body.s" color="fg.muted">
              @ 2023 ByteSpace. All rights reserved.
            </Text>
            <HStack gap="24px" flexWrap="wrap">
              {legalNav.map((item) => (
                <Link
                  key={item.href}
                  asChild
                  textStyle="body.s"
                  color="fg.muted"
                  _hover={{ color: "fg.brand", textDecoration: "none" }}
                >
                  <NextLink href={item.href}>{item.label}</NextLink>
                </Link>
              ))}
            </HStack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

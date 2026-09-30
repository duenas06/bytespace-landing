import { Box, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import { Button, Container, Pill } from "@/components/ui";
import type { Creator } from "@/types/content";

export function CreatorHero({ creator }: { creator: Creator }) {
  const stats = [
    { value: creator.productCount, label: "Products" },
    { value: creator.followerCount, label: "Followers" },
  ];

  return (
    <Container pt={{ base: "32px", xl: "52px" }} pb={{ base: "48px", xl: "80px" }}>
      <Stack gap={{ base: "24px", xl: "44px" }} color="fg.inverted">
        <HStack gap="24px" align="center">
          <Box
            position="relative"
            boxSize={{ base: "72px", md: "96px" }}
            borderRadius="card"
            overflow="hidden"
            flexShrink={0}
          >
            <Image
              src={creator.avatar}
              alt={creator.name}
              fill
              priority
              sizes="96px"
              style={{ objectFit: "cover" }}
            />
          </Box>

          <Stack gap="6px">
            <HStack gap="16px" flexWrap="wrap">
              <Heading as="h1" textStyle="heading.m">
                {creator.name}
              </Heading>
              <Pill tone="accent" scale="md">
                {creator.role}
              </Pill>
            </HStack>
            <Text textStyle="label.xl" color="whiteAlpha.900">
              {creator.tagline}
            </Text>
          </Stack>
        </HStack>

        <Stack gap="4px">
          {creator.bio.map((paragraph) => (
            <Text key={paragraph.slice(0, 32)} textStyle="body.l" color="whiteAlpha.900">
              {paragraph}
            </Text>
          ))}
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          gap="24px"
        >
          <HStack gap="16px" flexWrap="wrap">
            {stats.map((stat) => (
              <Pill key={stat.label} tone="solid" scale="lg" gap="8px">
                <Text as="span" textStyle="label.m" color="fg.brand">
                  {stat.value}
                </Text>
                {stat.label}
              </Pill>
            ))}
          </HStack>

          <Button visual="accent" scale="md">
            Follow
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

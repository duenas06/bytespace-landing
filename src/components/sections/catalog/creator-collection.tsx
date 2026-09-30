import { Box, HStack, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

import { Button, Pill, Section } from "@/components/ui";
import type { Creator } from "@/types/content";

export function CreatorCollection({ creators }: { creators: Creator[] }) {
  return (
    <Section pt={{ base: "40px", xl: "64px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="gutter">
        {creators.map((creator) => (
          <Stack key={creator.slug} layerStyle="surface.card" p="24px" gap="20px">
            <HStack gap="16px">
              <Box
                position="relative"
                boxSize="72px"
                borderRadius="card"
                overflow="hidden"
                flexShrink={0}
              >
                <Image
                  src={creator.avatar}
                  alt={creator.name}
                  fill
                  sizes="72px"
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <Stack gap="4px">
                <Heading as="h2" textStyle="heading.xs">
                  {creator.name}
                </Heading>
                <Text textStyle="body.s" color="fg.muted">
                  {creator.tagline}
                </Text>
              </Stack>
            </HStack>

            <HStack gap="12px">
              <Pill tone="subtle" scale="sm">
                {`${creator.productCount} Products`}
              </Pill>
              <Pill tone="subtle" scale="sm">
                {`${creator.followerCount} Followers`}
              </Pill>
            </HStack>

            <Button asChild visual="surface" scale="sm" alignSelf="flex-start">
              <NextLink href={`/creators/${creator.slug}`}>View Profile</NextLink>
            </Button>
          </Stack>
        ))}
      </SimpleGrid>
    </Section>
  );
}

import { Box, HStack, Text } from "@chakra-ui/react";

import { Container } from "@/components/ui";

const marks = ["waves", "burst", "bolt", "dots", "spiral"] as const;

type MarkName = (typeof marks)[number];

function PartnerMark({ name }: { name: MarkName }) {
  return (
    <Box asChild boxSize="40px" flexShrink={0}>
      <svg viewBox="0 0 40 40" aria-hidden="true">
        {name === "waves" ? (
          <>
            <circle cx="20" cy="20" r="20" fill="currentColor" />
            <path d="M6 24h28a20 20 0 0 1-4 5H9a20 20 0 0 1-3-5Z" fill="white" opacity="0.85" />
            <path d="M9 15h22a20 20 0 0 0-4-5H13a20 20 0 0 0-4 5Z" fill="white" opacity="0.85" />
          </>
        ) : null}
        {name === "burst" ? (
          <>
            <circle cx="20" cy="20" r="7" fill="currentColor" />
            {Array.from({ length: 12 }).map((_, index) => (
              <rect
                key={index}
                x="18.5"
                y="0"
                width="3"
                height="9"
                rx="1.5"
                fill="currentColor"
                transform={`rotate(${index * 30} 20 20)`}
              />
            ))}
          </>
        ) : null}
        {name === "bolt" ? (
          <>
            <circle cx="20" cy="20" r="20" fill="currentColor" />
            <path d="M22 8 12 22h7l-2 10 11-15h-7l1-9Z" fill="white" />
          </>
        ) : null}
        {name === "dots" ? (
          <>
            <circle cx="20" cy="20" r="20" fill="currentColor" />
            <circle cx="14" cy="14" r="3.5" fill="white" />
            <circle cx="26" cy="14" r="3.5" fill="white" />
            <circle cx="14" cy="26" r="3.5" fill="white" />
            <circle cx="26" cy="26" r="3.5" fill="white" />
          </>
        ) : null}
        {name === "spiral" ? (
          <>
            {[19, 15, 11, 7, 3].map((radius) => (
              <circle
                key={radius}
                cx="20"
                cy="20"
                r={radius}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            ))}
          </>
        ) : null}
      </svg>
    </Box>
  );
}

export function TrustedBySection() {
  return (
    <Box as="section" bg="bg.subtle" py={{ base: "40px", xl: "64px" }}>
      <Container>
        <HStack
          justify="space-between"
          gap={{ base: "32px", md: "48px" }}
          flexWrap="wrap"
          color="ink.400"
        >
          {marks.map((mark) => (
            <HStack key={mark} gap="12px" mx="auto">
              <PartnerMark name={mark} />
              <Text fontFamily="heading" fontWeight="semibold" fontSize="24px" color="ink.500">
                Logoipsum
              </Text>
            </HStack>
          ))}
        </HStack>
      </Container>
    </Box>
  );
}

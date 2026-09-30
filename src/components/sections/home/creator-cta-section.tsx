import { Box, Stack } from "@chakra-ui/react";
import NextLink from "next/link";

import { DecorShape, GridBackdrop } from "@/components/common";
import { Button, Container, SectionHeading } from "@/components/ui";

export function CreatorCtaSection() {
  return (
    <Box as="section" position="relative" bg="brand.800" overflow="hidden">
      <GridBackdrop />

      <Box display={{ base: "none", xl: "block" }} aria-hidden="true">
        <DecorShape shape="squiggleLime" width="170px" left="-40px" top="0" />
        <DecorShape shape="squiggleWhite" width="120px" left="215px" top="30px" />
        <DecorShape shape="coneWhite" width="115px" left="-15px" bottom="120px" />
        <DecorShape shape="triangleLime" width="130px" right="215px" top="60px" />
        <DecorShape shape="cylinderWhite" width="160px" right="10px" top="20px" />
        <DecorShape shape="squiggleLime" width="180px" right="120px" bottom="-60px" />
      </Box>

      <Container position="relative" zIndex={1} py={{ base: "72px", xl: "110px" }}>
        <Stack align="center" gap="40px">
          <SectionHeading
            tone="inverted"
            title={
              <>
                Unlock Your Potential as a
                <br />
                Creator with ByteSpace
              </>
            }
            description="Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library."
            maxDescriptionWidth="960px"
          />
          <Button asChild scale="lg" visual="accent">
            <NextLink href="/register">Join as Creator</NextLink>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

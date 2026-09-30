import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import {
  DecorShape,
  GridBackdrop,
  HighlightCard,
  InlineForm,
  ProgressCard,
  StudentsCard,
} from "@/components/common";
import { SiteHeader } from "@/components/layout";
import { Container } from "@/components/ui";
import { heroContent } from "@/data/home";

export function HeroSection() {
  return (
    <Box as="section" position="relative" bg="brand.800" overflow="hidden">
      <GridBackdrop />

      <Box position="relative" zIndex={1}>
        <SiteHeader />

        <Container>
          <Stack align="center" textAlign="center" gap="32px" pt={{ base: "40px", xl: "64px" }}>
            <Heading as="h1" textStyle="heading.l" color="fg.inverted" maxW="920px">
              {heroContent.title}
            </Heading>
            <Text textStyle="body.l" color="whiteAlpha.900" maxW="840px">
              {heroContent.description}
            </Text>
            <InlineForm
              name="hero-search"
              placeholder={heroContent.searchPlaceholder}
              ctaLabel={heroContent.searchCta}
              withIcon
              justifyContent="center"
              maxW="640px"
            />
          </Stack>
        </Container>

        <Box
          position="relative"
          mt={{ base: "48px", xl: "72px" }}
          h={{ base: "320px", md: "400px", xl: "430px" }}
        >
          <Box
            position="absolute"
            top="0"
            left="50%"
            transform="translateX(-50%)"
            w={{ base: "620px", md: "860px", xl: "1110px" }}
            aspectRatio="1"
            borderRadius="full"
            bg="accent.500"
          />

          <Box
            position="absolute"
            bottom="0"
            left="50%"
            transform="translateX(-50%)"
            w={{ base: "290px", md: "400px", xl: "500px" }}
            h={{ base: "285px", md: "394px", xl: "492px" }}
          >
            <Image
              src="/images/people/learner-hero.png"
              alt="Student learning with ByteSpace"
              fill
              priority
              sizes="(max-width: 768px) 290px, 500px"
              style={{ objectFit: "contain", objectPosition: "bottom" }}
            />
          </Box>

          <Container position="relative" h="full" display={{ base: "none", lg: "block" }}>
            <HighlightCard
              title={heroContent.highlight.title}
              meta={heroContent.highlight.meta}
              position="absolute"
              top="55px"
              left="24%"
              w="210px"
            />
            <ProgressCard
              title={heroContent.progress.title}
              value={heroContent.progress.value}
              position="absolute"
              top="60px"
              right="20%"
              w="230px"
            />
            <StudentsCard
              title={heroContent.students.title}
              rating={heroContent.students.rating}
              count={heroContent.students.count}
              avatars={[
                "/images/avatars/student-5.png",
                "/images/avatars/student-6.png",
                "/images/avatars/student-7.png",
                "/images/avatars/student-8.png",
                "/images/avatars/student-9.png",
              ]}
              extra={heroContent.students.extra}
              position="absolute"
              top="250px"
              left="17%"
              w="256px"
            />
          </Container>
        </Box>
      </Box>

      <Box display={{ base: "none", xl: "block" }} aria-hidden="true">
        <DecorShape shape="squiggleLime" width="200px" left="-20px" top="280px" />
        <DecorShape shape="squiggleWhite" width="120px" left="220px" top="510px" />
        <DecorShape shape="torusWhite" width="250px" left="60px" top="750px" />
        <DecorShape shape="cylinderLime" width="185px" right="-10px" top="240px" />
        <DecorShape shape="triangleWhite" width="135px" right="180px" top="495px" />
        <DecorShape shape="squiggleWhiteAlt" width="180px" right="40px" top="725px" />
      </Box>
    </Box>
  );
}

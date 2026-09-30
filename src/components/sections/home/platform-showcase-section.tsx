import { Box, Heading, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import {
  CheckList,
  CollageStage,
  CourseCard,
  DecorShape,
  ProgressCard,
  RevenueCard,
  StatBlock,
  StudentsCard,
} from "@/components/common";
import { Container } from "@/components/ui";
import {
  creatorBenefits,
  featuredCourses,
  growthStats,
  heroContent,
  revenueCards,
} from "@/data/home";

const studentAvatars = [
  "/images/avatars/student-10.png",
  "/images/avatars/student-11.png",
  "/images/avatars/student-12.png",
  "/images/avatars/student-1.png",
  "/images/avatars/student-2.png",
];

export function PlatformShowcaseSection() {
  return (
    <Box as="section" bgGradient="surface-soft" overflow="hidden">
      <Container py={{ base: "64px", xl: "104px" }}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: "40px", xl: "80px" }}
          alignItems="center"
        >
          <Stack gap={{ base: "24px", xl: "32px" }} maxW="560px">
            <Heading as="h2" textStyle="heading.m">
              Your Path to Professional Growth Starts Here!
            </Heading>
            <Text textStyle="body.l" color="fg.muted">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </Text>
            <HStack gap={{ base: "32px", xl: "48px" }} pt="8px">
              {growthStats.map((stat) => (
                <StatBlock key={stat.id} stat={stat} />
              ))}
            </HStack>
          </Stack>

          <GrowthCollage />
        </SimpleGrid>
      </Container>

      <Container pb={{ base: "64px", xl: "104px" }}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: "40px", xl: "80px" }}
          alignItems="center"
        >
          <Box order={{ base: 2, lg: 1 }}>
            <CreatorCollage />
          </Box>

          <Stack gap={{ base: "24px", xl: "32px" }} maxW="560px" order={{ base: 1, lg: 2 }}>
            <Heading as="h2" textStyle="heading.m">
              Create &amp; Manage Courses Easily.
            </Heading>
            <Text textStyle="body.l" color="fg.muted">
              <Text as="span" fontWeight="bold" color="fg">
                ByteSpace
              </Text>{" "}
              supports individuals or entities in the creation, publication, and administration of
              educational courses.
            </Text>
            <CheckList items={creatorBenefits} pt="8px" />
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function GrowthCollage() {
  return (
    <CollageStage stageWidth={580} stageHeight={560}>
      <CourseCard
        course={featuredCourses[0]}
        position="absolute"
        top="0"
        left="0"
        w="360px"
        imageSizes="360px"
      />

      <Box position="absolute" top="35px" left="85px" w="495px" h="487px">
        <Image
          src="/images/people/learner-hero.png"
          alt="Learner exploring courses"
          fill
          sizes="495px"
          style={{ objectFit: "contain", objectPosition: "bottom" }}
        />
      </Box>

      <DecorShape shape="squiggleLime" width="135px" left="445px" top="70px" />

      <ProgressCard
        title={heroContent.progress.title}
        value={heroContent.progress.value}
        position="absolute"
        top="210px"
        left="345px"
        w="235px"
      />
    </CollageStage>
  );
}

function CreatorCollage() {
  return (
    <CollageStage stageWidth={540} stageHeight={600}>
      <RevenueCard
        title={revenueCards.total.title}
        period={revenueCards.total.period}
        value={revenueCards.total.value}
        progress={62}
        position="absolute"
        top="23px"
        left="0"
        w="230px"
      />

      <RevenueCard
        title={revenueCards.yearToDate.title}
        period={revenueCards.yearToDate.period}
        value={revenueCards.yearToDate.value}
        delta={revenueCards.yearToDate.delta}
        position="absolute"
        top="177px"
        left="0"
        w="135px"
      />

      <Box position="absolute" top="0" left="60px" w="340px" h="573px">
        <Image
          src="/images/people/creator-hero.png"
          alt="Creator managing courses"
          fill
          sizes="340px"
          style={{ objectFit: "contain", objectPosition: "bottom" }}
        />
      </Box>

      <DecorShape shape="squiggleLime" width="140px" left="340px" top="125px" />

      <StudentsCard
        title="Happy Students"
        rating={4.5}
        count={240}
        avatars={studentAvatars}
        extra="2K+"
        position="absolute"
        top="395px"
        left="285px"
        w="255px"
      />
    </CollageStage>
  );
}

import { Box, Heading, Stack, Text } from "@chakra-ui/react";

import { CollageStage, CourseCard, DecorShape, StudentsCard } from "@/components/common";
import { featuredCourses } from "@/data/home";

const showcaseAvatars = [
  "/images/avatars/student-4.png",
  "/images/avatars/student-5.png",
  "/images/avatars/student-6.png",
  "/images/avatars/student-7.png",
  "/images/avatars/student-8.png",
];

type AuthShowcaseProps = {
  title: string;
  description: string;
};

export function AuthShowcase({ title, description }: AuthShowcaseProps) {
  return (
    <Stack gap={{ base: "32px", xl: "88px" }} color="fg.inverted" maxW="620px">
      <Stack gap="12px">
        <Heading as="h2" textStyle="heading.xs">
          {title}
        </Heading>
        <Text textStyle="body.m" color="whiteAlpha.900" maxW="480px">
          {description}
        </Text>
      </Stack>

      <Box display={{ base: "none", md: "block" }}>
        <CollageStage stageWidth={500} stageHeight={560} justifyContent="flex-start">
          <CourseCard
            course={featuredCourses[1]}
            position="absolute"
            top="90px"
            left="2px"
            w="373px"
            imageSizes="373px"
          />
          <CourseCard
            course={featuredCourses[2]}
            position="absolute"
            top="0"
            left="113px"
            w="375px"
            imageSizes="375px"
          />
          <DecorShape shape="torusLime" width="103px" left="52px" top="40px" />
          <DecorShape shape="squiggleWhiteAlt" width="107px" left="385px" top="345px" />
          <DecorShape shape="triangleLime" width="135px" left="0" top="440px" />
          <StudentsCard
            title="Happy Students"
            rating={4.5}
            count={240}
            avatars={showcaseAvatars}
            extra="2K+"
            tone="accent"
            position="absolute"
            top="435px"
            left="225px"
            w="265px"
          />
        </CollageStage>
      </Box>
    </Stack>
  );
}

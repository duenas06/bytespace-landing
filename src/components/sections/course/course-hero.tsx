import { Box, HStack, Heading, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { BarChart3, Play, Share2, Star, Users } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";

import { Button, Pill } from "@/components/ui";
import type { CourseDetail, Creator } from "@/types/content";

type CourseIntroProps = {
  course: CourseDetail;
  creator: Creator;
};

export function CourseIntro({ course, creator }: CourseIntroProps) {
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      align="flex-start"
      gap="24px"
      pt={{ base: "24px", xl: "56px" }}
    >
      <Stack gap="16px" color="fg.inverted">
        <Stack gap="8px">
          <Heading as="h1" textStyle="heading.m">
            {course.title}
          </Heading>
          <Text textStyle="heading.xs">{course.subtitle}</Text>
        </Stack>

        <Text textStyle="body.m" color="whiteAlpha.900">
          by{" "}
          <Link asChild color="accent.400" textStyle="body.m">
            <NextLink href={`/creators/${creator.slug}`}>purepearl studio</NextLink>
          </Link>
        </Text>

        <HStack gap="12px" flexWrap="wrap" pt="8px">
          <Pill tone="solid" scale="lg">
            <Icon asChild boxSize="16px" color="brand.800">
              <BarChart3 />
            </Icon>
            {course.level}
          </Pill>
          <Pill tone="solid" scale="lg">
            <Icon asChild boxSize="16px" color="brand.800">
              <Star fill="currentColor" strokeWidth={0} />
            </Icon>
            {`${course.rating} (${course.reviewCount} reviews)`}
          </Pill>
          <Pill tone="solid" scale="lg">
            <Icon asChild boxSize="16px" color="brand.800">
              <Users />
            </Icon>
            {`${course.studentCount} Students`}
          </Pill>
        </HStack>
      </Stack>

      <Button visual="accent" scale="md" flexShrink={0}>
        <Icon asChild boxSize="18px">
          <Share2 />
        </Icon>
        Share
      </Button>
    </Stack>
  );
}

export function CoursePlayer({ course }: { course: CourseDetail }) {
  return (
    <Box
      position="relative"
      borderRadius="card"
      overflow="hidden"
      aspectRatio="718 / 478"
      bg="ink.100"
    >
      <Image
        src={course.poster}
        alt={course.title}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 718px"
        style={{ objectFit: "cover" }}
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        boxSize="76px"
        borderRadius="media"
        bg="rgba(36, 37, 40, 0.5)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          boxSize="46px"
          borderRadius="full"
          bg="whiteAlpha.900"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon asChild boxSize="18px" color="ink.950">
            <Play fill="currentColor" strokeWidth={0} />
          </Icon>
        </Box>
      </Box>
    </Box>
  );
}

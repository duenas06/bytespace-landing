import { Box, HStack, Heading, Icon, Link, Stack, Text, type StackProps } from "@chakra-ui/react";
import { BarChart3 } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";

import { Pill } from "@/components/ui";
import { courseSlugByCourseId } from "@/data/courses";
import type { Course } from "@/types/content";

import { AvatarStack } from "./avatar-stack";
import { Rating } from "./rating";

type CourseCardProps = StackProps & {
  course: Course;
  imageSizes?: string;
  priority?: boolean;
};

export function CourseCard({
  course,
  imageSizes = "(max-width: 768px) 100vw, 373px",
  priority = false,
  ...rest
}: CourseCardProps) {
  const detailSlug = courseSlugByCourseId[course.id];
  const href = detailSlug ? `/courses/${detailSlug}` : undefined;

  return (
    <Stack
      layerStyle="surface.card"
      p="16px"
      gap="16px"
      transitionProperty="box-shadow, transform"
      transitionDuration="moderate"
      _hover={{ boxShadow: "floating", transform: "translateY(-2px)" }}
      {...rest}
    >
      <Box position="relative" borderRadius="media" overflow="hidden" aspectRatio="340 / 189">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes={imageSizes}
          priority={priority}
          style={{ objectFit: "cover" }}
        />
        <HStack
          position="absolute"
          insetX="12px"
          bottom="12px"
          gap="8px"
          justify="space-between"
          flexWrap="wrap"
        >
          <Pill tone="overlay" scale="xs">{`${course.lessons} Lessons`}</Pill>
          <Pill tone="overlay" scale="xs">
            {course.duration}
          </Pill>
          <Pill tone="overlay" scale="xs">{`${course.comments} Comments`}</Pill>
        </HStack>
      </Box>

      <Stack gap="12px">
        <HStack align="flex-start" justify="space-between" gap="12px">
          <Heading as="h3" textStyle="heading.xs" lineClamp={1}>
            {href ? (
              <Link asChild color="fg" _hover={{ color: "fg.brand", textDecoration: "none" }}>
                <NextLink href={href}>{course.title}</NextLink>
              </Link>
            ) : (
              course.title
            )}
          </Heading>
          <Rating value={course.rating} flexShrink={0} />
        </HStack>

        <Text textStyle="body.s" color="fg.muted">
          by{" "}
          <Link asChild color="fg.brand" textStyle="body.s">
            <NextLink href={course.creatorHref}>{course.creator}</NextLink>
          </Link>
        </Text>

        <HStack justify="space-between" gap="12px">
          <Pill tone="subtle" scale="sm">
            <Icon asChild boxSize="14px">
              <BarChart3 />
            </Icon>
            {course.level}
          </Pill>
          <AvatarStack avatars={course.enrolledAvatars} extra={course.enrolledExtra} size={32} />
        </HStack>

        <HStack gap="2px" align="baseline">
          <Text textStyle="heading.xs" color="fg.brand">
            {`$${course.price}`}
          </Text>
          <Text textStyle="body.xs" color="fg.muted">
            {`/${course.priceUnit}`}
          </Text>
        </HStack>
      </Stack>
    </Stack>
  );
}

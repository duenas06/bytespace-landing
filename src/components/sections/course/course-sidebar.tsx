import { Box, HStack, Heading, Icon, Separator, Stack, Text } from "@chakra-ui/react";
import { BadgeCheck, FolderOpen, Headset, Video } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";

import { Button } from "@/components/ui";
import type { CourseDetail, Creator } from "@/types/content";

const includeIcons = [FolderOpen, Video, BadgeCheck, Headset];

type CourseSidebarProps = {
  course: CourseDetail;
  creator: Creator;
};

export function CourseSidebar({ course, creator }: CourseSidebarProps) {
  return (
    <Stack
      layerStyle="surface.panel"
      boxShadow="floating"
      p={{ base: "24px", md: "40px" }}
      gap="24px"
    >
      <Stack gap="16px">
        <Heading as="h2" textStyle="heading.xs">
          {`${course.lessonCount} Lessons (${course.totalDuration})`}
        </Heading>

        <Stack gap="12px">
          {course.curriculum.map((entry) => (
            <HStack key={entry.id} align="flex-start" gap="12px">
              <Text textStyle="body.s" color="fg.muted" w="24px" flexShrink={0}>
                {entry.id}
              </Text>
              <Text textStyle="body.s" flex="1">
                {entry.title}
              </Text>
              <Text textStyle="body.s" color="fg.brand" flexShrink={0}>
                {entry.duration}
              </Text>
            </HStack>
          ))}
        </Stack>

        <Text textStyle="body.s" color="fg.muted">
          {course.moreLessons}
        </Text>
      </Stack>

      <Text textStyle="body.m" color="fg.muted">
        {course.enrolNote}
      </Text>

      <HStack gap="2px" align="baseline">
        <Text fontFamily="heading" fontWeight="semibold" fontSize="28px" color="fg.brand">
          {`$${course.price}`}
        </Text>
        <Text textStyle="body.s" color="fg.muted">
          {`/${course.priceUnit}`}
        </Text>
      </HStack>

      <Button visual="accent" scale="md" w="full">
        Enroll Now
      </Button>

      <Stack gap="16px">
        <Heading as="h3" textStyle="heading.xs">
          This course include
        </Heading>
        {course.includes.map((item, index) => {
          const Glyph = includeIcons[index % includeIcons.length];

          return (
            <HStack key={item} gap="12px">
              <Icon asChild boxSize="20px" color="brand.800">
                <Glyph />
              </Icon>
              <Text textStyle="body.m">{item}</Text>
            </HStack>
          );
        })}
      </Stack>

      <Separator borderColor="border" />

      <Stack gap="20px">
        <HStack gap="16px">
          <Box position="relative" boxSize="52px" borderRadius="full" overflow="hidden">
            <Image
              src={creator.portrait}
              alt={creator.name}
              fill
              sizes="52px"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Stack gap="2px">
            <Text textStyle="label.l">{creator.name}</Text>
            <Text textStyle="body.s" color="fg.muted">
              Professional Creator
            </Text>
          </Stack>
        </HStack>

        <Text textStyle="body.m" color="fg.muted">
          {course.enrolNote}
        </Text>

        <Button asChild visual="surface" scale="sm" alignSelf="flex-start">
          <NextLink href={`/creators/${creator.slug}`}>See Full Profile</NextLink>
        </Button>
      </Stack>
    </Stack>
  );
}

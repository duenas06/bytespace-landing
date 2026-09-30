import { Box, Center, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { Video } from "lucide-react";

import type { CourseDetail } from "@/types/content";

export function CourseLessons({ course }: { course: CourseDetail }) {
  return (
    <Stack gap="40px">
      <Stack gap="20px">
        <Heading as="h2" textStyle="heading.xs">
          {course.modulesIntro.title}
        </Heading>
        <Text textStyle="body.m" color="fg.muted">
          {course.modulesIntro.description}
        </Text>
      </Stack>

      <Stack gap="24px">
        <Heading as="h3" textStyle="heading.xs">
          Lesson List
        </Heading>

        <Stack gap="24px">
          {course.modules.map((module) => (
            <HStack key={module.id} align="flex-start" gap="24px">
              <Center boxSize="72px" borderRadius="card" bg="accent.500" flexShrink={0}>
                <Icon asChild boxSize="28px" color="ink.950">
                  <Video />
                </Icon>
              </Center>
              <Stack gap="6px">
                <Text textStyle="label.m">{module.title}</Text>
                <Text textStyle="body.s" color="fg.muted">
                  {module.description}
                </Text>
              </Stack>
            </HStack>
          ))}
        </Stack>
      </Stack>

      <Stack gap="20px">
        <Heading as="h3" textStyle="heading.xs">
          {course.lessonContent.title}
        </Heading>
        <Text textStyle="body.m" color="fg.muted">
          {course.lessonContent.description}
        </Text>
      </Stack>

      <Stack gap="20px">
        <Heading as="h3" textStyle="heading.xs">
          {course.progress.title}
        </Heading>
        <Text textStyle="body.m" color="fg.muted">
          {course.progress.description}
        </Text>

        <Stack layerStyle="surface.card" p="20px" gap="10px">
          <Text textStyle="body.s" color="fg.muted">
            Learning Progress
          </Text>
          <Text fontFamily="heading" fontWeight="semibold" fontSize="36px" lineHeight="1.2">
            {`${course.progress.value}%`}
          </Text>
          <Box h="8px" borderRadius="pill" bg="ink.100" overflow="hidden">
            <Box h="full" w={`${course.progress.value}%`} bg="accent.500" borderRadius="pill" />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
}

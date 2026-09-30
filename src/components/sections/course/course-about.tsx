import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import { CheckList } from "@/components/common";
import type { CourseDetail } from "@/types/content";

export function CourseAbout({ course }: { course: CourseDetail }) {
  return (
    <Stack gap="40px">
      <Stack gap="24px">
        <Heading as="h2" textStyle="heading.xs">
          Description
        </Heading>
        {course.description.map((paragraph) => (
          <Text key={paragraph.slice(0, 32)} textStyle="body.m" color="fg.muted">
            {paragraph}
          </Text>
        ))}
      </Stack>

      <Stack gap="20px">
        <Heading as="h2" textStyle="heading.xs">
          Sneak Peak
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 4 }} gap="18px">
          {course.sneakPeek.map((image) => (
            <Box
              key={image}
              position="relative"
              borderRadius="control"
              overflow="hidden"
              aspectRatio="168 / 130"
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 768px) 45vw, 168px"
                style={{ objectFit: "cover" }}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Stack>

      <Stack gap="20px">
        <Heading as="h2" textStyle="heading.xs">
          Key Points
        </Heading>
        <CheckList items={course.keyPoints} gap="12px" itemTextStyle="body.m" iconSize="20px" />
      </Stack>
    </Stack>
  );
}

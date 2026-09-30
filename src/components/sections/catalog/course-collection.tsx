import { HStack, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { BarChart3, ListFilter, Shapes, SlidersHorizontal } from "lucide-react";

import { CourseCard } from "@/components/common";
import { Pill, Section } from "@/components/ui";
import type { Course } from "@/types/content";

const filters = [
  { id: "filter", label: "Filter", icon: SlidersHorizontal },
  { id: "level", label: "Level", icon: BarChart3 },
  { id: "category", label: "Category", icon: Shapes },
];

type CourseCollectionProps = {
  courses: Course[];
  activeCategory?: string;
};

export function CourseCollection({ courses, activeCategory }: CourseCollectionProps) {
  return (
    <Section pt={{ base: "40px", xl: "64px" }}>
      <Stack gap={{ base: "32px", xl: "44px" }}>
        <HStack justify="space-between" gap="16px" flexWrap="wrap">
          <HStack gap="16px" flexWrap="wrap">
            {filters.map((filter) => (
              <Pill
                key={filter.id}
                tone={filter.id === "category" && activeCategory ? "accent" : "outline"}
                scale="lg"
                interactive
              >
                <Icon asChild boxSize="16px" color="fg">
                  <filter.icon />
                </Icon>
                {filter.id === "category" && activeCategory ? activeCategory : filter.label}
              </Pill>
            ))}
          </HStack>

          <Pill tone="outline" scale="lg" interactive>
            <Icon asChild boxSize="16px" color="fg">
              <ListFilter />
            </Icon>
            Most relevant
          </Pill>
        </HStack>

        {courses.length === 0 ? (
          <Text textStyle="body.l" color="fg.muted">
            No courses in this category yet.
          </Text>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="gutter">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} priority={index < 3} />
            ))}
          </SimpleGrid>
        )}
      </Stack>
    </Section>
  );
}

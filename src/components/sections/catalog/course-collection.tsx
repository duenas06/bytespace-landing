import { HStack, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { BarChart3, ListFilter, Shapes, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

import { CourseCard, Pagination, TopicFilter } from "@/components/common";
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
  topics?: string[];
  perPage?: number;
  pageCount?: number;
};

export function CourseCollection({
  courses,
  activeCategory,
  topics,
  perPage,
  pageCount,
}: CourseCollectionProps) {
  const [page, setPage] = useState(1);
  const visibleCourses = perPage ? courses.slice(0, perPage) : courses;

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

        {topics ? (
          <TopicFilter
            topics={topics}
            tone="subtle"
            justify="flex-start"
            pillProps={{ px: "16px" }}
          />
        ) : null}

        {visibleCourses.length === 0 ? (
          <Text textStyle="body.l" color="fg.muted">
            No courses in this category yet.
          </Text>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="gutter">
            {visibleCourses.map((course, index) => (
              <CourseCard key={`${course.id}-${index}`} course={course} priority={index < 3} />
            ))}
          </SimpleGrid>
        )}

        {pageCount && pageCount > 1 ? (
          <Pagination
            page={page}
            pageCount={pageCount}
            onChange={setPage}
            pt={{ base: "16px", xl: "24px" }}
          />
        ) : null}
      </Stack>
    </Section>
  );
}

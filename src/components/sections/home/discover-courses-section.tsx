import { SimpleGrid, Stack } from "@chakra-ui/react";

import { CourseCard } from "@/components/common";
import { Section, SectionHeading } from "@/components/ui";
import { courseTopics, featuredCourses } from "@/data/home";

import { TopicFilter } from "./topic-filter";

export function DiscoverCoursesSection() {
  return (
    <Section id="courses">
      <Stack gap={{ base: "40px", xl: "56px" }}>
        <SectionHeading
          title={
            <>
              Discover Your Passion,
              <br />
              Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <TopicFilter topics={courseTopics} visibleCount={17} />

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="gutter">
          {featuredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} priority={index < 3} />
          ))}
        </SimpleGrid>
      </Stack>
    </Section>
  );
}

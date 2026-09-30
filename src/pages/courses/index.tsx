import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { SiteFooter } from "@/components/layout";
import { CourseCollection, PageIntro } from "@/components/sections/catalog";
import { Seo } from "@/components/seo";
import { featuredCourses, learningPathCategories } from "@/data/home";

const description =
  "Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.";

export default function CoursesPage() {
  const { query } = useRouter();
  const requested = typeof query.category === "string" ? query.category : undefined;
  const category = learningPathCategories.find((entry) => entry.id === requested);

  return (
    <>
      <Seo title="Courses" description={description} />

      <Box as="main">
        <PageIntro title="Courses" description={description} />
        <CourseCollection courses={featuredCourses} activeCategory={category?.label} />
      </Box>

      <SiteFooter />
    </>
  );
}

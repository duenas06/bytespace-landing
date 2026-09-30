import { Box } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps } from "next";

import { GridBackdrop } from "@/components/common";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { Seo } from "@/components/seo";
import { CourseCollection } from "@/components/sections/catalog";
import { CreatorHero } from "@/components/sections/creator";
import { creators, getCreator } from "@/data/creators";
import { featuredCourses } from "@/data/home";
import type { Course, Creator } from "@/types/content";

type CreatorPageProps = {
  creator: Creator;
  courses: Course[];
};

export default function CreatorPage({ creator, courses }: CreatorPageProps) {
  return (
    <>
      <Seo title={creator.name} description={creator.tagline} />

      <Box as="main">
        <Box position="relative" bg="brand.800" overflow="hidden">
          <GridBackdrop />
          <Box position="relative" zIndex={1}>
            <SiteHeader />
            <CreatorHero creator={creator} />
          </Box>
        </Box>

        <CourseCollection courses={courses} />
      </Box>

      <SiteFooter />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: creators.map((creator) => ({ params: { slug: creator.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<CreatorPageProps> = ({ params }) => {
  const creator = getCreator(String(params?.slug));

  if (!creator) {
    return { notFound: true };
  }

  const courses = creator.courseIds
    .map((id) => featuredCourses.find((course) => course.id === id))
    .filter((course): course is Course => Boolean(course));

  return { props: { creator, courses } };
};

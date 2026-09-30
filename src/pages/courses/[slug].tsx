import { Box, Grid, Stack } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { GridBackdrop } from "@/components/common";
import { SiteFooter, SiteHeader } from "@/components/layout";
import { Seo } from "@/components/seo";
import {
  CourseAbout,
  CourseIntro,
  CourseLessons,
  CoursePlayer,
  CourseReviews,
  CourseSidebar,
  CourseTabs,
  isCourseTab,
  type CourseTabId,
} from "@/components/sections/course";
import { Container } from "@/components/ui";
import { courseDetails, getCourseDetail } from "@/data/courses";
import { getCreator } from "@/data/creators";
import type { CourseDetail, Creator } from "@/types/content";

type CoursePageProps = {
  course: CourseDetail;
  creator: Creator;
};

export default function CoursePage({ course, creator }: CoursePageProps) {
  const { query } = useRouter();
  const activeTab: CourseTabId = isCourseTab(query.tab) ? query.tab : "about";

  return (
    <>
      <Seo title={course.title} description={course.subtitle} />

      <Box as="main" overflowX="clip">
        <Container>
          <Grid
            templateColumns={{ base: "minmax(0, 1fr)", lg: "minmax(0, 1fr) 411px" }}
            columnGap={{ lg: "64px" }}
            rowGap={{ base: "32px", lg: "0" }}
            alignItems="start"
          >
            <Box
              gridColumn="1 / -1"
              gridRow={{ lg: "1 / 4" }}
              alignSelf="stretch"
              position="relative"
              pointerEvents="none"
            >
              <Box
                position="absolute"
                top="0"
                bottom="0"
                left={{ base: "-20px", md: "-40px", xl: "-120px" }}
                right={{ base: "-20px", md: "-40px", xl: "-120px" }}
                bg="brand.800"
                overflow="hidden"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: "-100vw",
                  right: "-100vw",
                  bg: "brand.800",
                }}
              >
                <GridBackdrop />
              </Box>
            </Box>

            <Box gridColumn="1 / -1" gridRow={{ lg: "1" }} position="relative">
              <SiteHeader withContainer={false} />
            </Box>

            <Box gridColumn="1 / -1" gridRow={{ lg: "2" }} position="relative">
              <CourseIntro course={course} creator={creator} />
            </Box>

            <Box
              gridColumn={{ lg: "1" }}
              gridRow={{ lg: "3" }}
              position="relative"
              pt={{ base: "32px", lg: "56px" }}
              pb={{ base: "0", lg: "64px" }}
            >
              <CoursePlayer course={course} />
            </Box>

            <Box
              gridColumn={{ lg: "2" }}
              gridRow={{ lg: "3 / span 2" }}
              position="relative"
              pt={{ base: "0", lg: "56px" }}
            >
              <CourseSidebar course={course} creator={creator} />
            </Box>

            <Box
              gridColumn={{ lg: "1" }}
              gridRow={{ lg: "4" }}
              position="relative"
              pt={{ base: "40px", lg: "64px" }}
              pb={{ base: "56px", lg: "96px" }}
            >
              <Stack gap="40px">
                <CourseTabs slug={course.slug} activeTab={activeTab} />
                {activeTab === "about" ? <CourseAbout course={course} /> : null}
                {activeTab === "lessons" ? <CourseLessons course={course} /> : null}
                {activeTab === "reviews" ? <CourseReviews course={course} /> : null}
              </Stack>
            </Box>
          </Grid>
        </Container>
      </Box>

      <SiteFooter />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = () => ({
  paths: courseDetails.map((course) => ({ params: { slug: course.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<CoursePageProps> = ({ params }) => {
  const course = getCourseDetail(String(params?.slug));
  const creator = course ? getCreator(course.creatorSlug) : undefined;

  if (!course || !creator) {
    return { notFound: true };
  }

  return { props: { course, creator } };
};

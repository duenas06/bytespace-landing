import { Box, Center, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

import { ReviewCard, StarRating } from "@/components/common";
import { Pill } from "@/components/ui";
import type { CourseDetail } from "@/types/content";

const ratingFilters = [5, 4, 3, 2, 1];

export function CourseReviews({ course }: { course: CourseDetail }) {
  const [activeFilter, setActiveFilter] = useState<number | null>(null);
  const totalRatings = course.ratingBreakdown.reduce((sum, entry) => sum + entry.count, 0);

  const visibleReviews =
    activeFilter === null
      ? course.reviews
      : course.reviews.filter((review) => review.rating === activeFilter);

  return (
    <Stack gap="32px">
      <Stack gap="20px">
        <Heading as="h2" textStyle="heading.xs">
          {course.reviewsIntro.title}
        </Heading>
        <Text textStyle="body.m" color="fg.muted">
          {course.reviewsIntro.description}
        </Text>
      </Stack>

      <Stack
        layerStyle="surface.card"
        p={{ base: "20px", md: "40px" }}
        direction={{ base: "column", md: "row" }}
        gap={{ base: "24px", md: "40px" }}
        align={{ md: "center" }}
      >
        <Center
          flexDirection="column"
          bg="accent.500"
          borderRadius="media"
          w={{ base: "full", md: "128px" }}
          minH="145px"
          gap="4px"
          flexShrink={0}
        >
          <Text textStyle="body.s">Ratings</Text>
          <Text fontFamily="heading" fontWeight="semibold" fontSize="36px" lineHeight="1.2">
            {course.ratingAverage}
          </Text>
        </Center>

        <Stack gap="10px" flex="1">
          {course.ratingBreakdown.map((entry) => (
            <HStack key={entry.stars} gap="16px">
              <Box flex="1" h="8px" borderRadius="pill" bg="ink.100" overflow="hidden" minW="120px">
                <Box
                  h="full"
                  w={`${totalRatings === 0 ? 0 : (entry.count / totalRatings) * 100}%`}
                  bg="accent.500"
                  borderRadius="pill"
                />
              </Box>
              <StarRating value={5} size="16px" flexShrink={0} />
              <Text textStyle="body.s" color="fg.muted" w="44px" textAlign="right" flexShrink={0}>
                {entry.count}
              </Text>
            </HStack>
          ))}
        </Stack>
      </Stack>

      <Stack gap="20px">
        <Heading as="h3" textStyle="heading.xs">
          Individual Reviews:
        </Heading>

        <HStack gap="12px" flexWrap="wrap">
          <Pill
            asChild
            scale="md"
            interactive
            tone={activeFilter === null ? "accent" : "subtle"}
            color="fg"
          >
            <button type="button" onClick={() => setActiveFilter(null)}>
              All rating
            </button>
          </Pill>
          {ratingFilters.map((stars) => (
            <Pill
              key={stars}
              asChild
              scale="md"
              interactive
              tone={activeFilter === stars ? "accent" : "subtle"}
              color="fg"
            >
              <button type="button" onClick={() => setActiveFilter(stars)}>
                <StarRating value={1} total={1} size="14px" />
                {stars}
              </button>
            </Pill>
          ))}
        </HStack>
      </Stack>

      <Stack gap="24px">
        {visibleReviews.length === 0 ? (
          <Text textStyle="body.m" color="fg.muted">
            No reviews with this rating yet.
          </Text>
        ) : (
          visibleReviews.map((review) => <ReviewCard key={review.id} review={review} />)
        )}
      </Stack>
    </Stack>
  );
}

import { Box, HStack, Stack, Text, type StackProps } from "@chakra-ui/react";
import Image from "next/image";

import type { Review } from "@/types/content";

import { StarRating } from "./star-rating";

type ReviewCardProps = StackProps & {
  review: Review;
};

export function ReviewCard({ review, ...rest }: ReviewCardProps) {
  return (
    <Stack
      layerStyle="surface.card"
      borderRadius="card"
      p={{ base: "20px", md: "32px" }}
      gap="20px"
      {...rest}
    >
      <HStack justify="space-between" align="flex-start" gap="16px">
        <HStack gap="16px">
          <Box position="relative" boxSize="48px" borderRadius="full" overflow="hidden">
            <Image
              src={review.avatar}
              alt={review.name}
              fill
              sizes="48px"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Stack gap="2px">
            <Text textStyle="label.l">{review.name}</Text>
            <Text textStyle="body.s" color="fg.muted">
              {review.role}
            </Text>
          </Stack>
        </HStack>
        <Text textStyle="body.s" color="fg.muted" flexShrink={0}>
          {review.postedAt}
        </Text>
      </HStack>

      <StarRating value={review.rating} />

      <Text textStyle="body.m" color="fg.muted">
        {review.body}
      </Text>
    </Stack>
  );
}

import { Box, Stack, Text, type StackProps } from "@chakra-ui/react";
import Image from "next/image";

import type { Testimonial } from "@/types/content";

type TestimonialCardProps = StackProps & {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial, ...rest }: TestimonialCardProps) {
  return (
    <Stack
      bg="bg"
      borderRadius="panel"
      p={{ base: "24px", md: "32px" }}
      gap="24px"
      boxShadow="card"
      {...rest}
    >
      <Box position="relative" boxSize="72px" borderRadius="full" overflow="hidden">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          fill
          sizes="72px"
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Stack gap="4px">
        <Text textStyle="heading.xs">{testimonial.name}</Text>
        <Text textStyle="body.m" color="fg.brand">
          {testimonial.role}
        </Text>
      </Stack>

      <Text textStyle="body.m" color="fg.muted">
        {`"${testimonial.quote}"`}
      </Text>
    </Stack>
  );
}

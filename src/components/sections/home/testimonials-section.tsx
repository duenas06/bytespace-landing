import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import { TestimonialCard } from "@/components/common";
import { Container } from "@/components/ui";
import { testimonials } from "@/data/home";

export function TestimonialsSection() {
  return (
    <Box as="section" bgGradient="surface-glow" overflow="hidden">
      <Container py={{ base: "64px", xl: "104px" }}>
        <Stack gap={{ base: "40px", xl: "64px" }}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: "24px", xl: "80px" }}>
            <Heading as="h2" textStyle="heading.m" maxW="480px">
              Discover What Our Community Is Saying
            </Heading>
            <Text textStyle="body.l" color="fg.muted">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what
              we do. Hear directly from those who have experienced the transformative journey of
              learning and creating on our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </Text>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 3 }} gap="gutter" alignItems="flex-start">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}

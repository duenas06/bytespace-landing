import { SimpleGrid, Stack } from "@chakra-ui/react";

import { CategoryCard } from "@/components/common";
import { Section, SectionHeading } from "@/components/ui";
import { learningPathCategories } from "@/data/home";

export function LearningPathsSection() {
  return (
    <Section>
      <Stack gap={{ base: "40px", xl: "56px" }}>
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} gap="gutter">
          {learningPathCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              href={`/courses?category=${category.id}`}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Section>
  );
}

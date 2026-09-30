import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { SiteFooter } from "@/components/layout";
import { CourseCollection, SearchHero } from "@/components/sections/catalog";
import { Seo } from "@/components/seo";
import { catalogTopics, searchResults } from "@/data/catalog";
import { learningPathCategories } from "@/data/home";

const description =
  "Search hundreds of ByteSpace courses across design, development, business and more.";

export default function CoursesPage() {
  const { query } = useRouter();
  const requested = typeof query.category === "string" ? query.category : undefined;
  const category = learningPathCategories.find((entry) => entry.id === requested);

  return (
    <>
      <Seo title="Find Your Next Course" description={description} />

      <Box as="main">
        <SearchHero title="Find Your Next Course" scopeLabel="Courses" />
        <CourseCollection
          courses={searchResults}
          activeCategory={category?.label}
          topics={catalogTopics}
          perPage={18}
          pageCount={5}
        />
      </Box>

      <SiteFooter />
    </>
  );
}

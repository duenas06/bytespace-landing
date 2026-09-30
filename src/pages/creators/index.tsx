import { Box } from "@chakra-ui/react";

import { SiteFooter } from "@/components/layout";
import { CreatorCollection, PageIntro } from "@/components/sections/catalog";
import { Seo } from "@/components/seo";
import { creators } from "@/data/creators";

const description =
  "Meet the creators publishing on ByteSpace. Follow their work, browse their courses, and learn directly from the people building them.";

export default function CreatorsPage() {
  return (
    <>
      <Seo title="Creators" description={description} />

      <Box as="main">
        <PageIntro title="Creators" description={description} />
        <CreatorCollection creators={creators} />
      </Box>

      <SiteFooter />
    </>
  );
}

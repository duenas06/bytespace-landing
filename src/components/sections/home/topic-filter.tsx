import { Wrap } from "@chakra-ui/react";
import { useState } from "react";

import { Button, Pill } from "@/components/ui";

type TopicFilterProps = {
  topics: string[];
  visibleCount?: number;
};

export function TopicFilter({ topics, visibleCount = 18 }: TopicFilterProps) {
  const [activeTopic, setActiveTopic] = useState(topics[0]);
  const [showAll, setShowAll] = useState(false);

  const visibleTopics = showAll ? topics : topics.slice(0, visibleCount);
  const hasMore = topics.length > visibleCount;

  return (
    <Wrap justify="center" gapX="16px" gapY="16px" maxW="1160px" mx="auto">
      {visibleTopics.map((topic) => (
        <Pill
          key={topic}
          asChild
          scale="md"
          interactive
          tone={topic === activeTopic ? "accent" : "neutral"}
          _hover={topic === activeTopic ? undefined : { bg: "ink.200" }}
        >
          <button
            type="button"
            onClick={() => setActiveTopic(topic)}
            aria-pressed={topic === activeTopic}
          >
            {topic}
          </button>
        </Pill>
      ))}
      {hasMore && !showAll ? (
        <Button
          type="button"
          visual="ghostInk"
          scale="md"
          color="fg.brand"
          px="8px"
          _hover={{ bg: "transparent", color: "brand.900" }}
          onClick={() => setShowAll(true)}
        >
          + More
        </Button>
      ) : null}
    </Wrap>
  );
}

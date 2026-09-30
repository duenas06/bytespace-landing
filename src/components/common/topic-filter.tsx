import { Wrap, type WrapProps } from "@chakra-ui/react";
import { useState } from "react";

import { Button, Pill, type PillProps } from "@/components/ui";

type TopicFilterProps = Omit<WrapProps, "children"> & {
  topics: string[];
  visibleCount?: number;
  initialTopic?: string;
  tone?: "neutral" | "subtle";
  pillProps?: PillProps;
};

export function TopicFilter({
  topics,
  visibleCount = topics.length,
  initialTopic,
  tone = "neutral",
  pillProps,
  ...rest
}: TopicFilterProps) {
  const [activeTopic, setActiveTopic] = useState(initialTopic ?? topics[0]);
  const [showAll, setShowAll] = useState(false);

  const visibleTopics = showAll ? topics : topics.slice(0, visibleCount);
  const hasMore = topics.length > visibleCount;
  const hoverBg = tone === "neutral" ? "ink.200" : "ink.100";

  return (
    <Wrap columnGap="16px" rowGap="16px" {...rest}>
      {visibleTopics.map((topic) => (
        <Pill
          key={topic}
          asChild
          scale="md"
          interactive
          tone={topic === activeTopic ? "accent" : tone}
          color="fg"
          _hover={topic === activeTopic ? undefined : { bg: hoverBg }}
          {...pillProps}
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

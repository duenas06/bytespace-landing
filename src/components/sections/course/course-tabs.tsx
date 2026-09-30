import { HStack } from "@chakra-ui/react";
import NextLink from "next/link";

import { Pill } from "@/components/ui";

export const courseTabs = [
  { id: "about", label: "About" },
  { id: "lessons", label: "Lessons" },
  { id: "reviews", label: "Reviews" },
] as const;

export type CourseTabId = (typeof courseTabs)[number]["id"];

export function isCourseTab(value: unknown): value is CourseTabId {
  return courseTabs.some((tab) => tab.id === value);
}

type CourseTabsProps = {
  slug: string;
  activeTab: CourseTabId;
};

export function CourseTabs({ slug, activeTab }: CourseTabsProps) {
  return (
    <HStack as="nav" gap="16px" aria-label="Course sections">
      {courseTabs.map((tab) => (
        <Pill
          key={tab.id}
          asChild
          scale="md"
          interactive
          tone={tab.id === activeTab ? "accent" : "subtle"}
          color="fg"
          _hover={tab.id === activeTab ? undefined : { bg: "ink.100" }}
        >
          <NextLink
            href={tab.id === "about" ? `/courses/${slug}` : `/courses/${slug}?tab=${tab.id}`}
            scroll={false}
            aria-current={tab.id === activeTab ? "page" : undefined}
          >
            {tab.label}
          </NextLink>
        </Pill>
      ))}
    </HStack>
  );
}

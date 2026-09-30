import type { Course } from "@/types/content";

import { featuredCourses } from "./home";

export const catalogTopics = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const RESULT_PAGE_SIZE = 18;

export const searchResults: Course[] = Array.from(
  { length: RESULT_PAGE_SIZE },
  (_, index) => featuredCourses[index % featuredCourses.length],
);

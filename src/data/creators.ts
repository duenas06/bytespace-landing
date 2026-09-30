import type { Creator } from "@/types/content";

export const creators: Creator[] = [
  {
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    role: "Creator",
    tagline: "Passionate UI/UX, Web designer",
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    avatar: "/images/avatars/purepearl.png",
    portrait: "/images/avatars/purepearl-portrait.png",
    productCount: 3,
    followerCount: 12,
    courseIds: [
      "learn-figma",
      "digital-asset",
      "big-data",
      "balancing-productivity",
      "money-management",
      "startup-success",
    ],
  },
];

export function getCreator(slug: string) {
  return creators.find((creator) => creator.slug === slug);
}

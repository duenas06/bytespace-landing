export type Course = {
  id: string;
  title: string;
  creator: string;
  creatorHref: string;
  thumbnail: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  price: number;
  priceUnit: string;
  enrolledAvatars: string[];
  enrolledExtra: string;
};

export type Category = {
  id: string;
  label: string;
  icon: "design" | "development" | "software" | "business" | "marketing" | "photography";
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

export type Stat = {
  id: string;
  value: string;
  label: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type FooterColumn = {
  id: string;
  title: string;
  links: NavItem[];
};

export type Creator = {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  bio: string[];
  avatar: string;
  portrait: string;
  productCount: number;
  followerCount: number;
  courseIds: string[];
};

export type CurriculumEntry = {
  id: string;
  title: string;
  duration: string;
};

export type CourseModule = {
  id: string;
  title: string;
  description: string;
};

export type Review = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  postedAt: string;
  body: string;
};

export type RatingBreakdown = {
  stars: number;
  count: number;
};

export type CourseDetail = {
  slug: string;
  courseId: string;
  title: string;
  subtitle: string;
  creatorSlug: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  reviewCount: number;
  studentCount: number;
  poster: string;
  lessonCount: number;
  totalDuration: string;
  curriculum: CurriculumEntry[];
  moreLessons: string;
  enrolNote: string;
  price: number;
  priceUnit: string;
  includes: string[];
  description: string[];
  sneakPeek: string[];
  keyPoints: string[];
  modulesIntro: { title: string; description: string };
  modules: CourseModule[];
  lessonContent: { title: string; description: string };
  progress: { title: string; description: string; value: number };
  reviewsIntro: { title: string; description: string };
  ratingAverage: number;
  ratingBreakdown: RatingBreakdown[];
  reviews: Review[];
};

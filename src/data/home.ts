import type { Category, Course, Stat, Testimonial } from "@/types/content";

export const heroContent = {
  title: "Get Access to Hundreds Courses Available",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  searchPlaceholder: "Course, topic, creator",
  searchCta: "Search",
  highlight: { title: "UI/UX Design", meta: "200 Courses  •  1000+ Students" },
  progress: { title: "Learning Progress", value: 55 },
  students: { title: "Happy Students", rating: 4.5, count: 240, extra: "2K+" },
};

export const trustedByLogos = ["Rivulet", "Sparkline", "Voltage", "Nodal", "Spiral"];

export const courseTopics = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const enrolledAvatars = [
  "/images/avatars/student-1.png",
  "/images/avatars/student-2.png",
  "/images/avatars/student-3.png",
  "/images/avatars/student-4.png",
];

const baseCourse = {
  creator: "purepearl studio",
  creatorHref: "/creators/purepearl-studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  level: "Beginner",
  price: 25,
  priceUnit: "lifetime",
  enrolledAvatars,
  enrolledExtra: "26+",
} satisfies Omit<Course, "id" | "title" | "thumbnail">;

export const featuredCourses: Course[] = [
  {
    ...baseCourse,
    id: "learn-figma",
    title: "Learn Figma from Basic",
    thumbnail: "/images/courses/course-4.png",
  },
  {
    ...baseCourse,
    id: "digital-asset",
    title: "Build Digital Asset",
    thumbnail: "/images/courses/course-6.png",
  },
  {
    ...baseCourse,
    id: "big-data",
    title: "the Power of Big Data",
    thumbnail: "/images/courses/course-1.png",
  },
  {
    ...baseCourse,
    id: "balancing-productivity",
    title: "Balancing Productivity and Life",
    thumbnail: "/images/courses/course-3.png",
  },
  {
    ...baseCourse,
    id: "money-management",
    title: "Mastering Money Management",
    thumbnail: "/images/courses/course-5.png",
  },
  {
    ...baseCourse,
    id: "startup-success",
    title: "From Idea to Startup Success",
    thumbnail: "/images/courses/course-2.png",
  },
];

export const learningPathCategories: Category[] = [
  { id: "design", label: "Design", icon: "design" },
  { id: "development", label: "Development", icon: "development" },
  { id: "software", label: "IT & Software", icon: "software" },
  { id: "business", label: "Business", icon: "business" },
  { id: "marketing", label: "Marketing", icon: "marketing" },
  { id: "photography", label: "Photography", icon: "photography" },
];

export const growthStats: Stat[] = [
  { id: "students", value: "12K", label: "Students" },
  { id: "courses", value: "70+", label: "Courses" },
  { id: "creators", value: "16", label: "Creators" },
];

export const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const testimonials: Testimonial[] = [
  {
    id: "sarah",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/avatars/sarah.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    id: "james",
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/avatars/james.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    id: "alex",
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/avatars/alex.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const revenueCards = {
  total: { title: "Total Revenue", period: "July 1-28", value: "$120.29" },
  yearToDate: { title: "Year to Date", period: "2023", value: "$1,200.38", delta: "+12$" },
};

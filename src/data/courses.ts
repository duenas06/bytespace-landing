import type { CourseDetail } from "@/types/content";

export const courseDetails: CourseDetail[] = [
  {
    slug: "build-digital-asset",
    courseId: "digital-asset",
    title: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    creatorSlug: "purepearl-studio",
    level: "Intermediate",
    rating: 4.8,
    reviewCount: 172,
    studentCount: 199,
    poster: "/images/courses/lesson-poster.png",
    lessonCount: 112,
    totalDuration: "24 hours",
    curriculum: [
      { id: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
      { id: "02", title: "Design Principles for Impacts", duration: "21 mins" },
      { id: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
    ],
    moreLessons: "99 more videos",
    enrolNote: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
    price: 25,
    priceUnit: "lifetime",
    includes: [
      "Learning Resources",
      "Quality Lesson Videos",
      "Certificate of Completion",
      "Private Consultation",
    ],
    description: [
      'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
      "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
    ],
    sneakPeek: [
      "/images/preview/sneak-1.png",
      "/images/preview/sneak-2.png",
      "/images/preview/sneak-3.png",
      "/images/preview/sneak-4.png",
    ],
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio",
    ],
    modulesIntro: {
      title: "Explore the Modules",
      description:
        "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
    },
    modules: [
      {
        id: "module-1",
        title: "Module 1: Introduction to Digital Assets",
        description:
          "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
      },
      {
        id: "module-2",
        title: "Module 2: Design Principles for Impact",
        description:
          "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
      },
      {
        id: "module-4",
        title: "Module 4: User-Centric Design Strategies",
        description:
          "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
      },
      {
        id: "module-5",
        title: "Module 5: Interactive Media and Engagement",
        description:
          "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
      },
      {
        id: "module-6",
        title: "Module 6: Project Showcase and Critique",
        description:
          "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
      },
      {
        id: "module-7",
        title: "Module 7: Optimizing Digital Assets for Various Platforms",
        description:
          "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
      },
    ],
    lessonContent: {
      title: "Lesson Content",
      description:
        "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
    },
    progress: {
      title: "Lesson Progress Tracking",
      description:
        "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
      value: 55,
    },
    reviewsIntro: {
      title: "What Learners Are Saying",
      description:
        "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
    },
    ratingAverage: 4.7,
    ratingBreakdown: [
      { stars: 5, count: 720 },
      { stars: 4, count: 120 },
      { stars: 3, count: 21 },
      { stars: 2, count: 12 },
      { stars: 1, count: 16 },
    ],
    reviews: [
      {
        id: "purepearl",
        name: "PurePearl Studio",
        role: "UI/UX Designer",
        avatar: "/images/avatars/purepearl.png",
        rating: 5,
        postedAt: "a year ago",
        body: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
      },
      {
        id: "albert",
        name: "Albert Flores",
        role: "UI/UX Designer",
        avatar: "/images/avatars/albert.png",
        rating: 5,
        postedAt: "a year ago",
        body: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
      },
      {
        id: "cody",
        name: "Cody Fisher",
        role: "UI/UX Designer",
        avatar: "/images/avatars/cody.png",
        rating: 5,
        postedAt: "a year ago",
        body: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
      },
      {
        id: "brooklyn",
        name: "Brooklyn Simmons",
        role: "UI/UX Designer",
        avatar: "/images/avatars/brooklyn.png",
        rating: 5,
        postedAt: "a year ago",
        body: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
      },
    ],
  },
];

export function getCourseDetail(slug: string) {
  return courseDetails.find((course) => course.slug === slug);
}

export const courseSlugByCourseId: Record<string, string> = Object.fromEntries(
  courseDetails.map((course) => [course.courseId, course.slug]),
);

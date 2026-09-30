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

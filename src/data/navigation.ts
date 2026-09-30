import type { FooterColumn, NavItem } from "@/types/content";

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export const accountNav: NavItem[] = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/register" },
];

export const footerColumns: FooterColumn[] = [
  {
    id: "courses",
    title: "Featured Courses",
    links: [
      { label: "Featured Categories", href: "/courses" },
      { label: "Business", href: "/courses/business" },
      { label: "IT", href: "/courses/it" },
      { label: "Design", href: "/courses/design" },
    ],
  },
  {
    id: "topics",
    title: "Development",
    links: [
      { label: "Marketing", href: "/courses/marketing" },
      { label: "Photography", href: "/courses/photography" },
      { label: "Finance", href: "/courses/finance" },
      { label: "Sport", href: "/courses/sport" },
    ],
  },
  {
    id: "creators",
    title: "Become a Creator",
    links: [
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

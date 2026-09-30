import { Seo } from "@/components/seo";
import { SiteFooter } from "@/components/layout";
import {
  CreatorCtaSection,
  DiscoverCoursesSection,
  HeroSection,
  LearningPathsSection,
  PlatformShowcaseSection,
  TestimonialsSection,
  TrustedBySection,
} from "@/components/sections/home";

export default function HomePage() {
  return (
    <>
      <Seo />
      <main>
        <HeroSection />
        <TrustedBySection />
        <DiscoverCoursesSection />
        <LearningPathsSection />
        <PlatformShowcaseSection />
        <CreatorCtaSection />
        <TestimonialsSection />
      </main>
      <SiteFooter />
    </>
  );
}

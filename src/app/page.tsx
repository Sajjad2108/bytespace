import { Footer } from "@/components/layout/Footer";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { CreatorCTA } from "@/components/sections/CreatorCTA";
import { GrowthSection } from "@/components/sections/GrowthSection";
import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <LogoCloud />
        <CoursesSection />
        <CategoriesSection />
        <GrowthSection />
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

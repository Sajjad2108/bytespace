import type { ComponentType, SVGProps } from "react";
import { categories, type CategoryIcon } from "@/data/courses";
import {
  BusinessIcon,
  DesignIcon,
  DevelopmentIcon,
  LaptopIcon,
  MarketingIcon,
  PhotographyIcon,
} from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<CategoryIcon, ComponentType<SVGProps<SVGSVGElement>>> = {
  design: DesignIcon,
  development: DevelopmentIcon,
  it: LaptopIcon,
  business: BusinessIcon,
  marketing: MarketingIcon,
  photography: PhotographyIcon,
};

export function CategoriesSection() {
  return (
    <section className="container-page pb-20 pt-16 lg:pb-[120px] lg:pt-[72px]">
      <SectionHeading
        title="Explore Diverse Learning Paths at Bytespace"
        description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
      />

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-20 lg:grid-cols-6 lg:gap-10">
        {categories.map(({ label, icon }) => {
          const Icon = icons[icon];
          return (
            <li key={label}>
              <a
                href="#courses"
                className="flex h-[140px] flex-col items-center justify-center gap-4 rounded-[20px] border border-line bg-white transition hover:-translate-y-1 hover:shadow-card lg:h-[166px]"
              >
                <span className="grid h-[60px] w-[60px] place-items-center rounded-full bg-lime">
                  <Icon className="h-7 w-7 text-ink" />
                </span>
                <span className="text-base text-ink lg:text-lg">{label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

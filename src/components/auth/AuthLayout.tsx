import type { ReactNode } from "react";
import { Logo } from "@/components/ui/Logo";
import { AuthShowcase } from "./AuthShowcase";

type AuthLayoutProps = {
  tagline: string;
  description: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  footer: ReactNode;
  ringTop?: number;
};

/** Shared shell for the Login and Register screens: blue grid page, intro copy + collage, form card. */
export function AuthLayout({
  tagline,
  description,
  eyebrow,
  title,
  children,
  footer,
  ringTop,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-grid pb-16 pt-8 lg:pb-[120px] lg:pt-9">
      <div className="container-page">
        <Logo showText={false} className="mb-8 lg:mb-[53px]" />

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_580px] lg:gap-6">
          <section className="relative text-white lg:min-h-[783px] lg:pt-2.5">
            <h2 className="text-xl font-semibold lg:text-[22px]">{tagline}</h2>
            <p className="mt-3 max-w-[470px] text-base leading-relaxed text-white/85 lg:text-lg lg:leading-[1.7]">
              {description}
            </p>
            <AuthShowcase ringTop={ringTop} />
          </section>

          <section className="flex w-full flex-col rounded-3xl bg-white px-6 py-10 shadow-float sm:px-12 sm:py-[72px] xl:px-16 lg:min-h-[783px]">
            <p className="text-base text-primary">{eyebrow}</p>
            <h1 className="mt-1 font-display text-[32px] font-semibold leading-tight text-ink sm:text-5xl sm:leading-[1.15]">
              {title}
            </h1>
            <div className="mt-8 sm:mt-10">{children}</div>
            <p className="mt-10 pt-4 text-center text-base text-body lg:mt-auto">{footer}</p>
          </section>
        </div>
      </div>
    </main>
  );
}

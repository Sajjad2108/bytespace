import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "center",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} ${className}`}>
      <h2
        className={`font-display text-[28px] font-semibold leading-tight sm:text-4xl lg:text-[40px] lg:leading-[1.3] ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${centered ? "mx-auto max-w-[920px]" : ""} ${
            tone === "light" ? "text-white/85" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

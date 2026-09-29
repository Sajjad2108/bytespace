import Link from "next/link";
import type { ComponentProps } from "react";

const baseClass =
  "inline-flex h-12 items-center justify-center rounded-full bg-lime px-6 text-base font-medium text-ink transition-colors hover:bg-lime-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime";

export function Button({ className = "", ...props }: ComponentProps<"button">) {
  return <button className={`${baseClass} ${className}`} {...props} />;
}

export function ButtonLink({ className = "", ...props }: ComponentProps<typeof Link>) {
  return <Link className={`${baseClass} ${className}`} {...props} />;
}

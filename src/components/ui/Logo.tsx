import Link from "next/link";

type LogoProps = {
  tone?: "light" | "dark";
  showText?: boolean;
  className?: string;
};

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="var(--color-lime)"
        fillRule="evenodd"
        d="M3 4a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v6.2A11 11 0 1 1 3 20.5V4Zm10 9.5v11l8.5-5.5L13 13.5Z"
      />
    </svg>
  );
}

export function Logo({ tone = "light", showText = true, className = "" }: LogoProps) {
  return (
    <Link href="/" aria-label="ByteSpace home" className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark />
      {showText && (
        <span
          className={`font-display text-2xl font-bold tracking-tight ${
            tone === "light" ? "text-white" : "text-ink"
          }`}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}

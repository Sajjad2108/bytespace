import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function BagIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M5 8h14l-1 12H6L5 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.2l-5.6 3 1.1-6.3L2.9 9.5l6.3-.9L12 2.8Z" />
    </svg>
  );
}

export function LevelIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="4" y="13" width="3.2" height="7" rx="1" />
      <rect x="10.4" y="8.5" width="3.2" height="11.5" rx="1" />
      <rect x="16.8" y="4" width="3.2" height="16" rx="1" opacity=".35" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path
        d="m7.5 12.3 3 3 6-6.3"
        fill="none"
        stroke="#fff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...stroke} {...props}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

/* Category icons */

export function DesignIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3.3 5.4 5.4 3.3a1 1 0 0 1 1.4 0l3.7 3.7-3.5 3.5-3.7-3.7a1 1 0 0 1 0-1.4Z" />
      <path d="m13.5 17 3.5-3.5 3.7 3.7a1 1 0 0 1 0 1.4l-2.1 2.1a1 1 0 0 1-1.4 0L13.5 17Z" />
      <path d="M16.6 3.1a2 2 0 0 1 2.8 0l1.5 1.5a2 2 0 0 1 0 2.8L9.6 18.7 4 20l1.3-5.6L16.6 3.1Z" />
    </svg>
  );
}

export function DevelopmentIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="5" y="2" width="14" height="20" rx="3" fill="currentColor" />
      <path
        d="m10 9.5-2.2 2.5 2.2 2.5M14 9.5l2.2 2.5-2.2 2.5"
        stroke="var(--color-lime)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LaptopIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5 5.5A1.5 1.5 0 0 1 6.5 4h11A1.5 1.5 0 0 1 19 5.5V15H5V5.5Zm2 .5v7h10V6H7Z" />
      <path d="M2 16.5h20l-.6 1.6a1.5 1.5 0 0 1-1.4.9H4a1.5 1.5 0 0 1-1.4-.9L2 16.5Z" />
    </svg>
  );
}

export function BusinessIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M3 4.5A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V9h4.5a1.5 1.5 0 0 1 1.5 1.5V21H3V4.5ZM6 6h2v2H6V6Zm4 0h2v2h-2V6Zm-4 4h2v2H6v-2Zm4 0h2v2h-2v-2Zm-4 4h2v2H6v-2Zm4 0h2v2h-2v-2Zm6-2h2v2h-2v-2Zm0 4h2v2h-2v-2Z"
      />
    </svg>
  );
}

export function MarketingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.3 13.6 13.6 4.3l6.1 6.1-9.3 9.3a1.5 1.5 0 0 1-2.1 0l-4-4a1.5 1.5 0 0 1 0-2.1Z" />
      <circle cx="15.5" cy="15.5" r="2.3" />
      <path
        d="M16 4.5c1.8.3 3.2 1.7 3.5 3.5M16.3 1.8c3.1.4 5.5 2.8 5.9 5.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function PhotographyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm9 1.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.5 9.5c.4-2 2.2-3 4.5-3s4.1 1 4.5 3h-9Z"
      />
    </svg>
  );
}

/* Brand icons */

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2a10 10 0 0 0-1.6 19.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function GoogleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.4a4.6 4.6 0 0 1-2 3v2.5h3.2c1.9-1.8 3-4.4 3-7.4Z" />
      <path d="M12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6A10 10 0 0 0 12 22Z" />
      <path d="M6.4 14a6 6 0 0 1 0-3.9V7.4H3.1a10 10 0 0 0 0 9.1L6.4 14Z" />
      <path d="M12 6c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 3.1 7.4l3.3 2.6C7.2 7.8 9.4 6 12 6Z" />
    </svg>
  );
}

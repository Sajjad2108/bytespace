import type { ReactNode } from "react";

const BG = "#f4f4f4";

const marks: Record<string, ReactNode> = {
  waves: (
    <>
      <circle cx="16" cy="16" r="15" />
      <path
        d="M1 13c5-3 10 3 15 0s10 3 15 0M1 19c5-3 10 3 15 0s10 3 15 0"
        stroke={BG}
        strokeWidth="2.4"
        fill="none"
      />
    </>
  ),
  sunburst: (
    <g>
      {Array.from({ length: 12 }, (_, i) => (
        <rect key={i} x="14.5" y="1" width="3" height="9" rx="1.5" transform={`rotate(${i * 30} 16 16)`} />
      ))}
    </g>
  ),
  bolt: (
    <>
      <circle cx="16" cy="16" r="15" />
      <path d="M18 5 9 18h6l-2 9 9-13h-6l2-9Z" fill={BG} />
    </>
  ),
  flower: (
    <>
      <circle cx="16" cy="16" r="15" />
      <g fill={BG}>
        <circle cx="16" cy="9.5" r="4" />
        <circle cx="16" cy="22.5" r="4" />
        <circle cx="9.5" cy="16" r="4" />
        <circle cx="22.5" cy="16" r="4" />
      </g>
    </>
  ),
  ring: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="16" cy="16" r="14.5" />
      <circle cx="17" cy="16" r="10.5" />
      <circle cx="18" cy="16" r="6.5" />
      <circle cx="19" cy="16" r="2.5" />
    </g>
  ),
};

export function LogoCloud() {
  return (
    <section aria-label="Trusted by" className="bg-[#f4f4f4] py-12 lg:py-[72px]">
      <ul className="container-page flex max-w-[1140px] flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:justify-between">
        {Object.entries(marks).map(([name, mark]) => (
          <li key={name} className="flex items-center gap-2 text-[#8a8b8f]">
            <svg viewBox="0 0 32 32" fill="currentColor" className="h-8 w-8 lg:h-10 lg:w-10" aria-hidden="true">
              {mark}
            </svg>
            <span className="font-display text-lg font-semibold tracking-tight lg:text-[22px]">
              Logoipsum
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

import Image from "next/image";
import type { CSSProperties } from "react";

export type ShapeKind = "spring" | "spring-2" | "torus" | "cylinder" | "pyramid" | "cone";

type ShapeProps = {
  kind: ShapeKind;
  color: "lime" | "white";
  /** Positioning + width classes, e.g. "left-0 top-10 w-24 lg:w-48" (sources are square). */
  className?: string;
  rotate?: number;
  float?: boolean;
  style?: CSSProperties;
};

/** Decorative 3D shape used on the blue sections. */
export function Shape({ kind, color, className = "", rotate = 0, float = false, style }: ShapeProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute aspect-square select-none ${
        float ? "animate-float" : ""
      } ${className}`}
      style={style}
    >
      <Image
        src={`/images/shapes/${kind}-${color}.png`}
        alt=""
        fill
        sizes="(min-width: 1024px) 240px, 120px"
        className="object-contain drop-shadow-[0_18px_24px_rgba(0,0,40,0.25)]"
        style={rotate ? { rotate: `${rotate}deg` } : undefined}
      />
    </div>
  );
}

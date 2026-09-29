import Image from "next/image";
import { avatars } from "@/data/site";

type AvatarGroupProps = {
  count?: number;
  more: string;
  size?: "sm" | "md";
  moreTone?: "lime" | "dark";
  offset?: number;
};

const sizes = {
  sm: { img: "h-7 w-7", px: 28, badge: "h-7 min-w-7 text-[10px]" },
  md: { img: "h-9 w-9", px: 36, badge: "h-9 min-w-9 text-xs" },
};

export function AvatarGroup({
  count = 4,
  more,
  size = "sm",
  moreTone = "lime",
  offset = 0,
}: AvatarGroupProps) {
  const s = sizes[size];
  const list = Array.from({ length: count }, (_, i) => avatars[(i + offset) % avatars.length]);

  return (
    <div className="flex items-center -space-x-2">
      {list.map((src, i) => (
        <Image
          key={`${src}-${i}`}
          src={src}
          alt=""
          width={s.px}
          height={s.px}
          className={`${s.img} relative rounded-full border-2 border-white object-cover`}
        />
      ))}
      <span
        className={`${s.badge} relative grid place-items-center rounded-full border-2 border-white px-1 font-semibold ${
          moreTone === "lime" ? "bg-lime text-ink" : "bg-ink text-white"
        }`}
      >
        {more}
      </span>
    </div>
  );
}

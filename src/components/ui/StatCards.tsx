import { AvatarGroup } from "./AvatarGroup";
import { StarIcon } from "./Icons";

const floatCard = "rounded-2xl bg-white shadow-float";

/** Rating card with an avatar stack; the lime variant is used on the auth screens. */
export function HappyStudentsCard({
  tone = "white",
  className = "",
}: {
  tone?: "white" | "lime";
  className?: string;
}) {
  const lime = tone === "lime";
  return (
    <div
      className={`rounded-2xl p-3 shadow-float sm:p-4 ${lime ? "bg-lime" : "bg-white"} ${className}`}
    >
      <p className="text-sm font-medium text-ink sm:text-base">Happy Students</p>
      <p className={`mt-0.5 flex items-center gap-1 text-xs ${lime ? "text-ink/70" : "text-muted"}`}>
        <span className="text-ink">4.5</span> (240)
        <StarIcon className={`h-3.5 w-3.5 ${lime ? "text-primary" : "text-[#f5c518]"}`} />
      </p>
      <div className="mt-2 sm:mt-3">
        <AvatarGroup count={6} more="2K+" size="md" moreTone={lime ? "dark" : "lime"} />
      </div>
    </div>
  );
}

export function LearningProgressCard({
  value = 55,
  className = "",
}: {
  value?: number;
  className?: string;
}) {
  return (
    <div className={`${floatCard} p-3 sm:p-5 ${className}`}>
      <p className="text-xs text-ink sm:text-sm">Learning Progress</p>
      <p className="mt-1 font-display text-2xl font-semibold leading-none text-ink sm:mt-2 sm:text-[40px]">
        {value}%
      </p>
      <div className="mt-2 h-2 rounded-full bg-soft sm:mt-4 sm:h-2.5" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100} aria-label="Learning progress">
        <div className="h-full rounded-full bg-lime" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function TopicCard({ className = "" }: { className?: string }) {
  return (
    <div className={`${floatCard} px-4 py-3 ${className}`}>
      <p className="text-sm font-medium text-ink sm:text-base">UI/UX Design</p>
      <p className="mt-0.5 text-[11px] text-muted sm:text-xs">
        200 Courses <span className="mx-1">•</span> 1000+ Students
      </p>
    </div>
  );
}

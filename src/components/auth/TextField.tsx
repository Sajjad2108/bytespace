import type { ComponentProps } from "react";

type TextFieldProps = ComponentProps<"input"> & { label: string };

export function TextField({ label, id, className = "", ...props }: TextFieldProps) {
  const inputId = id ?? props.name;
  return (
    <div className={className}>
      <label htmlFor={inputId} className="block text-base font-medium text-ink">
        {label}
      </label>
      <input
        id={inputId}
        className="mt-2 h-[52px] w-full rounded-xl border border-field bg-white px-4 text-base text-ink outline-none transition-colors placeholder:text-[#a3a5aa] focus:border-primary focus:ring-2 focus:ring-primary/15"
        {...props}
      />
    </div>
  );
}

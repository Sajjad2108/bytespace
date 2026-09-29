"use client";

import { Button } from "@/components/ui/Button";
import { FacebookIcon, GoogleIcon } from "@/components/ui/Icons";
import { TextField } from "./TextField";

const socials = [
  { label: "Continue with Facebook", Icon: FacebookIcon },
  { label: "Continue with Google", Icon: GoogleIcon },
];

// TODO: connect to the auth API once the backend is available.
export function LoginForm() {
  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="designer@example.com"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="********"
        />
        <Button type="submit" className="mt-1 self-end px-7">
          Sign In
        </Button>
      </form>

      <div className="mt-10 flex items-center gap-4 text-sm text-muted">
        <span className="h-px flex-1 bg-line" />
        or
        <span className="h-px flex-1 bg-line" />
      </div>

      <div className="mt-8 flex justify-center gap-4">
        {socials.map(({ label, Icon }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            className="grid h-[72px] w-[72px] place-items-center rounded-full border border-line text-ink transition-colors hover:border-primary hover:text-primary"
          >
            <Icon className="h-8 w-8" />
          </button>
        ))}
      </div>
    </>
  );
}

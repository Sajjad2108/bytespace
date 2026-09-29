"use client";

import { Button } from "@/components/ui/Button";
import { TextField } from "./TextField";

// TODO: connect to the auth API once the backend is available.
export function RegisterForm() {
  return (
    <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
      <TextField label="Full Name" name="fullName" autoComplete="name" placeholder="Jamie Davis" />
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
        autoComplete="new-password"
        placeholder="********"
      />
      <Button type="submit" className="mt-1 self-end px-7">
        Continue
      </Button>
    </form>
  );
}

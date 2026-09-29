"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <form
      className="mt-8 flex max-w-[500px] items-center gap-3 sm:gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubscribed(true);
      }}
    >
      <label className="flex-1">
        <span className="sr-only">Email address</span>
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="h-[50px] w-full rounded-full border border-field bg-white px-6 text-base text-ink outline-none placeholder:text-muted focus:border-primary"
        />
      </label>
      <Button type="submit" className="h-[46px] px-7">
        {subscribed ? "Done!" : "Search"}
      </Button>
    </form>
  );
}

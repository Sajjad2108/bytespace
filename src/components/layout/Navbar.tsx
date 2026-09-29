"use client";

import Link from "next/link";
import { useState } from "react";
import { authLinks, navLinks } from "@/data/site";
import { BagIcon, CloseIcon, MenuIcon } from "@/components/ui/Icons";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30">
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-base transition-colors hover:text-lime ${
                  i === 0 ? "font-medium text-white" : "text-white/85"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 md:flex">
          <Link href={authLinks.signIn} className="text-white/85 transition-colors hover:text-lime">
            Sign In
          </Link>
          <Link href={authLinks.joinUs} className="text-white/85 transition-colors hover:text-lime">
            Join Us
          </Link>
          <button type="button" aria-label="Cart" className="text-white transition-colors hover:text-lime">
            <BagIcon className="h-6 w-6" />
          </button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="container-page md:hidden">
          <div className="rounded-2xl bg-white p-4 shadow-float">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 font-medium text-ink hover:bg-soft"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-line pt-4">
              <Link
                href={authLinks.signIn}
                className="grid h-11 place-items-center rounded-full border border-field font-medium text-ink"
              >
                Sign In
              </Link>
              <Link
                href={authLinks.joinUs}
                className="grid h-11 place-items-center rounded-full bg-lime font-medium text-ink"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

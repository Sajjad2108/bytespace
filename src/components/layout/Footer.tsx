import Link from "next/link";
import { footerLinks, legalLinks } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white pt-16 lg:pt-20">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[500px_1fr] lg:gap-20">
          <div>
            <Logo tone="dark" />
            <p className="mt-4 text-sm text-body">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <NewsletterForm />
            <p className="mt-6 max-w-[470px] text-xs leading-relaxed text-body">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:pl-5">
            {footerLinks.map((column, i) => (
              <ul key={i} className="space-y-4">
                {column.map((link) => (
                  <li key={link}>
                    <Link href="/" className="text-sm text-body transition-colors hover:text-primary">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line py-6 text-xs text-body sm:flex-row sm:items-center sm:justify-between lg:mt-[72px] lg:pb-14">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link}>
                <Link href="/" className="transition-colors hover:text-primary">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

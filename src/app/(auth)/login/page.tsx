import type { Metadata } from "next";
import Link from "next/link";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { authLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Sign In — ByteSpace",
};

export default function LoginPage() {
  return (
    <AuthLayout
      tagline="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
      eyebrow="Sign In"
      title="Welcome Back"
      ringTop={81}
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link href={authLinks.joinUs} className="text-primary hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthLayout>
  );
}

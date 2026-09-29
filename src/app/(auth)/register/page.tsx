import type { Metadata } from "next";
import Link from "next/link";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { authLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Create an Account — ByteSpace",
};

export default function RegisterPage() {
  return (
    <AuthLayout
      tagline="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      eyebrow="Create an Account"
      title={
        <>
          Welcome to <br />
          ByteSpace
        </>
      }
      footer={
        <>
          Already have an account?{" "}
          <Link href={authLinks.signIn} className="text-primary hover:underline">
            Login
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthLayout>
  );
}

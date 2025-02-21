import { auth } from "@/auth";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sign Up | BookWise",
  description:
    "BookWise is a book borrowing university library management solution.. Please complete all fields and upload a valid university ID to gain access.",
  openGraph: {
    title: "Sign Up | BookWise",
    description:
      "BookWise is a book borrowing university library management solution.. Please complete all fields and upload a valid university ID to gain access.",
    url: "/sign-up",
    type: "website",
  },
};

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (session) redirect("/");
  return (
    <main className="auth-container">
      <section className="auth-form">
        <div className="auth-box">
          <div className="flex flex-row gap-2">
            <Image src="/icons/logo.svg" alt="logo" width={37} height={37} />
            <h1 className="text-2xl font-semibold text-white">BookWise</h1>
          </div>

          <div>{children}</div>
        </div>
      </section>

      <section className="auth-illustration">
        <Image
          src="/images/auth-illustration.png"
          alt="auth illustration"
          width={1000}
          height={1000}
          className="size-full object-cover"
        />
      </section>
    </main>
  );
};

export default Layout;

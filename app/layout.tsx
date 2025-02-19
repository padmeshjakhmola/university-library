import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Analytics } from "@vercel/analytics/next";

const ibmPlexSans = localFont({
  src: [
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
});

const bebasNeue = localFont({
  src: [
    { path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--bebas-neue",
});

export const metadata: Metadata = {
  title: "BookWise",
  description:
    "BookWise is a book borrowing university library management solution.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Library",
  name: "BookWise",
  url: "https://universitylibrary.store",
  description:
    "BookWise is a book borrowing university library management solution.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
        <head>
          {process.env.NODE_ENV === "development" && (
            <script
              src="https://unpkg.com/react-scan/dist/auto.global.js"
              async
            />
          )}
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
          <title>BookWise | Digital Library Management</title>
          <meta
            name="description"
            content="Manage your university's digital library with ease."
          />
          <meta
            name="keywords"
            content="university, library, books, digital library, library management, BookWise, bookwise"
          />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="University Library" />
          <meta
            property="og:description"
            content="The best platform for library management."
          />
          <meta property="og:url" content="https://universitylibrary.store" />
        </head>
        <body
          className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
        >
          {children}
          <Analytics />
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}

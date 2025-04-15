import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "News",
  description: "Discover engaging stories, tutorials, and insights on Blogger.",
  openGraph: {
    title: "News - Explore Country News",
    description:
      "Read engaging News on technology, lifestyle, startups, and more!",
    images: [
      {
        url: "/images/blog.jpg",
        width: 1200,
        height: 630,
        alt: "Blogger Hero Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News",
    description: "Explore engaging News on various topics with Blogger.",
    images: ["/blog-thumbnail.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-200 transition-colors duration-300`}
      >
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-lg p-5 flex justify-between items-center">
          <Link
            href="/"
            className="text-3xl font-extrabold text-white tracking-wide"
          >
            📰 News
          </Link>
          <nav className="space-x-6">
            <Link
              href="/"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/About"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              About
            </Link>
            <Link
              href="/Contact"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Contact
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-10">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-6 text-center border-t-4 border-blue-500">
          <p className="text-sm">
            © {new Date().getFullYear()} News. All Rights Reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}

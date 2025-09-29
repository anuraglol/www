import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anurag | Web Engineer",
  description:
    "Anurag Kumar, undergraduate at NIT Durgapur studying Biotechnology, with 4+ years of experience in web engineering. Specializing in frontend development and building scalable Web3 applications.",
  keywords: [
    "Anurag Kumar",
    "Web Engineer",
    "Frontend Developer",
    "Web3",
    "NIT Durgapur",
    "Biotechnology",
    "Portfolio",
    "JavaScript",
    "React",
    "Next.js",
    "CandyPay",
  ],
  authors: [{ name: "Anurag", url: "https://anurag.tech" }],
  creator: "Anurag",
  openGraph: {
    title: "Anurag | Web Engineer",
    description:
      "Undergraduate at NIT Durgapur with 4+ years of web engineering experience. Focused on frontend development and Web3 projects.",
    url: "https://anurag.tech",
    siteName: "Anurag Kumar Portfolio",
    images: [
      {
        url: "/bg.webp",
        width: 1536,
        height: 1024,
        alt: "Anurag's Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anurag | Web Engineer",
    description:
      "Frontend-focused web engineer & Web3 enthusiast. Undergraduate at NIT Durgapur.",
    images: ["/bg.webp"],
    creator: "@imanuraglol",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}

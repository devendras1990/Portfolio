import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
  title: "Devendra Singh Bisht - Portfolio",
  description: "Welcome to the portfolio of Devendra Singh Bisht. Explore my work in web design, frontend development, ReactJS, NextJS, and Figma.",
  publisher: "Devendra Singh Bisht",
  keywords: "Devendra Singh Bisht, portfolio, web design, frontend development, ReactJS, NextJS, Figma",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {2
  return (
    <html lang="en" className="dark">
      
      <body className={inter.className} suppressHydrationWarning={true}>
      <Header />
        {children}
        <SpeedInsights />
        </body>
    </html>
  );
}

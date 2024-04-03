import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Factcheck",
  description: "Uses LLM artifical intelligence to factcheck news articles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

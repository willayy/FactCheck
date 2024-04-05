import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/page";
import Navbar from "@/components/navbar/page";
import Layout from "@/components/layout/page";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Factcheck",
  description: "Website for fact checking news articles",
};

export default function RootLayout({
  children, // will be a page or nested layout
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Layout>
      <Navbar />
        <Suspense fallback = {<Loading />}>
            {children}
        </Suspense>
      <Footer />
    </Layout>  
  );
}

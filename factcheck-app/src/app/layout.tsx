import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Loading from "./loading";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navBar/navBar";
import Layout from "@/components/layout/layout";
import NestedRouteError from "./error";
import "./globals.css";

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
          <ErrorBoundary errorComponent = {NestedRouteError}>
            {children}
          </ErrorBoundary>
        </Suspense>
      <Footer />
    </Layout>  
  );
}

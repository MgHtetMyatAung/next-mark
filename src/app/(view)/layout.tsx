import { Footer, Header } from "@/components/layouts";
import React from "react";

export default function ViewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className=" min-h-[calc(100vh-180px)] max-w-[1200px] mx-auto">
        {children}
      </main>
      <Footer />
    </>
  );
}

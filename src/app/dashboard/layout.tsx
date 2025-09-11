import { DashboardHeader, DashboardSideBar } from "@/components/layouts";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" flex h-screen">
      <div className=" w-[200px]">
        <DashboardSideBar />
      </div>
      <div className=" grow">
        <DashboardHeader />
        <section>
          <div className=" p-5">{children}</div>
        </section>
      </div>
    </main>
  );
}

import { ProductLists } from "@/components/pages/products";
import { AppConfigData } from "@/constants/app.data";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: AppConfigData.title + " | Products",
  description: "View all products",
};

export default function ProductsPage() {
  return (
    <div>
      <ProductLists />
    </div>
  );
}

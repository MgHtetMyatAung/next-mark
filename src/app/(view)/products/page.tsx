import { ProductLists } from "@/components/pages/products";
import { AppConfigData } from "@/constants/app.data";
import { productApi } from "@/services/endpoints/product";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: AppConfigData.title + " | Products",
  description: "View all products",
};

const queryClient = new QueryClient();

// Prefetch data on the server
await queryClient.prefetchQuery({
  queryKey: ["products"],
  queryFn: productApi.getAllProducts,
  staleTime: 1000 * 60 * 30,
});

const dehydratedState = dehydrate(queryClient);

export default function ProductsPage() {
  return (
    <div>
      <HydrationBoundary state={dehydratedState}>
        <ProductLists />
      </HydrationBoundary>
    </div>
  );
}

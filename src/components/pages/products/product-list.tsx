"use client";
import { useGetProducts } from "@/services/endpoints/product/queries";
import { notFound } from "next/navigation";
import React from "react";
import ProductCart from "./product-cart";

export default function ProductLists() {
  const { data: products, isLoading, isError } = useGetProducts();
  if (isLoading) {
    return <p>Loading ...</p>;
  }
  if (isError) {
    notFound();
  }
  return (
    <div className=" px-5 sm:px-7 lg:px-0 max-w-[1200px] mx-auto py-10 space-y-5">
      <div>
        <h3>All Products</h3>
        <p>Count: {products?.length}</p>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
        {products?.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

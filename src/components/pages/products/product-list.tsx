"use client";
import { useGetProducts } from "@/services/endpoints/product/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

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
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {products?.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className=" space-y-3"
          >
            <div className=" group overflow-hidden border border-gray-400">
              <Image
                src={product.images[0].url}
                width={300}
                height={300}
                alt={product.title}
                className=" group-hover:scale-105 transition-all duration-300 mx-auto "
              />
            </div>
            <div className=" space-y-1">
              <h4>{product.title}</h4>
              <p className=" text-blue-800">{product.price} MMK</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

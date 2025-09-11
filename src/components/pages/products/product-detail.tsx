"use client";

import { AppConfigData } from "@/constants/app.data";
import { productApi } from "@/services/endpoints/product";
import { useGetProductById } from "@/services/endpoints/product/queries";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProductDetail({ productId }: { productId: string }) {
  const { data: product, isLoading, isError } = useGetProductById(productId);
  if (isLoading) {
    return (
      <div className=" py-10">
        <div className=" flex flex-col lg:flex-row gap-5">
          <div className=" w-full lg:w-[350px] h-[350px] bg-gray-200"></div>
          <div className=" grow space-y-2 h-[100px] bg-gray-200"></div>
        </div>
        <div></div>
      </div>
    );
  }
  if (!product) notFound();
  return (
    <div className=" py-10">
      <div className=" flex flex-col lg:flex-row gap-5">
        <div className=" w-full lg:w-[400px] xl:w-[500px]">
          <Image
            src={product?.images[0]?.url || ""}
            alt={product?.title || ""}
            width={500}
            height={500}
            className=" w-full h-auto"
          />
        </div>
        <div className=" space-y-2">
          <h3>{product?.title}</h3>
          <p className=" text-gray-600">{product?.description}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

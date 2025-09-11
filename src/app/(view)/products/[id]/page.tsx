import { ProductDetail } from "@/components/pages/products";
import { AppConfigData } from "@/constants/app.data";
import { productApi } from "@/services/endpoints/product";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  try {
    const { id } = await params;
    const product = await productApi.getProductById(id);
    if (!product) notFound();

    return {
      title: product.title,
      description: product.description,
      openGraph: {
        type: "website",
        url: "https://example.com",
        title: product.title,
        description: product.description,
        siteName: AppConfigData.title,
        images: [{ url: product.images[0].url }],
      },
    };
  } catch (error) {
    return {
      title: "Product not found",
    };
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <ProductDetail productId={id} />
    </div>
  );
}

"use client";

import { useGetProducts } from "@/services/endpoints/product/queries";
import { ProductCart } from "../products";

export default function FeatureProductsSection() {
  const { data: products, isLoading } = useGetProducts();
  const featureProducts = products?.filter(
    (product) => product.is_feature === true
  );
  if (!featureProducts) return null;
  return (
    <div className=" bg-gray-100">
      <div className=" px-5 sm:px-7 lg:px-0 max-w-[1200px] mx-auto py-10 space-y-5">
        <h3 className=" font-medium">Feature Products</h3>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
          {featureProducts.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

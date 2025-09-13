"use client";

import { Button } from "@/components/common";
import { useGetProductById } from "@/services/endpoints/product/queries";
import { useAuthStore } from "@/store/store-auth";
import { useCartStore } from "@/store/store-cart";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProductDetail({ productId }: { productId: string }) {
  const { data: product, isLoading } = useGetProductById(productId, {});
  const { addItem } = useCartStore();
  const { isLoggedIn } = useAuthStore();

  const handleAddToCart = () => {
    if (product) {
      const item = {
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.images[0].url,
      };
      addItem(item);
    }
  };

  if (isLoading) {
    return (
      <div className=" px-5 sm:px-7 lg:px-0 max-w-[1200px] mx-auto py-10">
        <div className=" flex flex-col lg:flex-row gap-5">
          <div className=" w-full lg:w-[350px] h-[450px] bg-gray-200"></div>
          <div className=" grow space-y-2 h-[100px] bg-gray-200"></div>
        </div>
        <div></div>
      </div>
    );
  }
  if (!product) notFound();
  return (
    <div className="px-5 sm:px-7 lg:px-0 max-w-[1200px] mx-auto py-10">
      <div className=" flex flex-col lg:flex-row gap-5">
        <div className=" w-full lg:w-[400px] xl:w-[500px] min-h-[400px] border border-gray-400">
          <Image
            src={product?.images[0]?.url || ""}
            alt={product?.title || ""}
            width={500}
            height={500}
            className=" w-full h-auto"
            priority={true}
          />
        </div>
        <div className=" space-y-8">
          <div className=" space-y-3">
            <h3>{product?.title}</h3>
            <p className=" text-xl">{product.price} MMK</p>
            <p className=" text-gray-600">{product?.description}</p>
          </div>
          {isLoggedIn && (
            <div>
              <Button variant="contained" onClick={handleAddToCart}>
                Add to Cart
              </Button>
            </div>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}

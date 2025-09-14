"use client";

import { Button } from "@/components/common";
import { useGetProductById } from "@/services/endpoints/product/queries";
import { useAuthStore } from "@/store/store-auth";
import { useCartStore } from "@/store/store-cart";
import Image from "next/image";
import { notFound } from "next/navigation";
import toast from "react-hot-toast";

export default function ProductDetail({ productId }: { productId: string }) {
  const { data: product, isLoading } = useGetProductById(productId, {});
  const { addItem } = useCartStore();
  const { isLoggedIn } = useAuthStore();

  const addAlert = (product: { name: string; price: number; img: string }) => {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-custom-enter" : "animate-custom-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex border-2 border-green-600`}
        >
          <div className="flex-1 w-0 p-4 space-y-1">
            <div>
              <p className=" text-xs p-3 rounded-lg bg-green-100 text-green-700 font-semibold">
                This item successfully added to your cart !
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <Image
                  className="h-auto w-10 rounded-md"
                  src={product.img}
                  alt={product.name}
                  width={40}
                  height={50}
                  priority
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {product.name}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {product.price} MMK
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div> */}
        </div>
      ),
      { position: "bottom-right", duration: 5000 }
    );
  };

  const handleAddToCart = () => {
    if (product) {
      const item = {
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.images[0].url,
      };
      addItem(item);
      addAlert({
        name: product.title,
        price: product.price,
        img: product.images[0].url,
      });
    }
  };

  if (isLoading) {
    return (
      <div className=" px-5 sm:px-7 lg:px-0 max-w-[1200px] mx-auto py-10">
        <div className=" flex flex-col lg:flex-row gap-5">
          <div className=" w-full lg:w-[400px] min-h-[400px] bg-gray-200"></div>
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
        <div className=" w-full lg:w-[400px] min-h-[400px] border border-gray-400">
          <Image
            src={product?.images[0]?.url || ""}
            alt={product?.title || ""}
            width={600}
            height={650}
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

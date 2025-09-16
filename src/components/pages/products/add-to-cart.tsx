"use client";

import { Button } from "@/components/common";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuthStore } from "@/store/store-auth";
import { useCartStore } from "@/store/store-cart";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

export default function AddToCart({ product }: { product: typeOfProduct }) {
  const { addItem } = useCartStore();
  const { isLoggedIn } = useAuthStore();
  const isMobile = useIsMobile();

  const addAlert = (product: { name: string; price: number; img: string }) => {
    toast.custom(
      (t) => (
        <Link
          href={"/cart"}
          className={`${
            t.visible ? "animate-custom-enter" : "animate-custom-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex border-2 border-green-600`}
          onClick={() => toast.dismiss(t.id)}
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
        </Link>
      ),
      { position: isMobile ? "top-center" : "bottom-right", duration: 2000 }
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

  if (!isLoggedIn) return null;

  return (
    <>
      {" "}
      {isLoggedIn && (
        <div>
          <Button variant="contained" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      )}
    </>
  );
}

"use client";
import { useCartStore } from "@/store/store-cart";
import clsx from "clsx";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Cart() {
  const [animate, setAnimate] = useState(false);
  const { items } = useCartStore();
  const counts = items.reduce((prev, cur) => prev + cur.quantity, 0);
  useEffect(() => {
    if (counts) {
      setAnimate((state) => !state);
      setTimeout(() => {
        setAnimate((state) => !state);
      }, 300);
    }
  }, [counts]);
  return (
    <Link href={"/cart"} className=" relative">
      <ShoppingBag size={20} />
      <span
        className={clsx(
          "w-[22px] h-[22px] text-xs grid place-items-center absolute -top-3 -right-3 bg-gray-900 text-gray-50 rounded-full",
          {
            " hidden": counts < 1,
            " duration-75 animate-bounce": animate,
          }
        )}
      >
        {counts}
      </span>
    </Link>
  );
}

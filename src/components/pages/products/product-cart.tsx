import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductCart({ product }: { product: typeOfProduct }) {
  return (
    <Link href={`/products/${product.id}`} className=" space-y-3">
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
  );
}

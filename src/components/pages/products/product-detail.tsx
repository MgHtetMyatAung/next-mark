import Image from "next/image";
import { notFound } from "next/navigation";
import AddToCart from "./add-to-cart";
import { getProductById } from "@/services/endpoints/product/server_api_call";

export default async function ProductDetail({
  productId,
}: {
  productId: string;
}) {
  const product = await getProductById(productId);

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
          <AddToCart product={product} />
        </div>
      </div>
      <div></div>
    </div>
  );
}

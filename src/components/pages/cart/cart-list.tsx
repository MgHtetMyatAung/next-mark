"use client";
import { Button } from "@/components/common";
import { useCartStore } from "@/store/store-cart";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CartList() {
  const { items, removeItem } = useCartStore();
  const subTotal = items.reduce(
    (pre, cur) => pre + cur.price * cur.quantity,
    0
  );
  const tax = 3000;
  const shipping = 5000;
  const total = subTotal + tax + shipping;

  if (items.length === 0) {
    return <EmptyCart />;
  }
  return (
    <div className=" max-w-full px-5 sm:px-7 lg:px-0 lg:max-w-[1200px] mx-auto py-10">
      <h3 className="">Shopping Cart</h3>
      <div className=" flex flex-col lg:flex-row gap-10 ">
        <div className=" lg:grow py-5">
          <table className="w-full">
            {/* <thead>
            <tr className=" border-b border-gray-400">
              <th className=" text-start py-3">Product</th>
              <th className=" text-center py-3">Quantity</th>
              <th className=" text-end py-3">Total</th>
            </tr>
          </thead> */}
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className=" border-b border-gray-300">
                  <td>
                    <div className=" flex">
                      <div>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={80}
                          height={100}
                        />
                      </div>
                      <div className=" grow flex flex-col justify-center space-y-1">
                        <h5 className=" font-semibold">{item.name}</h5>
                        <p className=" text-gray-500 hidden sm:block">
                          {item.price} MMK
                        </p>
                        <div className=" flex items-center justify-between sm:hidden">
                          <p className=" font-semibold">
                            {item.price * item.quantity} MMK
                          </p>
                          <button
                            className=" cursor-pointer"
                            onClick={() => removeItem(item.id)}
                          >
                            <X size={20} className=" ms-auto" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=" text-center hidden sm:table-cell">
                    {item.quantity}
                  </td>
                  <td className=" text-end py-2 hidden sm:table-cell">
                    <p className=" font-semibold">
                      {item.price * item.quantity} MMK
                    </p>
                  </td>
                  <td className=" text-end w-[100px] hidden sm:table-cell">
                    <button
                      className=" cursor-pointer"
                      onClick={() => removeItem(item.id)}
                    >
                      <X size={20} className=" ms-auto" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" w-full lg:w-5/12 ">
          <div className="p-5 md:p-10 border border-gray-400 rounded-md space-y-5 sticky top-[20px]">
            <h4>Order Summary</h4>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className=" text-gray-500">
                Discount code / Promo code
              </label>
              <input
                type="text"
                className=" border rounded-md border-gray-400 p-3"
                placeholder="Code"
              />
            </div>
            <div className=" space-y-2 text-sm sm:text-base">
              <p className=" flex justify-between items-center">
                <span className=" font-semibold">Subtotal</span>
                <span className=" font-semibold">{subTotal} MMK</span>
              </p>
              <p className=" flex justify-between items-center">
                <span className=" ">Estimated Tax</span>
                <span className=" font-semibold">{tax} MMK</span>
              </p>
              <p className=" flex justify-between items-center">
                <span className=" ">Estimated shipping & Handling</span>
                <span className=" font-semibold">{shipping} MMK</span>
              </p>
              <p className=" flex justify-between items-center">
                <span className=" font-semibold">Total</span>
                <span className=" font-semibold">{total} MMK</span>
              </p>
            </div>
            <Button className=" block w-full">Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function EmptyCart() {
  const router = useRouter();
  return (
    <div className=" max-w-[1200px] mx-auto grid place-items-center min-page-h">
      <div className=" space-y-3">
        <h4>{`You haven't choosen cart`} !</h4>
        <Button
          variant="outlined"
          className=" block mx-auto"
          onClick={() => router.push("/")}
        >
          Go Shopping
        </Button>
      </div>
    </div>
  );
}

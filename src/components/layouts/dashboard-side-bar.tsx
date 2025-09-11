import Link from "next/link";
import React from "react";

export default function DashboardSideBar() {
  return (
    <div className="bg-gray-800 p-3 text-gray-50 h-screen space-y-5">
      <div>
        <h4 className=" text-lg font-bold">Admin Panel</h4>
      </div>
      <ul className=" flex flex-col gap-3">
        <li className="text-gray-300 hover:text-gray-50 cursor-pointer">
          <Link href={"/dashboard"} className=" inline-block w-full">
            Dashboard
          </Link>
        </li>
        <li className="text-gray-300 hover:text-gray-50 cursor-pointer">
          <Link href={"/dashboard/orders"} className=" inline-block w-full">
            Orders
          </Link>
        </li>
        <li className="text-gray-300 hover:text-gray-50 cursor-pointer">
          <Link href={"/dashboard/customers"} className=" inline-block w-full">
            Customers
          </Link>
        </li>
      </ul>
    </div>
  );
}

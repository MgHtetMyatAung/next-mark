import Image from "next/image";
import React from "react";

export default function DashboardHeader() {
  return (
    <div className=" h-[60px] p-3 bg-gray-200 flex items-center justify-between">
      <div></div>
      <div>
        <Image
          src={"/vercel.svg"}
          width={100}
          height={100}
          alt="logo"
          className=" w-10 h-10"
        />
      </div>
    </div>
  );
}

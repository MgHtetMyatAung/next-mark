import { Button } from "@/components/common";
import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <div className=" bg-[#211C24]">
      <div className=" max-w-[1200px] mx-auto h-auto lg:h-[600px] flex flex-col lg:flex-row">
        <div className=" text-gray-50 lg:grow h-full lg:flex lg:items-center py-12 lg:py-0">
          <div className=" space-y-6 text-center lg:text-start">
            <h5 className=" text-gray-200 text-2xl lg:text-3xl">Pro.Beyond.</h5>
            <h2 className=" text-7xl lg:text-8xl font-light">
              IPhone 14 <span className=" font-medium">Pro</span>
            </h2>
            <h5 className=" text-gray-200 text-xl lg:text-2xl">
              Created to change everything for the better. For everyone
            </h5>
            <Button variant="outlined">Shop Now</Button>
          </div>
        </div>
        <div className=" lg:w-fit">
          <Image
            src={"/imgs/hero-mock-phone.png"}
            alt="mock"
            width={400}
            height={600}
            className=" h-full w-auto hidden lg:block"
          />
          <Image
            src={"/imgs/hero-mock-phone-sm.png"}
            alt="mock"
            width={340}
            height={280}
            className=" w-full sm:w-[400px] h-auto mx-auto block lg:hidden"
          />
        </div>
      </div>
    </div>
  );
}

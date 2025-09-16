"use client";
import Link from "next/link";
import React from "react";
import Cart from "./cart-count";
import { useAuthStore } from "@/store/store-auth";
import { Menu, User } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";

export default function ViewHeader() {
  const { isLoggedIn } = useAuthStore();
  const mounted = useMounted();
  return (
    <header className=" bg-gray-200">
      <nav className=" px-5 sm:px-7 lg:px-0 max-w-[1200px] mx-auto flex justify-between items-center h-[80px]">
        <div>
          <Link href={"/"} className="">
            <h3 className=" font-bold text-lg">Next Js</h3>
          </Link>
        </div>
        <ul className=" hidden lg:flex items-center gap-5 ">
          <li>
            <Link href={"/products"} className="">
              Products
            </Link>
          </li>
          <li>
            <Link href={"/blogs"} className="">
              Blogs
            </Link>
          </li>
          <li>
            <Link href={"/about-us"} className="">
              About us
            </Link>
          </li>
          <li>
            <Link href={"/dashboard"} className="">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href={"/profile"} className="">
              Profile
            </Link>
          </li>
        </ul>
        <ul className=" flex items-center gap-6 sm:gap-5">
          <li>
            <Cart />
          </li>
          {mounted ? (
            <>
              {isLoggedIn ? (
                <>
                  <li className=" lg:hidden">
                    <Menu size={20} />
                  </li>
                  <li className=" hidden lg:block">
                    <User size={20} />
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href={"/sign-in"} className="">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link href={"/sign-up"} className="">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </>
          ) : (
            <div className=" w-[100px] h-6 animate-pulse bg-gray-300 rounded-md"></div>
          )}
        </ul>
      </nav>
    </header>
  );
}

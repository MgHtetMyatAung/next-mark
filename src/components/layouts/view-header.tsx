import Link from "next/link";
import React from "react";

export default function ViewHeader() {
  return (
    <header className=" bg-gray-200">
      <nav className=" max-w-[1200px] mx-auto flex justify-between items-center h-[80px]">
        <div>
          <Link href={"/"} className="">
            <h3 className=" font-bold text-lg">Next Js</h3>
          </Link>
        </div>
        <ul className=" flex items-center gap-5">
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
        <ul className=" flex items-center gap-5">
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
        </ul>
      </nav>
    </header>
  );
}

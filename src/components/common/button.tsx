import clsx from "clsx";
import React from "react";

export default function Button({
  children,
  variant = "contained",
  ...props
}: {
  children: React.ReactNode;
  variant: "contained" | "outlined";
}) {
  return (
    <button
      className={clsx(" min-w-[150px] h-[56px] rounded-md cursor-pointer", {
        " border bg-gray-800 text-gray-50": variant === "contained",
        " border ": variant === "outlined",
      })}
      {...props}
    >
      {children}
    </button>
  );
}

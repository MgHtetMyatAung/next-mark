import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

type Size = "sm" | "md" | "lg";
type Variant = "contained" | "outlined";

export interface LinkButtonProps extends React.ComponentPropsWithoutRef<"a"> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  href: string;
  className?: string;
}

export default function LinkButton({
  children,
  variant = "contained",
  className,
  href,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        `min-w-[150px] h-[56px] rounded-md cursor-pointer grid place-items-center ${
          className || ""
        }`,
        {
          " border bg-gray-800 text-gray-50": variant === "contained",
          " border ": variant === "outlined",
        }
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

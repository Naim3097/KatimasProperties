import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[80rem] px-5 sm:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}

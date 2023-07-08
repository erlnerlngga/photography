import * as React from "react";
import { cn } from "@/lib/utils";

export function PaddingContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("w-full mx-auto max-w-7xl px-8", className)}
      {...props}
    />
  );
}

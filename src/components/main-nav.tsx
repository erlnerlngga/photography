"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center font-medium space-x-4">
      <Link
        href={"/"}
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Europe
      </Link>
      <Link
        href={"/italy"}
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/italy" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Italy
      </Link>
      <Link
        href={"/portugal"}
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/portugal" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Portugal
      </Link>
      <Link
        href={"/spain"}
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/spain" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Spain
      </Link>
    </nav>
  );
}

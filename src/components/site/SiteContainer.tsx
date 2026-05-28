import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "footer" | "main";
};

/** Shared max-width and horizontal padding for consistent layout across breakpoints. */
export function SiteContainer({ children, className, as: Tag = "div" }: SiteContainerProps) {
  return <Tag className={cn("site-container", className)}>{children}</Tag>;
}

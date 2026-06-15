import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline" | "data";
}) {
  const variants = {
    default: "bg-muted text-foreground border border-transparent",
    outline: "bg-transparent border border-border-subtle text-muted-foreground",
    data: "bg-accent/10 text-accent border border-accent/20 font-mono-data",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

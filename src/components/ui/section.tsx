import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-20 md:py-28", className)}>
      <div className="mx-auto max-w-6xl px-6 md:px-10">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 md:mb-16 max-w-2xl">
      <div className="flex items-center gap-3 mb-4">
        <span className="h-px w-8 bg-accent" />
        <span className="font-mono-data text-xs uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

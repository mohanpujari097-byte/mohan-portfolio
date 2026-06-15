"use client";

import { motion } from "framer-motion";
import { cohortFunnel } from "@/data/content";
import { cn } from "@/lib/utils";

function formatValue(value: number) {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 1)}M`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(value % 1_000 === 0 ? 0 : 1)}K`;
  }
  return value.toString();
}

export function CohortFunnel() {
  const max = cohortFunnel[0].value;

  return (
    <div className="relative rounded-2xl border border-border-subtle bg-surface-elevated/80 backdrop-blur-sm p-6 md:p-7 shadow-xl shadow-primary/5">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="font-mono-data text-[11px] uppercase tracking-[0.2em] text-accent">
            Feasibility Output
          </p>
          <h3 className="font-display text-lg font-semibold mt-1">
            Oncology Cohort Funnel
          </h3>
        </div>
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-pulse-soft" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
        </span>
      </div>

      <div className="space-y-3">
        {cohortFunnel.map((stage, i) => {
          const widthPct = Math.max((stage.value / max) * 100, 6);
          return (
            <div key={stage.label}>
              <div className="flex items-baseline justify-between mb-1.5 gap-3">
                <span className="text-xs text-muted-foreground leading-snug">
                  {stage.label}
                </span>
                <span className="font-mono-data text-xs text-accent shrink-0">
                  {stage.code}
                </span>
              </div>
              <div className="relative h-8 rounded-md bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${widthPct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-y-0 left-0 rounded-md bg-gradient-to-r from-primary to-accent max-w-full"
                />
                <span
                  className={cn(
                    "absolute inset-y-0 flex items-center font-mono-data text-xs font-semibold whitespace-nowrap px-3",
                    widthPct > 18
                      ? "left-0 text-primary-foreground"
                      : "text-foreground"
                  )}
                  style={widthPct <= 18 ? { left: `calc(${widthPct}% + 8px)` } : undefined}
                >
                  {formatValue(stage.value)}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-5 border-t border-border-subtle flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          Final eligible cohort
        </span>
        <span className="font-display text-xl font-semibold text-gradient-data">
          84.5K patients
        </span>
      </div>
    </div>
  );
}

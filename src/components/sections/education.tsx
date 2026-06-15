"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { education } from "@/data/content";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading eyebrow="Education" title="Academic foundation" />

      <div className="space-y-4">
        {education.map((item, i) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-start gap-4 rounded-xl border border-border-subtle bg-surface-elevated p-5 md:p-6"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-accent">
              <GraduationCap className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display font-semibold text-lg leading-snug">
                  {item.degree}
                </h3>
                <span className="font-mono-data text-xs text-accent shrink-0">
                  {item.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{item.school}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {item.notes}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

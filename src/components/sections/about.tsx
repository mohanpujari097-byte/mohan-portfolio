"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/section";
import { about } from "@/data/content";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="Analyst by training, RWE specialist by focus"
      />

      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-border-subtle bg-surface-elevated p-6 md:p-8 space-y-6 h-fit"
        >
          {about.highlights.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <span className="font-mono-data text-xs uppercase tracking-[0.15em] text-accent">
                {item.label}
              </span>
              <span className="text-foreground font-medium leading-snug">
                {item.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

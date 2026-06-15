"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/section";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <Section id="experience" className="bg-surface/40">
      <SectionHeading
        eyebrow="Experience"
        title="Three years, two RWE focus areas, one consistent thread"
        description="Feasibility, cohort logic, and claims-based analytics — applied across oncology and immunology studies."
      />

      <div className="relative">
        <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-border-subtle" />
        <div className="space-y-12">
          {experience.map((job, i) => (
            <motion.div
              key={job.role + job.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-8 md:pl-10"
            >
              <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="font-display text-xl font-semibold">
                  {job.role}
                </h3>
                <span className="font-mono-data text-xs text-accent shrink-0">
                  {job.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {job.company} · {job.location}
              </p>
              <ul className="space-y-2.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm md:text-base text-muted-foreground leading-relaxed flex gap-3"
                  >
                    <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

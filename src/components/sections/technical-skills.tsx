"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/section";
import { technicalSkills } from "@/data/content";

export function TechnicalSkills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Technical Skills"
        title="The stack behind the analysis"
        description="Day-to-day tools for querying, modeling, automating, and visualizing healthcare claims data at scale."
      />

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-7">
        {technicalSkills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <div className="flex items-baseline justify-between mb-2">
              <div className="flex items-baseline gap-3">
                <span className="font-display font-semibold text-lg">
                  {skill.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {skill.category}
                </span>
              </div>
              <span className="font-mono-data text-sm text-accent">
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

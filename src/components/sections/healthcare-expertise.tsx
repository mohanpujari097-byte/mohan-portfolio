"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/section";
import { healthcareExpertise } from "@/data/content";
import { Badge } from "@/components/ui/badge";

export function HealthcareExpertise() {
  return (
    <Section id="expertise" className="bg-surface/40">
      <SectionHeading
        eyebrow="Healthcare Expertise"
        title="Where claims data turns into clinical answers"
        description="The methods and coding systems behind every feasibility report, cohort definition, and treatment pattern study."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {healthcareExpertise.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            className="group rounded-xl border border-border-subtle bg-surface-elevated p-5 flex flex-col gap-3 transition-colors hover:border-accent/40"
          >
            <h3 className="font-display font-semibold text-base leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-[10px]">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

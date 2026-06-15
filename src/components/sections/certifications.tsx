"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { certifications } from "@/data/content";

export function Certifications() {
  return (
    <Section id="certifications" className="bg-surface/40">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials across the analytics stack"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex items-start gap-4 rounded-xl border border-border-subtle bg-surface-elevated p-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-accent">
              <Award className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-display font-semibold text-base leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {cert.issuer} · {cert.year}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

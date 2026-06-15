"use client";

import { motion } from "framer-motion";
import { Database, GitBranch, Workflow, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/content";

const icons = [Workflow, GitBranch, Database];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Selected Projects"
        title="Builds that shipped feasibility faster"
        description="Each project below maps to a real bottleneck in RWE delivery — feasibility turnaround, journey reconstruction, and data pipeline reliability."
      />

      <div className="space-y-6">
        {projects.map((project, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-2xl border border-border-subtle bg-surface-elevated p-6 md:p-8 transition-colors hover:border-accent/40"
            >
              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <Badge variant="outline">{project.type}</Badge>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold leading-snug mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="data">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="lg:border-l lg:border-border-subtle lg:pl-8">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <p className="font-mono-data text-[11px] uppercase tracking-[0.2em] text-accent mb-3">
                    Impact
                  </p>
                  <ul className="space-y-2.5">
                    {project.impact.map((point) => (
                      <li
                        key={point}
                        className="text-sm text-foreground leading-relaxed flex gap-3 items-start"
                      >
                        <ArrowUpRight className="h-4 w-4 text-success shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

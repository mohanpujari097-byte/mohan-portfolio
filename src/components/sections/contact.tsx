"use client";

import { motion } from "framer-motion";
import { Mail, Link2, Code2, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/content";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/mohan-pujari/",
    href: profile.linkedin,
    icon: Link2,
  },
  {
    label: "GitHub",
    value: "https://github.com/mohanrockz",
    href: profile.github,
    icon: Code2,
  },
];

export function Contact() {
  return (
    <Section id="contact" className="bg-surface/40">
      <div className="rounded-2xl border border-border-subtle bg-surface-elevated p-8 md:p-14 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative">
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your next RWE study"
            description="Open to Senior Business Analyst and RWE Analyst roles, contract feasibility work, and consulting engagements in U.S. healthcare analytics."
          />

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex items-center justify-between gap-3 rounded-xl border border-border-subtle bg-surface p-4 transition-colors hover:border-accent/50"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-accent">
                    <link.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{link.label}</p>
                    <p className="text-sm font-medium truncate">{link.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>

          <a href={`mailto:${profile.email}`}>
            <Button size="lg">
              Send an email <Mail className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
}

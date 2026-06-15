"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile, heroStats } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CohortFunnel } from "@/components/sections/cohort-funnel";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="absolute inset-0 grid-backdrop opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute top-40 -left-40 h-80 w-80 rounded-full bg-data/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 mb-6"
            >
              <Badge variant="data">Healthcare Analytics · Real-World Evidence</Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08]"
            >
              Evidence from{" "}
              <span className="text-gradient-data">50M+ patient records</span>
              , shaped into decisions.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-3 flex items-center gap-2 text-sm text-muted-foreground"
            >
              <MapPin className="h-4 w-4 text-accent" />
              <span>{profile.location}</span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#projects">
                <Button size="lg">
                  View projects <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href={profile.resumeUrl} download>
                <Button size="lg" variant="secondary">
                  Download resume <Download className="h-4 w-4" />
                </Button>
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl"
            >
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl md:text-3xl font-semibold text-foreground">
                    {stat.value}
                    <span className="text-accent">{stat.suffix}</span>
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <CohortFunnel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

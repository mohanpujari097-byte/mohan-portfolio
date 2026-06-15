"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Activity } from "lucide-react";
import { navLinks, profile } from "@/data/content";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border-subtle"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 font-display font-semibold text-foreground"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Activity className="h-4 w-4" />
          </span>
          <span className="text-sm tracking-tight hidden sm:inline">
            {profile.name}
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden sm:flex" />
          <a href="#contact" className="hidden sm:block">
            <Button size="sm">Get in touch</Button>
          </a>
          <button
            aria-label="Toggle menu"
            className="lg:hidden h-10 w-10 flex items-center justify-center rounded-full border border-border-subtle"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden border-t border-border-subtle bg-background"
        >
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-3 mt-2 border-t border-border-subtle">
              <ThemeToggle />
              <a href="#contact" onClick={() => setOpen(false)}>
                <Button size="sm">Get in touch</Button>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

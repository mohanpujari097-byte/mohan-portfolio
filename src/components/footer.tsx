import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8">
      <div className="mx-auto max-w-6xl px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <p className="font-mono-data text-xs">
          U.S. Healthcare Analytics · Real-World Evidence
        </p>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Overview" },
  { href: "/roadmap/present", label: "Roadmap" },
  { href: "/compare", label: "Compare" },
  { href: "/policies", label: "Policies" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color:var(--background)]/80 border-b hairline">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[color:var(--accent)]" />
          <span className="serif text-xl tracking-tight">Closed Loop Canada</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {links.map((l) => {
            const active =
              l.href === "/"
                ? pathname === "/"
                : pathname.startsWith(l.href.split("/").slice(0, 2).join("/"));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative transition-colors ${
                  active
                    ? "text-[color:var(--foreground)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute left-0 right-0 -bottom-[22px] h-px bg-[color:var(--accent)]" />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="text-xs text-[color:var(--muted)] hidden md:block numerals">
          Draft · 2026
        </div>
      </div>
    </header>
  );
}

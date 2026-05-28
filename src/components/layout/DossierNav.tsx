"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Roadmap", code: "00" },
  { href: "/compare", label: "Chemistries", code: "A" },
  { href: "/policies", label: "Policy register", code: "B" },
  { href: "/about", label: "About", code: "C" },
];

export default function DossierNav() {
  const path = usePathname();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="px-5 h-14 flex items-center justify-between">
        <Link href="/" className="mono text-[11px] tracking-[0.3em] text-[#ece6d6]">
          CLOSED LOOP // CA
        </Link>
        <nav className="flex items-center gap-6">
          {links.map((l) => {
            const active = l.href === "/" ? path === "/" : path.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className="mono text-[10px] tracking-[0.25em] flex items-center gap-2 text-[#ece6d6]"
              >
                <span className={active ? "text-[#c9f25b]" : "opacity-50"}>
                  {l.code}
                </span>
                <span className={active ? "" : "opacity-80"}>
                  {l.label.toUpperCase()}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

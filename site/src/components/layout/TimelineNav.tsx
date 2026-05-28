"use client";

import Link from "next/link";
import { phases } from "@/data/roadmapData";

export default function TimelineNav({ active }: { active?: string }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
        <span>Roadmap timeline</span>
        <span className="numerals">04 phases</span>
      </div>
      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 dotline h-px" />
        <ol className="relative grid grid-cols-4 gap-2">
          {phases.map((p) => {
            const isActive = active === p.id;
            return (
              <li key={p.id} className="flex flex-col items-center">
                <Link
                  href={`/roadmap/${p.id}`}
                  className="group flex flex-col items-center"
                >
                  <span
                    className={`w-3 h-3 rounded-full border bg-[color:var(--background)] transition-colors ${
                      isActive
                        ? "border-[color:var(--accent)] ring-4 ring-[color:var(--accent-soft)]"
                        : "border-[color:var(--line)] group-hover:border-[color:var(--foreground)]"
                    }`}
                  />
                  <span
                    className={`mt-3 text-sm font-medium numerals ${
                      isActive
                        ? "text-[color:var(--foreground)]"
                        : "text-[color:var(--muted)] group-hover:text-[color:var(--foreground)]"
                    }`}
                  >
                    {p.year}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--muted)] mt-1">
                    {p.label === p.year ? "Phase" : p.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

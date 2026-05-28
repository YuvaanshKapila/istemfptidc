"use client";

import { useMemo, useState } from "react";
import { policies, type PolicyLevel, type Impact } from "@/data/policyData";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const levels: ("All" | PolicyLevel)[] = [
  "All",
  "Federal",
  "Provincial",
  "Municipal",
  "Industry",
  "Education",
];

const impactDot: Record<Impact, string> = {
  High: "bg-[color:var(--accent)]",
  Medium: "bg-[#d4c14d]",
  Emerging: "bg-[color:var(--warn)]",
};

export default function PoliciesPage() {
  const [filter, setFilter] = useState<(typeof levels)[number]>("All");
  const filtered = useMemo(
    () => (filter === "All" ? policies : policies.filter((p) => p.level === filter)),
    [filter]
  );

  return (
    <main className="min-h-screen pt-20">
      <section className="border-b hairline-strong">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-12">
          <Link
            href="/"
            className="mono text-[10px] tracking-[0.25em] text-[color:var(--muted)] hover:text-[color:var(--accent)] inline-flex items-center gap-2"
          >
            <ArrowLeft size={11} /> RETURN TO DOSSIER
          </Link>
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mt-8">
            <div>
              <span className="stamp">ANNEX B // POLICY REGISTER</span>
              <h1 className="serif text-[clamp(3rem,7vw,6rem)] leading-[0.92] tracking-tight mt-6 max-w-3xl">
                Every action this roadmap depends on.
              </h1>
            </div>
            <p className="text-[color:var(--muted)] max-w-md leading-relaxed">
              Filter by the level of government or institution responsible.
              Each entry lists its timeline, action, and weight in the
              broader system.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-wrap gap-2 pb-4 border-b hairline">
          {levels.map((l) => (
            <button
              key={l}
              onClick={() => setFilter(l)}
              className={`mono text-[11px] tracking-[0.18em] uppercase px-3.5 h-9 border transition-colors ${
                filter === l
                  ? "border-[color:var(--accent)] text-[color:var(--accent)] bg-[color:var(--background-2)]"
                  : "hairline text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
              }`}
            >
              {l}
              <span className="ml-2 numerals text-[10px] opacity-70">
                {l === "All"
                  ? policies.length
                  : policies.filter((p) => p.level === l).length}
              </span>
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-3">
          {filtered.map((p, i) => (
            <li
              key={p.name}
              className="bg-[color:var(--background-2)] border hairline p-6 grid md:grid-cols-[3rem_10rem_1fr_8rem] gap-6 items-start"
            >
              <div className="mono text-xs text-[color:var(--muted)] numerals">
                {String(i + 1).padStart(3, "0")}
              </div>
              <div>
                <div className="mono text-[10px] tracking-[0.22em] text-[color:var(--accent)]">
                  {p.level.toUpperCase()}
                </div>
                <div className="mono text-xs text-[color:var(--muted)] mt-2 numerals">
                  {p.timeline}
                </div>
              </div>
              <div>
                <h3 className="serif text-2xl tracking-tight">{p.name}</h3>
                <p className="text-sm text-[color:var(--foreground)]/80 mt-2 leading-relaxed max-w-2xl">
                  {p.action}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${impactDot[p.impact]}`} />
                <span className="mono text-[10px] tracking-[0.18em] uppercase">
                  {p.impact}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

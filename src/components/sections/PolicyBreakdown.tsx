"use client";

import { useState } from "react";
import { policies, type PolicyLevel } from "@/data/policyData";

const levels: PolicyLevel[] = ["Federal", "Provincial", "Municipal", "Industry", "Education"];

const impactColor: Record<string, string> = {
  High: "bg-[color:var(--accent)] text-white",
  Medium: "bg-[#e8dfb8] text-[#5a4914]",
  Emerging: "bg-[color:var(--warn-soft)] text-[color:var(--warn)]",
};

export default function PolicyBreakdown({ filterLevels }: { filterLevels?: PolicyLevel[] }) {
  const available = filterLevels ?? levels;
  const [active, setActive] = useState<PolicyLevel>(available[0]);
  const filtered = policies.filter((p) => p.level === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b hairline pb-4">
        {available.map((l) => (
          <button
            key={l}
            onClick={() => setActive(l)}
            className={`text-sm px-3.5 h-9 rounded-full border transition-colors ${
              active === l
                ? "bg-[color:var(--foreground)] text-[color:var(--background)] border-[color:var(--foreground)]"
                : "hairline text-[color:var(--muted)] hover:text-[color:var(--foreground)]"
            }`}
          >
            {l}
          </button>
        ))}
      </div>
      <ul className="mt-6 grid gap-3">
        {filtered.map((p) => (
          <li
            key={p.name}
            className="bg-[color:var(--surface)] border hairline p-5 flex flex-col md:flex-row md:items-start md:justify-between gap-4"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span
                  className={`text-[10px] uppercase tracking-[0.16em] px-2 py-0.5 rounded-full ${
                    impactColor[p.impact]
                  }`}
                >
                  {p.impact} impact
                </span>
                <span className="text-xs text-[color:var(--muted)] numerals">
                  {p.timeline}
                </span>
              </div>
              <h4 className="serif text-xl mt-3 tracking-tight">{p.name}</h4>
              <p className="text-sm text-[color:var(--muted)] mt-2 leading-relaxed">
                {p.action}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

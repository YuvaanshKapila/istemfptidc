"use client";

import { batteries, type Rating } from "@/data/batteryTechData";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ratingDot: Record<Rating, string> = {
  good: "bg-[color:var(--accent)]",
  moderate: "bg-[#d4c14d]",
  poor: "bg-[color:var(--warn)]",
};

const ratingLabel: Record<Rating, string> = {
  good: "Strong",
  moderate: "Moderate",
  poor: "Limited",
};

export default function ComparePage() {
  const chartData = batteries.map((b) => ({
    name: b.name,
    "Energy density (Wh/kg)": b.energyDensity,
    "Lifespan (years)": b.lifespan,
  }));

  const rows = [
    { key: "energyDensity", label: "Energy density (Wh/kg)", isNumber: true },
    { key: "cost", label: "Cost profile" },
    { key: "recycleability", label: "Recycleability" },
    { key: "marketReadiness", label: "Market readiness" },
    { key: "dendriteRisk", label: "Dendrite risk" },
    { key: "lifespan", label: "Lifespan (years)", isNumber: true },
  ] as const;

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
              <span className="stamp">ANNEX A // CHEMISTRIES</span>
              <h1 className="serif text-[clamp(3rem,7vw,6rem)] leading-[0.92] tracking-tight mt-6 max-w-3xl">
                Three chemistries.
                <br />
                Three trajectories.
              </h1>
            </div>
            <p className="text-[color:var(--muted)] max-w-md leading-relaxed">
              Lithium ion is today. Aluminium ion is the bridge. Solid state is
              the destination. The roadmap depends on each playing the right
              role at the right time.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="border hairline overflow-hidden">
          <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr] bg-[color:var(--background-2)]">
            <div className="p-4 mono text-[10px] tracking-[0.22em] text-[color:var(--muted)]">
              ATTRIBUTE
            </div>
            {batteries.map((b) => (
              <div
                key={b.name}
                className="p-4 mono text-[10px] tracking-[0.22em] text-[color:var(--accent)]"
              >
                {b.name.toUpperCase()}
              </div>
            ))}
          </div>
          {rows.map((row) => (
            <div
              key={row.key}
              className="grid grid-cols-[1.2fr_1fr_1fr_1fr] border-t hairline"
            >
              <div className="p-5">
                <div className="serif text-lg">{row.label}</div>
              </div>
              {batteries.map((b) => {
                const value = (b as unknown as Record<string, unknown>)[row.key];
                const note = (b as unknown as Record<string, string>)[
                  `${row.key}Note`
                ];
                const isRating = typeof value === "string";
                return (
                  <div key={b.name} className="p-5 border-l hairline">
                    {isRating ? (
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            ratingDot[value as Rating]
                          }`}
                        />
                        <span className="mono text-[11px] tracking-[0.18em] uppercase">
                          {ratingLabel[value as Rating]}
                        </span>
                      </div>
                    ) : (
                      <div className="serif text-3xl numerals accent-text">
                        {String(value)}
                      </div>
                    )}
                    {note && (
                      <div className="text-xs text-[color:var(--muted)] mt-2 leading-relaxed">
                        {note}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <div className="border hairline p-6 bg-[color:var(--background-2)]">
          <div className="flex items-end justify-between mb-4">
            <div>
              <span className="stamp">FIG. A.1</span>
              <div className="serif text-2xl tracking-tight mt-2">
                Energy density and lifespan
              </div>
            </div>
          </div>
          <div style={{ width: "100%", height: 360 }}>
            <ResponsiveContainer>
              <BarChart data={chartData} margin={{ top: 24, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid stroke="#2a2d2b" strokeDasharray="3 6" vertical={false} />
                <XAxis dataKey="name" stroke="#8a8676" fontSize={12} tickLine={false} />
                <YAxis stroke="#8a8676" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  cursor={{ fill: "rgba(201,242,91,0.1)" }}
                  contentStyle={{
                    background: "#181b1d",
                    border: "1px solid #3a3d3a",
                    borderRadius: 0,
                    fontSize: 12,
                    color: "#ece6d6",
                  }}
                />
                <Bar dataKey="Energy density (Wh/kg)" fill="#c9f25b">
                  <LabelList dataKey="Energy density (Wh/kg)" position="top" fontSize={11} fill="#ece6d6" />
                </Bar>
                <Bar dataKey="Lifespan (years)" fill="#ff8a3d">
                  <LabelList dataKey="Lifespan (years)" position="top" fontSize={11} fill="#ece6d6" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </main>
  );
}

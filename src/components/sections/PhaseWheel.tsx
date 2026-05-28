"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { phases } from "@/data/roadmapData";

const COUNT = phases.length;
const RADIUS = 200;

export default function PhaseWheel() {
  const [active, setActive] = useState(0);
  const phase = phases[active];

  const step = (dir: 1 | -1) =>
    setActive((a) => (a + dir + COUNT) % COUNT);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <div className="text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted)]">
          The roadmap / Click a phase
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => step(-1)}
            aria-label="Previous phase"
            className="w-9 h-9 rounded-full border hairline hover:border-[color:var(--foreground)] flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => step(1)}
            aria-label="Next phase"
            className="w-9 h-9 rounded-full border hairline hover:border-[color:var(--foreground)] flex items-center justify-center transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[480px_1fr] gap-10 items-start">
        <div
          className="relative mx-auto"
          style={{ width: 480, maxWidth: "100%", aspectRatio: "1 / 1" }}
        >
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="rounded-full border hairline"
              style={{
                width: RADIUS * 2,
                height: RADIUS * 2,
                borderStyle: "dashed",
              }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                Phase {String(active + 1).padStart(2, "0")} of {COUNT}
              </div>
              <div className="serif text-6xl numerals mt-2 tracking-tight">
                {phase.year}
              </div>
              <div className="serif italic text-[color:var(--accent)] mt-1 text-lg">
                {phase.tagline}
              </div>
            </div>
          </div>

          <motion.div
            className="absolute inset-0"
            animate={{ rotate: -active * (360 / COUNT) }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            style={{ transformOrigin: "50% 50%" }}
          >
            {phases.map((p, i) => {
              const angle = (i / COUNT) * 2 * Math.PI - Math.PI / 2;
              const x = Math.cos(angle) * RADIUS;
              const y = Math.sin(angle) * RADIUS;
              const isActive = i === active;
              return (
                <motion.button
                  key={p.id}
                  onClick={() => setActive(i)}
                  aria-label={`Show phase ${p.year}`}
                  className="absolute left-1/2 top-1/2"
                  style={{ x, y, translateX: "-50%", translateY: "-50%" }}
                >
                  <motion.div
                    animate={{ rotate: active * (360 / COUNT) }}
                    transition={{ type: "spring", stiffness: 80, damping: 16 }}
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.15 : 1,
                        backgroundColor: isActive
                          ? "var(--foreground)"
                          : "var(--surface)",
                        color: isActive
                          ? "var(--background)"
                          : "var(--foreground)",
                        borderColor: isActive
                          ? "var(--foreground)"
                          : "var(--line)",
                      }}
                      transition={{ duration: 0.4 }}
                      className="w-28 h-28 border flex flex-col items-center justify-center text-center"
                    >
                      <div className="text-[9px] uppercase tracking-[0.2em] opacity-70">
                        {p.label === p.year ? "Phase" : p.label}
                      </div>
                      <div className="serif text-2xl numerals mt-1">
                        {p.year}
                      </div>
                      <div className="text-[10px] mt-1 px-2 opacity-80 leading-tight">
                        {p.tagline}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="bg-[color:var(--surface)] border hairline p-7"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  {phase.label === phase.year ? "Phase" : phase.label}
                </div>
                <h3 className="serif text-3xl tracking-tight mt-1">
                  {phase.tagline}
                </h3>
              </div>
              <Link
                href={`/roadmap/${phase.id}`}
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-[color:var(--accent)]"
              >
                Open phase
                <ArrowUpRight size={14} />
              </Link>
            </div>
            <p className="text-[color:var(--muted)] mt-4 leading-relaxed">
              {phase.summary}
            </p>

            <div className="grid sm:grid-cols-3 gap-px bg-[color:var(--line)] border hairline mt-6">
              {[
                { title: "Infrastructure", items: phase.infrastructure },
                { title: "Policy", items: phase.policy },
                { title: "Technology", items: phase.technology },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[color:var(--surface)] p-4"
                >
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    {c.title}
                  </div>
                  <ul className="mt-3 space-y-2.5 text-[13px] leading-relaxed">
                    {c.items.map((it, i) => (
                      <li
                        key={i}
                        className="grid grid-cols-[1rem_1fr] gap-1.5"
                      >
                        <span className="text-[color:var(--accent)] numerals text-[11px] mt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {phases.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setActive(i)}
            aria-label={`Go to phase ${p.year}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active
                ? "w-10 bg-[color:var(--foreground)]"
                : "w-4 bg-[color:var(--line)] hover:bg-[color:var(--muted)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Phase } from "@/data/roadmapData";

export default function PhaseCard({ phase, index }: { phase: Phase; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <Link
        href={`/roadmap/${phase.id}`}
        className="block bg-[color:var(--surface)] border hairline p-7 hover:border-[color:var(--foreground)] transition-colors h-full"
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Phase {String(index + 1).padStart(2, "0")}
            </div>
            <div className="serif text-5xl mt-2 numerals tracking-tight">
              {phase.year}
            </div>
          </div>
          <ArrowUpRight
            size={20}
            className="text-[color:var(--muted)] group-hover:text-[color:var(--foreground)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
          />
        </div>
        <div className="serif italic text-xl mt-6 text-[color:var(--accent)]">
          {phase.tagline}
        </div>
        <p className="text-sm mt-3 text-[color:var(--muted)] leading-relaxed">
          {phase.summary}
        </p>
        <div className="flex gap-2 mt-6 flex-wrap">
          {["Infrastructure", "Policy", "Technology"].map((t) => (
            <span
              key={t}
              className="text-[11px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full border hairline text-[color:var(--muted)]"
            >
              {t}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}

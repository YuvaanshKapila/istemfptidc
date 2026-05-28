"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b hairline">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted)]">
            <span className="w-6 h-px bg-[color:var(--accent)]" />
            <span>A policy roadmap for Canada</span>
          </div>
          <h1 className="serif text-[clamp(2.6rem,6vw,5.2rem)] leading-[1.02] mt-6 tracking-tight">
            From a lithium ion economy
            <br />
            to a <em className="italic text-[color:var(--accent)]">closed loop</em> one.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[color:var(--muted)] max-w-2xl leading-relaxed">
            By 2040, more than 93,000 EV batteries will reach end of life
            in Canada every year. This document maps the decisions, the
            infrastructure, and the technology that decide whether that becomes
            a crisis or an industry.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/roadmap/present"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-full bg-[color:var(--foreground)] text-[color:var(--background)] text-sm font-medium hover:opacity-90 transition"
            >
              Read the roadmap
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/policies"
              className="inline-flex items-center gap-2 px-5 h-11 rounded-full border hairline text-sm font-medium hover:bg-[color:var(--surface)] transition"
            >
              <FileText size={16} />
              Policy action items
            </Link>
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--line)] border hairline">
          {[
            { k: "Present", v: "Now", n: "Research and incentives" },
            { k: "Phase II", v: "2030", n: "Commercial entry" },
            { k: "Peak", v: "2040", n: "93,000+ EOL batteries / yr" },
            { k: "Closed loop", v: "2060", n: "Domestic supply at near 100%" },
          ].map((b) => (
            <div key={b.v} className="bg-[color:var(--background)] p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                {b.k}
              </div>
              <div className="serif text-3xl mt-2 numerals">{b.v}</div>
              <div className="text-sm mt-2 text-[color:var(--muted)]">{b.n}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

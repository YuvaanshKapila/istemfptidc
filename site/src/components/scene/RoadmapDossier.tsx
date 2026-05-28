"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { phases } from "@/data/roadmapData";

const RoadmapScene = dynamic(() => import("./RoadmapScene"), { ssr: false });

const SCROLL_VH = 500;

export default function RoadmapDossier() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      setProgress(p);
      if (p < 0.22) setActive(0);
      else if (p < 0.5) setActive(1);
      else if (p < 0.8) setActive(2);
      else setActive(3);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const phase = phases[active];

  const goTo = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const target = [0.05, 0.34, 0.62, 0.94][i];
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({
      top: el.offsetTop + total * target,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={scrollRef}
      style={{ height: `${SCROLL_VH}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          {!isMobile ? (
            <RoadmapScene
              progress={progress}
              active={active}
              orbit={false}
              setActive={(i) => {
                setActive(i);
                goTo(i);
              }}
            />
          ) : (
            <MobileTerrain progress={progress} active={active} />
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />
        <div className="pointer-events-none absolute inset-0 scanline" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d0e0c]/60 via-transparent to-[#0d0e0c]/80" />

        <AnimatePresence mode="wait">
          <PhasePanel key={phase.id} active={active} />
        </AnimatePresence>

        <BottomDock active={active} goTo={goTo} />
      </div>
    </div>
  );
}

function PhasePanel({ active }: { active: number }) {
  const phase = phases[active];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
      className="absolute left-1/2 -translate-x-1/2 md:left-16 md:translate-x-0 top-1/2 -translate-y-1/2 w-[min(92vw,520px)] pointer-events-none"
    >
      <div className="pointer-events-auto bg-[color:var(--background)]/70 backdrop-blur-md border hairline-strong p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mono text-[10px] text-[color:var(--accent)] tracking-[0.2em]">
              {phase.label.toUpperCase()}
            </div>
            <h2 className="serif text-[clamp(2.5rem,5vw,4.2rem)] leading-[0.95] numerals tracking-tight mt-3">
              {phase.year}
            </h2>
            <div className="serif italic text-xl md:text-2xl text-[color:var(--accent)] mt-2">
              {phase.tagline}
            </div>
          </div>
          <Link
            href={`/roadmap/${phase.id}`}
            className="shrink-0 mono text-[10px] tracking-[0.22em] uppercase text-[color:var(--muted)] hover:text-[color:var(--accent)] inline-flex items-center gap-1.5 border hairline px-3 py-2 transition-colors"
          >
            Full page
            <ArrowUpRight size={11} />
          </Link>
        </div>
        <p className="text-sm text-[color:var(--foreground)]/85 mt-4 leading-relaxed">
          {phase.summary}
        </p>
      </div>
    </motion.div>
  );
}

function BottomDock({
  active,
  goTo,
}: {
  active: number;
  goTo: (i: number) => void;
}) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-center gap-4 pointer-events-none">
      <div className="pointer-events-auto flex items-end gap-3">
        {phases.map((p, i) => (
          <button
            key={p.id}
            onClick={() => goTo(i)}
            className="group flex flex-col items-center gap-1.5"
          >
            <span
              className={`mono text-[9px] tracking-[0.2em] transition-colors ${
                i === active
                  ? "text-[color:var(--accent)]"
                  : "text-[color:var(--muted)] group-hover:text-[color:var(--foreground)]"
              }`}
            >
              {p.year.toUpperCase()}
            </span>
            <span
              className={`block transition-all ${
                i === active
                  ? "w-12 h-[2px] bg-[color:var(--accent)]"
                  : "w-6 h-[1px] bg-[color:var(--line-strong)] group-hover:bg-[color:var(--muted)]"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function MobileTerrain({
  progress,
  active,
}: {
  progress: number;
  active: number;
}) {
  const w = 800;
  const h = 400;
  const stations = [0.05, 0.34, 0.62, 0.94];
  const pts: string[] = [];
  for (let i = 0; i <= 100; i++) {
    const t = i / 100;
    const x = t * w;
    const peak = Math.exp(-Math.pow((t - 0.62) / 0.13, 2)) * 200;
    const y = h - 60 - peak - t * 30;
    pts.push(`${x},${y}`);
  }
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="terrainGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9f25b" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0d0e0c" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points={pts.join(" ")}
        fill="none"
        stroke="#c9f25b"
        strokeWidth="1.5"
      />
      <polygon
        points={`${pts.join(" ")} ${w},${h} 0,${h}`}
        fill="url(#terrainGrad)"
      />
      {stations.map((t, i) => {
        const x = t * w;
        const peak = Math.exp(-Math.pow((t - 0.62) / 0.13, 2)) * 200;
        const y = h - 60 - peak - t * 30;
        const isA = i === active;
        return (
          <g key={i}>
            <line x1={x} y1={y} x2={x} y2={0} stroke={isA ? "#c9f25b" : "#3a3d3a"} strokeWidth={isA ? 2 : 1} opacity={isA ? 0.9 : 0.4} />
            <rect x={x - 6} y={y - 6} width={12} height={12} fill={isA ? "#c9f25b" : "#181b1d"} stroke="#c9f25b" />
          </g>
        );
      })}
      <line
        x1={progress * w}
        y1={0}
        x2={progress * w}
        y2={h}
        stroke="#ece6d6"
        strokeDasharray="2 4"
        opacity={0.4}
      />
    </svg>
  );
}

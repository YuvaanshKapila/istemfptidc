"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const nodes = [
  { label: "Repair", note: "Module level service replaces full pack replacement, extending useful life." },
  { label: "Remanufacture", note: "Rebuild packs to original specification with recovered cells." },
  { label: "Resell", note: "Verified second life packs reenter the market through a formal channel." },
  { label: "Repurpose", note: "Retired EV packs redirected to stationary storage and grid duty." },
  { label: "Recycle", note: "Hydrometallurgical and pyrometallurgical recovery near 100 percent efficiency." },
];

export default function ClosedLoopDiagram() {
  const [hovered, setHovered] = useState<number | null>(null);
  const size = 360;
  const r = 130;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <motion.svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="mx-auto"
        >
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 80, ease: "linear", repeat: Infinity }}
            style={{ originX: "50%", originY: "50%" }}
          >
            <circle
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke="var(--line)"
              strokeDasharray="3 6"
            />
          </motion.g>
          {nodes.map((n, i) => {
            const angle = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
            const x = cx + r * Math.cos(angle);
            const y = cy + r * Math.sin(angle);
            const isActive = hovered === i;
            return (
              <g
                key={n.label}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer" }}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={isActive ? 30 : 26}
                  fill={isActive ? "var(--accent)" : "var(--background)"}
                  stroke={isActive ? "var(--accent)" : "var(--foreground)"}
                  strokeWidth="1"
                />
                <text
                  x={x}
                  y={y + 4}
                  textAnchor="middle"
                  fontSize="10"
                  fill={isActive ? "#fff" : "var(--foreground)"}
                  className="serif"
                >
                  {n.label}
                </text>
              </g>
            );
          })}
          <text
            x={cx}
            y={cy - 6}
            textAnchor="middle"
            className="serif"
            fontSize="18"
            fill="var(--foreground)"
          >
            The 5R
          </text>
          <text
            x={cx}
            y={cy + 14}
            textAnchor="middle"
            fontSize="11"
            fill="var(--muted)"
            letterSpacing="2"
          >
            CLOSED LOOP
          </text>
        </motion.svg>
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
          2060 / Closed loop model
        </div>
        <h3 className="serif text-3xl md:text-4xl tracking-tight mt-3">
          Five principles, one continuous economy.
        </h3>
        <p className="text-sm text-[color:var(--muted)] mt-3 leading-relaxed">
          The five stage cycle described in Yamanouchi et al., 2026: Repair,
          Remanufacture, Resell, Repurpose, Recycle.
        </p>
        <ul className="mt-6 divide-y hairline border-y hairline">
          {nodes.map((n, i) => (
            <li
              key={n.label}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`py-4 px-1 grid grid-cols-[8rem_1fr] gap-4 transition-colors ${
                hovered === i ? "bg-[color:var(--accent-soft)]" : ""
              }`}
            >
              <span className="serif text-lg">{n.label}</span>
              <span className="text-sm text-[color:var(--muted)] leading-relaxed">
                {n.note}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

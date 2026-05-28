"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceDot,
} from "recharts";

type Point = { year: number; tonnes: number };

export default function WasteChart({
  data,
  highlightYear,
}: {
  data: Point[];
  highlightYear?: number;
}) {
  const highlight = highlightYear
    ? data.find((d) => d.year === highlightYear)
    : undefined;

  return (
    <div className="bg-[color:var(--background-2)] border hairline p-6">
      <div className="flex items-end justify-between mb-4">
        <div>
          <span className="stamp">FIG. // PROJECTED WASTE</span>
          <div className="serif text-2xl tracking-tight mt-2">
            Tonnes reaching end of life
          </div>
        </div>
        <div className="mono text-[11px] text-[color:var(--muted)] numerals">
          {data[0]?.year} / {data[data.length - 1]?.year}
        </div>
      </div>
      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 10, right: 16, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c9f25b" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#c9f25b" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#2a2d2b" strokeDasharray="3 6" vertical={false} />
            <XAxis
              dataKey="year"
              stroke="#8a8676"
              fontSize={11}
              tickLine={false}
              axisLine={{ stroke: "#2a2d2b" }}
            />
            <YAxis
              stroke="#8a8676"
              fontSize={11}
              tickLine={false}
              axisLine={false}
              tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip
              cursor={{ stroke: "#ece6d6", strokeDasharray: "2 4" }}
              contentStyle={{
                background: "#181b1d",
                border: "1px solid #3a3d3a",
                borderRadius: 0,
                fontSize: 12,
                color: "#ece6d6",
              }}
              formatter={(v) => [`${Number(v).toLocaleString()} t`, "Volume"]}
            />
            <Area
              type="monotone"
              dataKey="tonnes"
              stroke="#c9f25b"
              strokeWidth={2}
              fill="url(#g1)"
            />
            {highlight && (
              <ReferenceDot
                x={highlight.year}
                y={highlight.tonnes}
                r={5}
                fill="#ff8a3d"
                stroke="#181b1d"
                strokeWidth={2}
                label={{
                  value: `Peak ${highlight.year}`,
                  position: "top",
                  fill: "#ff8a3d",
                  fontSize: 11,
                }}
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

import RoadmapDossier from "@/components/scene/RoadmapDossier";
import { stats } from "@/data/statsData";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Home() {
  return (
    <>
      <CoverSection />
      <RoadmapDossier />
      <KeyMessagesSection />
      <FiguresSection />
      <FiveRSection />
    </>
  );
}

function CoverSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 noise opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0e0c]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[78vh] h-[78vh] max-w-[80vw] max-h-[80vw] pointer-events-none">
        <div className="absolute inset-0 rounded-full border hairline-strong" style={{ borderStyle: "dashed" }} />
        <div className="absolute inset-[12%] rounded-full border hairline-strong" style={{ borderStyle: "dashed" }} />
        <div className="absolute inset-[24%] rounded-full border hairline-strong" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="mono text-[10px] tracking-[0.4em] text-[color:var(--muted)]">
              DOSSIER // CL-CA-01 / 2026 EDITION
            </div>
            <h1 className="serif text-[clamp(3rem,9vw,9rem)] leading-[0.92] tracking-tight mt-6">
              A roadmap
              <br />
              for the replacement
              <br />
              of <em className="italic accent-text">lithium ion</em>.
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-[color:var(--foreground)]/80 text-base md:text-lg leading-relaxed">
              From Canada's current grid of fragmented provincial rules
              (Jones, 2025) to a closed loop battery economy by 2060. Four
              phases. One terrain. Scroll through the years.
            </p>
            <div className="mt-10 mono text-[10px] tracking-[0.3em] text-[color:var(--accent)] inline-flex items-center gap-3">
              <span className="w-8 h-px bg-[color:var(--accent)]" />
              SCROLL TO ENTER
              <span className="w-8 h-px bg-[color:var(--accent)]" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 p-5 flex items-start justify-end mt-14">
        <div className="flex flex-col gap-1 items-end">
          <span className="stamp">AUTHORS: ABDELBAGI / DONEV / PAKALA / KAPILA</span>
        </div>
      </div>

      <div className="relative z-10 p-5" />
    </section>
  );
}

function KeyMessagesSection() {
  const msgs = [
    {
      n: "01",
      h: "2040 is the tipping point.",
      b: "More than 93,000 batteries reach end of life every year in Canada. The Wild West of provincial rules cannot handle the scale (Jones, 2025).",
    },
    {
      n: "02",
      h: "Current regulation is not enough.",
      b: "Without enforced extended producer responsibility and closed export loopholes, waste flows to less protected countries.",
    },
    {
      n: "03",
      h: "Recovery already works.",
      b: "Hydrometallurgy recovers up to 99 percent of precious metals (Ali et al., 2025). Pyrometallurgy handles wider battery types. Scale, not invention, is the gap.",
    },
    {
      n: "04",
      h: "Incentives are the lever.",
      b: "39.1 percent of EV adoption is driven by government incentives (Awad et al., 2025). Policy is not an accessory to this transition. It is the primary cause.",
    },
    {
      n: "05",
      h: "The public is uninformed.",
      b: "Over 50 percent of the public remain unaware of proper recycling practices (Islam et al., 2022). No policy lands without that gap closing.",
    },
    {
      n: "06",
      h: "The closed loop is economic.",
      b: "Recycling offsets 25 to 40 percent of new mineral mining (IEA, 2024). Recycled material market value has grown 11x since 2015.",
    },
  ];
  return (
    <section className="relative border-t hairline-strong bg-[color:var(--background)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20">
          <div className="lg:sticky lg:top-24 self-start">
            <span className="stamp">SECTION 01 // KEY MESSAGES</span>
            <h2 className="serif text-5xl md:text-6xl leading-[0.95] tracking-tight mt-6">
              What this dossier insists on.
            </h2>
            <p className="text-[color:var(--muted)] mt-6 leading-relaxed">
              Each message threads through all four phases of the roadmap.
              Pull on any one and the rest follow.
            </p>
          </div>
          <ol className="grid gap-px bg-[color:var(--line)] border hairline">
            {msgs.map((m) => (
              <li
                key={m.n}
                className="bg-[color:var(--background)] p-6 md:p-8 grid grid-cols-[4rem_1fr] gap-5"
              >
                <span className="serif text-4xl numerals accent-text">
                  {m.n}
                </span>
                <div>
                  <h3 className="serif text-2xl md:text-3xl tracking-tight">
                    {m.h}
                  </h3>
                  <p className="text-sm text-[color:var(--foreground)]/80 mt-3 leading-relaxed">
                    {m.b}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function FiguresSection() {
  return (
    <section className="relative border-t hairline-strong">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="stamp">SECTION 02 // FIGURES</span>
            <h2 className="serif text-5xl md:text-6xl leading-[0.95] tracking-tight mt-6 max-w-xl">
              The numbers that decide the next forty years.
            </h2>
          </div>
          <div className="mono text-[10px] tracking-[0.25em] text-[color:var(--muted)]">
            Sources on file / Appendix B
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--line)] border hairline">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-[color:var(--background)] p-6 lg:p-7 flex flex-col gap-3 min-h-[220px]"
            >
              <span className="mono text-[10px] tracking-[0.22em] text-[color:var(--muted)]">
                FIG. {String(i + 1).padStart(2, "0")}
              </span>
              <div className="serif text-6xl numerals tracking-tight accent-text mt-2">
                <AnimatedCounter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </div>
              <div className="text-sm leading-snug mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FiveRSection() {
  const nodes = [
    { l: "Repair", n: "Module level service replaces full pack replacement.", deg: -90 },
    { l: "Remanufacture", n: "Rebuild packs to original spec with recovered cells.", deg: -18 },
    { l: "Resell", n: "Verified second life packs reenter the market.", deg: 54 },
    { l: "Repurpose", n: "Retired packs redirected to stationary storage and grid duty.", deg: 126 },
    { l: "Recycle", n: "Hydro- and pyrometallurgical recovery near 100 percent (Beaudet et al., 2020).", deg: 198 },
  ];
  return (
    <section className="relative border-t hairline-strong bg-[color:var(--background-2)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="stamp">SECTION 03 // CLOSED LOOP MODEL</span>
            <h2 className="serif text-5xl md:text-6xl leading-[0.95] tracking-tight mt-6">
              Five stages, one continuous economy.
            </h2>
            <p className="text-[color:var(--muted)] mt-6 leading-relaxed">
              The five stage cycle described in Yamanouchi et al., 2026:
              Repair, Remanufacture, Resell, Repurpose, Recycle. By 2060,
              recovered materials feed straight back into new battery
              production, removing the need for new mining.
            </p>
            <ul className="mt-8 divide-y hairline border-y hairline">
              {nodes.map((n) => (
                <li key={n.l} className="py-4 grid grid-cols-[10rem_1fr] gap-4">
                  <span className="serif text-xl accent-text">{n.l}</span>
                  <span className="text-sm text-[color:var(--foreground)]/80 leading-relaxed">
                    {n.n}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square max-w-[520px] mx-auto w-full">
            <div className="absolute inset-0 rounded-full border hairline" style={{ borderStyle: "dashed" }} />
            <div className="absolute inset-[8%] rounded-full border hairline" />
            <div className="absolute inset-[16%] rounded-full border hairline-strong" />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <div>
                <div className="mono text-[10px] tracking-[0.3em] text-[color:var(--muted)]">
                  THE 5R
                </div>
                <div className="serif text-3xl accent-text mt-2">CLOSED LOOP</div>
                <div className="mono text-[10px] tracking-[0.3em] text-[color:var(--muted)] mt-2">
                  YAMANOUCHI 2026
                </div>
              </div>
            </div>
            {nodes.map((n) => {
              const rad = (n.deg * Math.PI) / 180;
              const r = 42;
              const x = 50 + Math.cos(rad) * r;
              const y = 50 + Math.sin(rad) * r;
              return (
                <div
                  key={n.l}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="w-20 h-20 rounded-full border hairline-strong bg-[color:var(--background)] flex items-center justify-center text-center">
                    <span className="serif text-sm">{n.l}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}


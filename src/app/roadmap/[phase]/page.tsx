import { notFound } from "next/navigation";
import Link from "next/link";
import { phases, getPhase } from "@/data/roadmapData";
import { citations, phaseCitationKeys } from "@/data/citations";
import WasteChart from "@/components/sections/WasteChart";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function generateStaticParams() {
  return phases.map((p) => ({ phase: p.id }));
}

type Params = Promise<{ phase: string }>;

export default async function PhasePage({ params }: { params: Params }) {
  const { phase: phaseId } = await params;
  const phase = getPhase(phaseId);
  if (!phase) notFound();

  const idx = phases.findIndex((p) => p.id === phase.id);
  const prev = idx > 0 ? phases[idx - 1] : null;
  const next = idx < phases.length - 1 ? phases[idx + 1] : null;
  const cites = phaseCitationKeys[phase.id] || [];

  return (
    <main className="min-h-screen pt-20">
      <section className="border-b hairline-strong">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-14">
          <Link
            href="/"
            className="mono text-[10px] tracking-[0.25em] text-[color:var(--muted)] hover:text-[color:var(--accent)] inline-flex items-center gap-2"
          >
            <ArrowLeft size={11} /> RETURN TO DOSSIER
          </Link>
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mt-8">
            <div>
              <span className="stamp">
                PHASE {String(idx + 1).padStart(2, "0")} OF {phases.length}
              </span>
              <h1 className="serif text-[clamp(4rem,12vw,11rem)] leading-[0.88] numerals tracking-tight mt-6">
                {phase.year}
              </h1>
              <p className="serif italic text-2xl md:text-3xl accent-text mt-4">
                {phase.tagline}
              </p>
            </div>
            <p className="text-[color:var(--muted)] max-w-md leading-relaxed">
              {phase.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-px bg-[color:var(--line)] border hairline">
          {[
            { title: "Infrastructure", items: phase.infrastructure, idx: "01" },
            { title: "Policy", items: phase.policy, idx: "02" },
            { title: "Technology", items: phase.technology, idx: "03" },
          ].map((col) => (
            <div key={col.title} className="bg-[color:var(--background-2)] p-7 lg:p-8">
              <div className="flex items-baseline justify-between">
                <h3 className="serif text-3xl tracking-tight">{col.title}</h3>
                <span className="mono text-[10px] numerals text-[color:var(--muted)] tracking-[0.18em]">
                  {col.idx}
                </span>
              </div>
              <ul className="mt-6 space-y-5">
                {col.items.map((item, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[2rem_1fr] gap-2 text-sm leading-relaxed text-[color:var(--foreground)]/85"
                  >
                    <span className="accent-text mono text-[11px] numerals mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-12">
        <WasteChart
          data={phase.chartData}
          highlightYear={phase.id === "2040" ? 2040 : undefined}
        />
      </section>

      {cites.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-16">
          <span className="stamp">REFERENCES // THIS PHASE</span>
          <ul className="mt-5 grid md:grid-cols-2 gap-px bg-[color:var(--line)] border hairline">
            {cites.map((k) => (
              <li
                key={k}
                className="bg-[color:var(--background-2)] p-4 mono text-[11px] text-[color:var(--muted)] leading-relaxed"
              >
                <span className="text-[color:var(--accent)]">[{k}]</span>{" "}
                {citations[k]?.full}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="border-t hairline-strong">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid md:grid-cols-2 gap-4">
          {prev ? (
            <Link
              href={`/roadmap/${prev.id}`}
              className="group flex items-center gap-4 p-5 border hairline bg-[color:var(--background-2)] hover:border-[color:var(--accent)] transition-colors"
            >
              <ArrowLeft size={18} className="text-[color:var(--muted)] group-hover:text-[color:var(--accent)]" />
              <div>
                <div className="mono text-[10px] tracking-[0.22em] text-[color:var(--muted)]">
                  PREVIOUS PHASE
                </div>
                <div className="serif text-xl mt-1">{prev.year} / {prev.tagline}</div>
              </div>
            </Link>
          ) : <span />}
          {next ? (
            <Link
              href={`/roadmap/${next.id}`}
              className="group flex items-center justify-end gap-4 p-5 border hairline bg-[color:var(--background-2)] hover:border-[color:var(--accent)] transition-colors text-right"
            >
              <div>
                <div className="mono text-[10px] tracking-[0.22em] text-[color:var(--muted)]">
                  NEXT PHASE
                </div>
                <div className="serif text-xl mt-1">{next.year} / {next.tagline}</div>
              </div>
              <ArrowRight size={18} className="text-[color:var(--muted)] group-hover:text-[color:var(--accent)]" />
            </Link>
          ) : <span />}
        </div>
      </section>
    </main>
  );
}

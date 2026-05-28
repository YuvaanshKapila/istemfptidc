import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { citations } from "@/data/citations";

export default function AboutPage() {
  const team = [
    { name: "Abdelbagi A.", role: "Roadmap and infrastructure", phase: "2040 section" },
    { name: "Donev E.", role: "Policy and governance", phase: "2030 section" },
    { name: "Pakala P.", role: "Background and context", phase: "Present section" },
    { name: "Kapila Y.", role: "Design, technology, and long term goals", phase: "2060 section" },
  ];

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
          <div className="mt-8">
            <span className="stamp">APPENDIX // ABOUT</span>
            <h1 className="serif text-[clamp(3rem,7vw,6rem)] leading-[0.92] tracking-tight mt-6 max-w-3xl">
              A roadmap is only useful if someone reads it.
            </h1>
            <p className="text-[color:var(--muted)] mt-6 max-w-2xl leading-relaxed">
              This dossier was built for government decision makers and the
              people who hold them to account. It treats the next forty years
              as a single decision space and asks what it would take to close
              the loop on Canada's battery economy.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <span className="stamp">AUTHORS</span>
        <h2 className="serif text-4xl tracking-tight mt-4 mb-8">The team.</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--line)] border hairline">
          {team.map((m) => (
            <li key={m.name} className="bg-[color:var(--background-2)] p-6">
              <div className="mono text-[10px] tracking-[0.2em] text-[color:var(--accent)]">
                {m.phase.toUpperCase()}
              </div>
              <div className="serif text-2xl tracking-tight mt-3">{m.name}</div>
              <div className="text-sm text-[color:var(--muted)] mt-1">{m.role}</div>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
        <span className="stamp">REFERENCES</span>
        <h2 className="serif text-4xl tracking-tight mt-4 mb-8">
          Selected sources.
        </h2>
        <ul className="grid md:grid-cols-2 gap-px bg-[color:var(--line)] border hairline">
          {Object.values(citations).map((c) => (
            <li
              key={c.key}
              className="bg-[color:var(--background-2)] p-5 mono text-[11px] text-[color:var(--muted)] leading-relaxed"
            >
              <span className="text-[color:var(--accent)]">[{c.key}]</span>{" "}
              {c.full}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/statsData";

export default function StatBanner() {
  return (
    <section className="border-y hairline bg-[color:var(--surface)]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12">
          <h2 className="serif text-3xl md:text-4xl tracking-tight max-w-xl">
            The numbers that decide the next four decades.
          </h2>
          <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)] hidden md:block">
            Figures · Sources on file
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--line)] border hairline">
          {stats.map((s, i) => (
            <div key={i} className="bg-[color:var(--surface)] p-7 flex flex-col gap-3">
              <div className="serif text-5xl tracking-tight">
                <AnimatedCounter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
              </div>
              <div className="text-sm leading-snug">{s.label}</div>
              <div className="text-xs text-[color:var(--muted)] mt-auto pt-3 border-t hairline">
                {s.caption}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

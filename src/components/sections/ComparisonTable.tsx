import { batteries, type Rating } from "@/data/batteryTechData";

const ratingStyle: Record<Rating, string> = {
  good: "bg-[color:var(--accent-soft)] text-[color:var(--accent)]",
  moderate: "bg-[#f5edd8] text-[#8a6a16]",
  poor: "bg-[color:var(--warn-soft)] text-[color:var(--warn)]",
};

const ratingLabel: Record<Rating, string> = {
  good: "Strong",
  moderate: "Moderate",
  poor: "Limited",
};

export default function ComparisonTable({ preview = false }: { preview?: boolean }) {
  const rows = [
    { key: "energyDensity", label: "Energy density (Wh/kg)", isNumber: true },
    { key: "cost", label: "Cost profile" },
    { key: "recycleability", label: "Recycleability" },
    { key: "marketReadiness", label: "Market readiness" },
    { key: "dendriteRisk", label: "Dendrite risk" },
    { key: "lifespan", label: "Lifespan (years)", isNumber: true },
  ] as const;

  const visibleRows = preview ? rows.slice(0, 4) : rows;

  return (
    <div className="border hairline bg-[color:var(--surface)] overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b hairline">
            <th className="text-left p-4 font-medium text-[11px] uppercase tracking-[0.16em] text-[color:var(--muted)] w-1/4">
              Attribute
            </th>
            {batteries.map((b) => (
              <th
                key={b.name}
                className="text-left p-4 font-medium text-[11px] uppercase tracking-[0.16em] text-[color:var(--muted)]"
              >
                {b.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {visibleRows.map((row) => (
            <tr key={row.key} className="border-b hairline last:border-b-0">
              <td className="p-4 align-top">
                <div className="serif text-base">{row.label}</div>
              </td>
              {batteries.map((b) => {
                const value = (b as unknown as Record<string, unknown>)[row.key];
                const note = (b as unknown as Record<string, string>)[
                  `${row.key}Note`
                ];
                const isRating = typeof value === "string";
                return (
                  <td key={b.name} className="p-4 align-top">
                    {isRating ? (
                      <span
                        className={`inline-block text-[11px] uppercase tracking-[0.14em] px-2 py-1 rounded-full ${
                          ratingStyle[value as Rating]
                        }`}
                      >
                        {ratingLabel[value as Rating]}
                      </span>
                    ) : (
                      <span className="serif text-2xl numerals">{String(value)}</span>
                    )}
                    {note && (
                      <div className="text-xs text-[color:var(--muted)] mt-2 leading-relaxed">
                        {note}
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

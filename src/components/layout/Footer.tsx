export default function Footer() {
  return (
    <footer className="border-t hairline mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <div className="serif text-2xl tracking-tight">Closed Loop Canada</div>
          <p className="text-sm text-[color:var(--muted)] mt-2 max-w-md">
            A policy roadmap by Abdelbagi A., Donev E., Pakala P., and Kapila Y.
            Prepared for decision makers and the people who hold them to account.
          </p>
        </div>
        <div className="text-xs text-[color:var(--muted)] numerals flex flex-col md:items-end gap-1">
          <span>Document version 0.1</span>
          <span>Last revised 2026</span>
        </div>
      </div>
    </footer>
  );
}

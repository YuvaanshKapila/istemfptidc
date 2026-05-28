export type Phase = {
  id: "present" | "2030" | "2040" | "2060";
  label: string;
  year: string;
  tagline: string;
  summary: string;
  infrastructure: string[];
  policy: string[];
  technology: string[];
  chartData: { year: number; tonnes: number }[];
};

export const phases: Phase[] = [
  {
    id: "present",
    label: "Present",
    year: "Now",
    tagline: "Current solutions.",
    summary:
      "Government incentives drive 39.1 percent of EV adoption (Awad et al., 2025), yet over 50 percent of the public remain unaware of proper recycling practices (Islam et al., 2022). The groundwork starts here.",
    infrastructure: [
      "Fund research into alternatives such as aluminium ion and heat resistant batteries.",
      "Power charging stations with solar energy to lower lifecycle emissions.",
      "Invest in public education about battery disposal and recycling.",
    ],
    policy: [
      "Incentivise recycling through old for new battery swap programs.",
      "Reduce value added tax and toll costs on EVs to grow uptake.",
      "Educate youth via social media and school board wide campaigns.",
    ],
    technology: [
      "Lithium ion remains dominant; refinement focuses on standardising cells for recycling.",
      "Aluminium ion research advances, dendrite formation remains the primary blocker (Biemolt et al., 2020).",
      "Hydrometallurgy already recovers up to 99 percent of precious metals (Ali et al., 2025).",
    ],
    chartData: [
      { year: 2025, tonnes: 4200 },
      { year: 2026, tonnes: 5100 },
      { year: 2027, tonnes: 6400 },
      { year: 2028, tonnes: 8000 },
      { year: 2029, tonnes: 10200 },
    ],
  },
  {
    id: "2030",
    label: "2030",
    year: "2030",
    tagline: "Beginning goals.",
    summary:
      "Aluminium ion enters the EV market in small but growing share. Recycling plants come online. The first effectiveness review tunes the policy mix.",
    infrastructure: [
      "Recycling plants built and operational with benefits given to manufacturers who recycle.",
      "New EV designs begin to fit recycling standards; new EVs contain a significant amount of recycled material.",
      "If targets are missed, more resources are directed at recycling infrastructure and manufacturer incentives.",
    ],
    policy: [
      "A study evaluates how implemented policies have worked so far.",
      "Stakeholder and public feedback feeds policy revision and new goals.",
      "New policies introduced where gaps are identified.",
    ],
    technology: [
      "Aluminium ion dendrite formation slowed to lithium ion levels (Biemolt et al., 2020).",
      "Aluminium ion implemented in EVs as a small but growing market share.",
      "Solid state research continues with limited fleet trials.",
    ],
    chartData: [
      { year: 2030, tonnes: 13000 },
      { year: 2032, tonnes: 19000 },
      { year: 2034, tonnes: 27000 },
      { year: 2036, tonnes: 38000 },
      { year: 2038, tonnes: 55000 },
    ],
  },
  {
    id: "2040",
    label: "2040",
    year: "2040",
    tagline: "The peak of waste.",
    summary:
      "More than 93,000 batteries reach end of life every year. Current Wild West provincial rules cannot handle 2040 scales (Jones, 2025). Recycled material market value has grown 11x since 2015 and recycling now offsets 25 to 40 percent of new mineral mining.",
    infrastructure: [
      "Hydrometallurgical recycling operates at full scale.",
      "Recycling hubs create jobs and reduce NIMBY opposition near disposal sites.",
      "Battery chemistry standardised across manufacturers (Rezaei, 2025) so disassembly is designed in from the start.",
    ],
    policy: [
      "Global regulations close waste export loopholes.",
      "Canada adopts mandatory extended producer responsibility with real enforcement.",
      "Battery passports become an international standard.",
      "Circular economy built into design requirements.",
    ],
    technology: [
      "Lithium ion (refined): standardisation removes recycling barriers.",
      "Aluminium ion (emerging): lower environmental impact than lithium, cheaper raw materials, higher energy density.",
      "Solid state (early stage): theoretically highest energy density, dendrite formation still unsolved, not ready for mass deployment.",
    ],
    chartData: [
      { year: 2038, tonnes: 55000 },
      { year: 2040, tonnes: 93000 },
      { year: 2042, tonnes: 88000 },
      { year: 2044, tonnes: 78000 },
      { year: 2046, tonnes: 65000 },
    ],
  },
  {
    id: "2060",
    label: "2060",
    year: "2060",
    tagline: "Closed loop reached.",
    summary:
      "Hydrometallurgical and pyrometallurgical recycling run at near 100 percent efficiency. Every battery is processed at end of life through a government backed industry. Canada meets its lithium, cobalt, and nickel needs through recovery alone.",
    infrastructure: [
      "Hydrometallurgical processing recovers 90 to 99 percent of critical minerals (Beaudet et al., 2020).",
      "Pyrometallurgical processing handles a wider range of battery types at high temperature.",
      "Recovered materials feed straight back into new battery production, removing the need for new mining.",
    ],
    policy: [
      "Waste export loopholes closed globally; the Extended Producer Mandate is mandatory with real enforcement.",
      "Battery passports an international standard with full lifecycle accountability (Harper et al., 2019).",
      "Vulnerable communities no longer bear costs others created (Compagnoni et al., 2024).",
    ],
    technology: [
      "Solid state dominates; highest theoretical energy density and longest lifespan (Biemolt, 2020).",
      "Aluminium ion fills secondary roles with lower toxicity and strong energy density.",
      "Dendrites fully resolved through decades of research.",
    ],
    chartData: [
      { year: 2050, tonnes: 40000 },
      { year: 2054, tonnes: 22000 },
      { year: 2058, tonnes: 10000 },
      { year: 2060, tonnes: 4000 },
    ],
  },
];

export const getPhase = (id: string) => phases.find((p) => p.id === id);

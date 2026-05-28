export type Rating = "good" | "moderate" | "poor";

export type BatteryTech = {
  name: string;
  energyDensity: number;
  energyDensityNote: string;
  cost: Rating;
  costNote: string;
  recycleability: Rating;
  recycleabilityNote: string;
  marketReadiness: Rating;
  marketReadinessNote: string;
  dendriteRisk: Rating;
  dendriteRiskNote: string;
  lifespan: number;
  lifespanNote: string;
};

export const batteries: BatteryTech[] = [
  {
    name: "Lithium ion",
    energyDensity: 260,
    energyDensityNote: "Wh per kg, current production cells.",
    cost: "moderate",
    costNote: "Mature supply chain, price pressure from raw materials.",
    recycleability: "moderate",
    recycleabilityNote: "Two main routes, recovery rates rising but inconsistent.",
    marketReadiness: "good",
    marketReadinessNote: "Dominant chemistry in the EV market today.",
    dendriteRisk: "moderate",
    dendriteRiskNote: "Well understood, managed at the cell level.",
    lifespan: 8,
    lifespanNote: "Years in typical EV duty cycle.",
  },
  {
    name: "Aluminium ion",
    energyDensity: 160,
    energyDensityNote: "Lower than lithium ion but rising in research cells.",
    cost: "good",
    costNote: "Abundant material, low geopolitical exposure.",
    recycleability: "good",
    recycleabilityNote: "Simpler chemistry, fewer toxic byproducts.",
    marketReadiness: "moderate",
    marketReadinessNote: "Early commercial entry expected by 2030.",
    dendriteRisk: "poor",
    dendriteRiskNote: "Dendrite formation is the primary research blocker.",
    lifespan: 12,
    lifespanNote: "Projected with stable electrolyte chemistry.",
  },
  {
    name: "Solid state",
    energyDensity: 400,
    energyDensityNote: "Projected target, prototype cells already exceed lithium ion.",
    cost: "poor",
    costNote: "Manufacturing scale is the dominant cost barrier.",
    recycleability: "good",
    recycleabilityNote: "Cleaner separation of electrode materials.",
    marketReadiness: "poor",
    marketReadinessNote: "Limited fleet trials, full commercial entry after 2040.",
    dendriteRisk: "good",
    dendriteRiskNote: "Solid electrolytes suppress dendrite growth.",
    lifespan: 15,
    lifespanNote: "Projected lifespan in passenger duty cycle.",
  },
];

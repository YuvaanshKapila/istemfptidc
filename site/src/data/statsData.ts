export type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  caption: string;
};

export const stats: Stat[] = [
  {
    value: 93000,
    suffix: "+",
    label: "EV batteries reaching end of life annually in Canada by 2040",
    caption: "The single largest pressure point on the system.",
  },
  {
    value: 39.1,
    suffix: "%",
    label: "of EV adoption driven by government incentives (Awad et al., 2025)",
    caption: "Policy is not an accessory. It is the primary lever.",
  },
  {
    value: 99,
    suffix: "%",
    label: "of precious metals recoverable through hydrometallurgy (Ali et al., 2025)",
    caption: "The recovery technology already exists. Scale is the question.",
  },
  {
    value: 50,
    suffix: "%+",
    label: "of the public unaware of proper recycling practices (Islam et al., 2022)",
    caption: "Without public knowledge, no policy lands.",
  },
];

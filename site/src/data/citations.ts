export type Citation = {
  key: string;
  short: string;
  full: string;
};

export const citations: Record<string, Citation> = {
  "Ali 2025": {
    key: "Ali 2025",
    short: "Ali et al., 2025",
    full:
      "Ali, A. et al. (2025). Sustainable recycling of end of life electric vehicle batteries. Recycling, 10(2), 68.",
  },
  "Awad 2025": {
    key: "Awad 2025",
    short: "Awad et al., 2025",
    full:
      "Awad, H., De Santis, M., & Bayoumi, E. (2025). Electric vehicle adoption: feasibility and policy. World Electric Vehicle Journal, 16(8), 423.",
  },
  "Beaudet 2020": {
    key: "Beaudet 2020",
    short: "Beaudet et al., 2020",
    full:
      "Beaudet, A. et al. (2020). Key challenges for recycling EV battery materials. Sustainability, 12(14), 5837.",
  },
  "Biemolt 2020": {
    key: "Biemolt 2020",
    short: "Biemolt et al., 2020",
    full:
      "Biemolt, J. et al. (2020). Beyond lithium based batteries. Materials, 13(2), 425.",
  },
  "Cheng 2026": {
    key: "Cheng 2026",
    short: "Cheng et al., 2026",
    full:
      "Cheng, J. et al. (2026). Psychological drivers of EV battery recycling. Frontiers in Psychology, 16, 1634913.",
  },
  "Islam 2022": {
    key: "Islam 2022",
    short: "Islam et al., 2022",
    full:
      "Islam, M. T. et al. (2022). Waste battery disposal and recycling behavior. Environ. Sci. Pollut. Res., 29, 58980 to 59001.",
  },
  "Jones 2025": {
    key: "Jones 2025",
    short: "Jones, 2025",
    full:
      "Jones, A. M. (2025, June 1). Canada had big EV battery recycling plans, but without regulations it is the Wild West. CBC News.",
  },
  "Rezaei 2025": {
    key: "Rezaei 2025",
    short: "Rezaei et al., 2025",
    full:
      "Rezaei, M. et al. (2025). A review of lithium ion battery recycling for enabling a circular economy. Journal of Power Sources, 630, 236157.",
  },
  "Harper 2019": {
    key: "Harper 2019",
    short: "Harper et al., 2019",
    full:
      "Harper, G. et al. (2019). Recycling lithium ion batteries from electric vehicles. Nature, 575, 75 to 86.",
  },
  "Compagnoni 2024": {
    key: "Compagnoni 2024",
    short: "Compagnoni et al., 2024",
    full:
      "Compagnoni, M. et al. (2024). Extended producer responsibility and trade flows in waste: the case of batteries. Environ. Resour. Econ., 88(1).",
  },
  "Yamanouchi 2026": {
    key: "Yamanouchi 2026",
    short: "Yamanouchi et al., 2026",
    full:
      "Yamanouchi, E. et al. (2026, Jan 20). How is Canada managing the end of life for EV batteries? Gowling WLG.",
  },
  "IEA 2024": {
    key: "IEA 2024",
    short: "IEA, 2024",
    full:
      "International Energy Agency. (2024). Recycling of critical minerals. IEA.",
  },
};

export const phaseCitationKeys: Record<string, string[]> = {
  present: ["Awad 2025", "Islam 2022", "Ali 2025", "Cheng 2026"],
  "2030": ["Biemolt 2020", "Rezaei 2025"],
  "2040": ["Jones 2025", "Rezaei 2025", "Harper 2019", "IEA 2024"],
  "2060": ["Beaudet 2020", "Biemolt 2020", "Yamanouchi 2026", "Compagnoni 2024", "Harper 2019"],
};

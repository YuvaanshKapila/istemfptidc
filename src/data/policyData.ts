export type PolicyLevel =
  | "Federal"
  | "Provincial"
  | "Municipal"
  | "Industry"
  | "Education";

export type Impact = "High" | "Medium" | "Emerging";

export type Policy = {
  name: string;
  level: PolicyLevel;
  timeline: string;
  action: string;
  impact: Impact;
};

export const policies: Policy[] = [
  {
    name: "Federal extended producer responsibility",
    level: "Federal",
    timeline: "Phase in by 2030, enforcement by 2040",
    action:
      "Hold manufacturers financially and physically responsible for battery end of life across the country.",
    impact: "High",
  },
  {
    name: "Battery passport mandate",
    level: "Federal",
    timeline: "Required on new EV batteries by 2030",
    action:
      "Track chemistry, origin, state of health, and recycling pathway for every cell sold in Canada.",
    impact: "High",
  },
  {
    name: "Close the waste export loophole",
    level: "Federal",
    timeline: "Legislation by 2035",
    action:
      "End the practice of routing spent batteries offshore to avoid domestic standards.",
    impact: "High",
  },
  {
    name: "Provincial recycling hub funding",
    level: "Provincial",
    timeline: "Capital deployed 2027 to 2032",
    action:
      "Co finance regional recycling hubs in Ontario, Quebec, and British Columbia.",
    impact: "High",
  },
  {
    name: "Provincial recycled content standards",
    level: "Provincial",
    timeline: "Effective 2032",
    action:
      "Set minimum recycled content for batteries sold or registered within the province.",
    impact: "Medium",
  },
  {
    name: "Municipal collection infrastructure",
    level: "Municipal",
    timeline: "Roll out 2026 to 2030",
    action:
      "Install drop off points at depots, transit hubs, and curb side collection for small batteries.",
    impact: "Medium",
  },
  {
    name: "Zoning for circular industry parks",
    level: "Municipal",
    timeline: "By 2030",
    action:
      "Reserve industrial land near transport corridors for co located recycling and remanufacturing.",
    impact: "Medium",
  },
  {
    name: "Manufacturer recycling credits",
    level: "Industry",
    timeline: "Effective 2028",
    action:
      "Issue tradable credits to manufacturers who exceed recovery and reuse thresholds.",
    impact: "Medium",
  },
  {
    name: "Battery swap and second life programs",
    level: "Industry",
    timeline: "Pilots running by 2027",
    action:
      "Redirect retired EV packs into stationary storage and grid support before recycling.",
    impact: "Medium",
  },
  {
    name: "Curriculum integration",
    level: "Education",
    timeline: "By 2028 in K to 12 systems",
    action:
      "Bring battery economy and circular design into science and civics curricula.",
    impact: "Emerging",
  },
  {
    name: "Youth communication campaign",
    level: "Education",
    timeline: "Ongoing",
    action:
      "Use social media and school boards to build a generation that expects circular product design.",
    impact: "Emerging",
  },
];

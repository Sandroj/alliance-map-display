import { StrategicLensId } from "./alliance-types";

export interface StrategicLens {
  id: StrategicLensId;
  label: string;
  shortLabel: string;
  description: string;
}

export const STRATEGIC_LENSES: StrategicLens[] = [
  {
    id: "alliances",
    label: "Alliances",
    shortLabel: "Alliances",
    description: "Formal memberships in treaties, organizations and diplomatic groupings.",
  },
  {
    id: "security",
    label: "Security",
    shortLabel: "Security",
    description: "Defense relationships, access arrangements, nuclear structures and military networks.",
  },
  {
    id: "trade",
    label: "Trade",
    shortLabel: "Trade",
    description: "Trade blocs, customs unions and regional economic integration.",
  },
  {
    id: "energy-resources",
    label: "Energy & Resources",
    shortLabel: "Resources",
    description: "Energy systems, critical minerals, food leverage and strategic supply chains.",
  },
  {
    id: "influence",
    label: "Influence",
    shortLabel: "Influence",
    description: "Political, cultural, linguistic and governance networks that shape alignment.",
  },
  {
    id: "conflict-disputes",
    label: "Conflict & Disputes",
    shortLabel: "Disputes",
    description: "Structural conflict context, disputed territories and frozen participation.",
  },
  {
    id: "chokepoints",
    label: "Chokepoints",
    shortLabel: "Routes",
    description: "Strategic sea lanes, canals, pipelines, ports and logistics corridors.",
  },
];

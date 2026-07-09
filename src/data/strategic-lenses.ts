import { StrategicLensId } from "./alliance-types";

export interface StrategicLens {
  id: StrategicLensId;
  label: string;
  shortLabel: string;
  description: string;
  accent: string;
  status: "live" | "mapped" | "planned";
}

export const STRATEGIC_LENSES: StrategicLens[] = [
  {
    id: "alliances",
    label: "Alliances",
    shortLabel: "Alliances",
    description: "Formal memberships in treaties, organizations and diplomatic groupings.",
    accent: "#2563eb",
    status: "live",
  },
  {
    id: "security",
    label: "Security",
    shortLabel: "Security",
    description: "Defense relationships, access arrangements, nuclear structures and military networks.",
    accent: "#dc2626",
    status: "mapped",
  },
  {
    id: "trade",
    label: "Trade",
    shortLabel: "Trade",
    description: "Trade blocs, customs unions and regional economic integration.",
    accent: "#ca8a04",
    status: "mapped",
  },
  {
    id: "energy-resources",
    label: "Energy & Resources",
    shortLabel: "Resources",
    description: "Energy systems, critical minerals, food leverage and strategic supply chains.",
    accent: "#059669",
    status: "mapped",
  },
  {
    id: "influence",
    label: "Influence",
    shortLabel: "Influence",
    description: "Political, cultural, linguistic and governance networks that shape alignment.",
    accent: "#7c3aed",
    status: "mapped",
  },
  {
    id: "conflict-disputes",
    label: "Conflict & Disputes",
    shortLabel: "Disputes",
    description: "Structural conflict context, disputed territories and frozen participation.",
    accent: "#be123c",
    status: "planned",
  },
  {
    id: "chokepoints",
    label: "Chokepoints",
    shortLabel: "Routes",
    description: "Strategic sea lanes, canals, pipelines, ports and logistics corridors.",
    accent: "#0891b2",
    status: "planned",
  },
];

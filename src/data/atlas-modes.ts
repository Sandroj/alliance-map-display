import { Activity, Crosshair, Flag, Gauge, Globe2, Scale, ShieldAlert, Swords } from "lucide-react";

export type AtlasModeId = "diplomacy" | "conflict" | "war" | "countries";

export interface ScenarioPreset {
  id: string;
  title: string;
  region: string;
  stakes: string;
  blue: string[];
  red: string[];
  green?: string[];
  pressure: number;
  nuclearRisk?: number;
  insight: string;
  recommendedLens: string;
}

export interface CountryPowerRow {
  code: string;
  name: string;
  overall: number;
  military: number;
  economic: number;
  diplomatic: number;
  technology: number;
  importance: number;
}

export const ATLAS_MODE_NAV = [
  {
    id: "diplomacy" as const,
    label: "Diplomacy",
    path: "/diplomacy",
    icon: Globe2,
    tone: "blue",
  },
  {
    id: "conflict" as const,
    label: "Conflict",
    path: "/conflict",
    icon: Scale,
    tone: "rose",
  },
  {
    id: "war" as const,
    label: "War",
    path: "/war",
    icon: ShieldAlert,
    tone: "amber",
  },
  {
    id: "countries" as const,
    label: "Countries",
    path: "/countries",
    icon: Flag,
    tone: "emerald",
  },
];

export const MODE_COPY = {
  diplomacy: {
    eyebrow: "Country lens",
    title: "Diplomacy mode",
    deck: "Pick a country, then read the world from its position: friends, rivals, formal clubs, pressure routes and open disputes.",
    verbs: ["Select country", "Compare dimensions", "Spot contradictions"],
    icon: Globe2,
  },
  conflict: {
    eyebrow: "Scenario lens",
    title: "Conflict mode",
    deck: "Build two or three-sided scenarios and see which existing layers explain why states would lean, hedge, or stay neutral.",
    verbs: ["Choose sides", "Load presets", "Watch pressure shift"],
    icon: Scale,
  },
  war: {
    eyebrow: "Escalation lens",
    title: "War mode",
    deck: "Turn a dispute into an escalation board: who is pulled in, which nuclear powers matter, and where routes become pressure points.",
    verbs: ["Attacker", "Defender", "Escalation meter"],
    icon: ShieldAlert,
  },
  countries: {
    eyebrow: "Power lens",
    title: "Countries mode",
    deck: "Rank countries by strategic weight and quickly see whether power comes from military reach, economics, diplomacy or technology.",
    verbs: ["Rank", "Filter", "Compare"],
    icon: Flag,
  },
};

export const SCENARIO_PRESETS: ScenarioPreset[] = [
  {
    id: "china-taiwan",
    title: "China-Taiwan crisis",
    region: "Indo-Pacific",
    stakes: "Semiconductors, sea lanes, US alliances",
    blue: ["Taiwan", "United States", "Japan", "Philippines"],
    red: ["China"],
    pressure: 88,
    nuclearRisk: 66,
    recommendedLens: "Security + Routes",
    insight: "The decisive split is not just diplomatic recognition; it is the gap between military access and economic dependence on China.",
  },
  {
    id: "russia-ukraine",
    title: "Russia-Ukraine expansion",
    region: "Europe",
    stakes: "NATO deterrence, grain, Black Sea access",
    blue: ["Ukraine", "Poland", "United Kingdom", "United States"],
    red: ["Russia", "Belarus"],
    pressure: 82,
    nuclearRisk: 72,
    recommendedLens: "Disputes + Bosporus",
    insight: "The Black Sea, sanctions architecture and NATO eastern flank explain the conflict better than formal alliance chips alone.",
  },
  {
    id: "israel-iran",
    title: "Israel-Iran regional war",
    region: "Middle East",
    stakes: "Missiles, proxies, oil routes, Gulf airspace",
    blue: ["Israel", "United States", "United Kingdom"],
    red: ["Iran"],
    green: ["Saudi Arabia", "Turkey"],
    pressure: 79,
    nuclearRisk: 54,
    recommendedLens: "Security + Hormuz",
    insight: "A three-way read is more useful than a binary map: Gulf states may oppose Iran while avoiding full visible alignment with Israel.",
  },
  {
    id: "india-pakistan",
    title: "India-Pakistan escalation",
    region: "South Asia",
    stakes: "Kashmir, nuclear threshold, China factor",
    blue: ["India"],
    red: ["Pakistan"],
    green: ["China"],
    pressure: 76,
    nuclearRisk: 86,
    recommendedLens: "Disputes + Nuclear",
    insight: "This is the clearest case where a local territorial dispute and nuclear architecture must be shown together.",
  },
  {
    id: "red-sea-shipping",
    title: "Red Sea shipping disruption",
    region: "Red Sea",
    stakes: "Suez traffic, energy prices, maritime insurance",
    blue: ["Egypt", "Saudi Arabia", "United States"],
    red: ["Yemen", "Iran"],
    pressure: 71,
    nuclearRisk: 28,
    recommendedLens: "Routes + Trade",
    insight: "The user needs to see shipping exposure first; alliances only explain the response once the route risk is visible.",
  },
  {
    id: "sahel-fragmentation",
    title: "Sahel bloc fragmentation",
    region: "West Africa",
    stakes: "ECOWAS, coups, Russian influence, migration",
    blue: ["Nigeria", "Ghana", "Senegal"],
    red: ["Mali", "Burkina Faso", "Niger"],
    pressure: 64,
    recommendedLens: "Influence + Disputes",
    insight: "This is not a classic war-board. It is an institutional fracture where regional organizations, regime alignment and security patrons matter.",
  },
];

export const COUNTRY_POWER_ROWS: CountryPowerRow[] = [
  { code: "USA", name: "United States", overall: 100, military: 100, economic: 100, diplomatic: 96, technology: 98, importance: 100 },
  { code: "CHN", name: "China", overall: 65, military: 86, economic: 94, diplomatic: 78, technology: 87, importance: 97 },
  { code: "IND", name: "India", overall: 18, military: 73, economic: 66, diplomatic: 61, technology: 55, importance: 84 },
  { code: "RUS", name: "Russia", overall: 17, military: 82, economic: 49, diplomatic: 58, technology: 47, importance: 78 },
  { code: "JPN", name: "Japan", overall: 13, military: 58, economic: 79, diplomatic: 67, technology: 88, importance: 68 },
  { code: "GBR", name: "United Kingdom", overall: 13, military: 65, economic: 67, diplomatic: 82, technology: 74, importance: 70 },
  { code: "FRA", name: "France", overall: 13, military: 63, economic: 66, diplomatic: 84, technology: 70, importance: 69 },
  { code: "DEU", name: "Germany", overall: 11, military: 54, economic: 84, diplomatic: 72, technology: 86, importance: 73 },
  { code: "SAU", name: "Saudi Arabia", overall: 8, military: 69, economic: 58, diplomatic: 65, technology: 39, importance: 62 },
  { code: "KOR", name: "South Korea", overall: 8, military: 66, economic: 62, diplomatic: 58, technology: 84, importance: 59 },
  { code: "BRA", name: "Brazil", overall: 7, military: 50, economic: 61, diplomatic: 66, technology: 42, importance: 63 },
  { code: "TUR", name: "Turkey", overall: 6, military: 61, economic: 49, diplomatic: 64, technology: 50, importance: 61 },
];

export const ANALYSIS_RAIL = [
  {
    title: "From layers to answers",
    body: "The map should not ask users to know which layer matters. Modes turn data into questions: who aligns, what escalates, which route breaks, and what country has leverage.",
    icon: Activity,
  },
  {
    title: "Contradiction first",
    body: "The useful insight is often the mismatch: security ally but trade-dependent rival, diplomatic partner but route-risk competitor, formal member but weak commitment.",
    icon: Crosshair,
  },
  {
    title: "Game-like, not toy-like",
    body: "Scenario cards, pressure meters and side chips give the user a game-board feeling while keeping the claims transparent and source-backed.",
    icon: Gauge,
  },
  {
    title: "No fake precision",
    body: "Until pairwise scoring exists, the app should show curated scenarios and structural layers. It should avoid pretending it can predict exact country behavior.",
    icon: Swords,
  },
];

export type AllianceCategory = "militair" | "handel" | "politiek" | "religieus";

export type MemberStatus = "observer" | "dialogue" | "partner" | "suspended";

export type StrategicLensId =
  | "alliances"
  | "security"
  | "trade"
  | "energy-resources"
  | "influence"
  | "conflict-disputes"
  | "chokepoints";

export type StrategicItemKind =
  | "organization"
  | "treaty"
  | "initiative"
  | "forum"
  | "infrastructure"
  | "resource"
  | "route"
  | "status";

export type Formality = "binding" | "formal" | "informal" | "unilateral" | "analytical";

export type ConfidenceLevel = "high" | "medium" | "low";

export type ReviewCadence = "yearly" | "quarterly" | "event-driven";

export interface SourceRef {
  title: string;
  url: string;
  checkedAt?: string; // ISO date, e.g. 2026-07-08
}

export interface AllianceMember {
  code: string;        // ISO 3166-1 alpha-3, of pseudo-code (EU, AU, XAB, XSO, XTR)
  joinYear?: number;   // jaar waarin dit land zijn huidige status kreeg, indien betrouwbaar bekend
  status?: MemberStatus; // afwezig = volwaardig lid
}

export interface Alliance {
  id: string;
  name: string;
  color: string;
  description: string;
  categories: AllianceCategory[]; // eerste = primaire categorie
  members: AllianceMember[];
  foundedYear?: number;
  mapNote?: string;
  wikipediaTitle?: string;
  kind?: StrategicItemKind;
  formality?: Formality;
  lensIds?: StrategicLensId[];
  asOf?: string; // ISO date or year label for the represented state of the data
  reviewCadence?: ReviewCadence;
  confidence?: ConfidenceLevel;
  sourceRefs?: SourceRef[];
  editorialNote?: string;
}

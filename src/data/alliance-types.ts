export type AllianceCategory = "militair" | "handel" | "politiek" | "religieus";

export type MemberStatus = "observer" | "dialogue" | "partner";

export interface AllianceMember {
  code: string;        // ISO 3166-1 alpha-3, of pseudo-code (EU, AU, XAB, XSO, XTR)
  joinYear: number;    // jaar waarin dit land zijn huidige status kreeg
  status?: MemberStatus; // afwezig = volwaardig lid
}

export interface Alliance {
  id: string;
  name: string;
  color: string;
  description: string;
  categories: AllianceCategory[]; // eerste = primaire categorie
  members: AllianceMember[];
  mapNote?: string;
  wikipediaTitle?: string;
}
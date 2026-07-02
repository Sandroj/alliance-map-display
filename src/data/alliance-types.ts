export type AllianceCategory = "militair" | "handel" | "politiek" | "religieus";

export interface Alliance {
  id: string;
  name: string;
  color: string;
  description: string;
  category: AllianceCategory;
  members: Array<{
    code: string;
    joinYear: number;
  }>;
}

export type AllianceId = 
  | "africacorps" | "africanunion" | "asean" | "atlanticpact"
  | "aukus" | "bri" | "brics" | "celac" | "cptpp" 
  | "eu" | "g7" | "g20" | "msp" | "nac" | "nato"
  | "oecd" | "oic" | "opec" | "quad" | "rcep" 
  | "sco" | "un" | "usmca";
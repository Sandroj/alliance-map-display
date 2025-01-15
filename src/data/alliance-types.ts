export interface Alliance {
  id: string;
  name: string;
  color: string;
  description: string;
  members: Array<{
    code: string;
    joinYear: number;
  }>;
}

export type AllianceId = 
  | "asean" | "aukus" | "bri" | "brics" | "celac" | "cptpp" 
  | "eu" | "g7" | "g20" | "nato" | "oecd" | "oic" 
  | "opec" | "quad" | "rcep" | "sco" | "usmca";
export interface Alliance {
  id: string;
  name: string;
  color: string;
  description: string;
  members: Array<{
    code: string;
    joinYear: number;
  }>;
  dialoguePartners?: Array<{
    code: string;
    since: number;
  }>;
  showDialoguePartners?: boolean;
}

export type AllianceId = 
  | "asean" | "aukus" | "atlanticpact" | "africancorps" | "africanunion"
  | "bri" | "brics" | "celac" | "cptpp" | "eu" | "g7" | "g20" 
  | "icc" | "msp" | "nato" | "nac" | "oecd" | "oic" 
  | "opec" | "quad" | "rcep" | "sco" | "un" | "usmca";
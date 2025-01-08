export interface Alliance {
  id: string;
  name: string;
  color: string;
  members: string[];
}

export const alliances: Alliance[] = [
  {
    id: "nato",
    name: "NATO",
    color: "#004B87",
    members: ["USA", "GBR", "FRA", "DEU", "ITA", "ESP", "CAN", "POL", "TUR", "NLD", "BEL", "DNK", "NOR", "LUX", "ISL", "GRC", "PRT", "CZE", "HUN", "ROU", "BGR", "SVK", "SVN", "EST", "LVA", "LTU", "ALB", "HRV", "MNE", "MKD", "FIN", "SWE"]
  },
  {
    id: "eu",
    name: "European Union",
    color: "#003399",
    members: ["AUT", "BEL", "BGR", "HRV", "CYP", "CZE", "DNK", "EST", "FIN", "FRA", "DEU", "GRC", "HUN", "IRL", "ITA", "LVA", "LTU", "LUX", "MLT", "NLD", "POL", "PRT", "ROU", "SVK", "SVN", "ESP", "SWE"]
  },
  {
    id: "asean",
    name: "ASEAN",
    color: "#BD1E51",
    members: ["BRN", "KHM", "IDN", "LAO", "MYS", "MMR", "PHL", "SGP", "THA", "VNM"]
  },
  {
    id: "brics",
    name: "BRICS",
    color: "#F39237",
    members: ["BRA", "RUS", "IND", "CHN", "ZAF"]
  }
];
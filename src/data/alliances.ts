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
  },
  {
    id: "g7",
    name: "G7",
    color: "#2E5090",
    members: ["USA", "GBR", "FRA", "DEU", "ITA", "JPN", "CAN"]
  },
  {
    id: "opec",
    name: "OPEC",
    color: "#006B3E",
    members: ["DZA", "AGO", "COG", "GNQ", "GAB", "IRN", "IRQ", "KWT", "LBY", "NGA", "SAU", "ARE", "VEN"]
  },
  {
    id: "icc",
    name: "ICC",
    color: "#8B4513",
    members: ["AFG", "ALB", "AND", "ATG", "ARG", "AUS", "AUT", "BGD", "BRB", "BEL", "BLZ", "BEN", "BOL", "BIH", "BWA", "BRA", "BGR", "BFA", "BDI", "CPV", "KHM", "CMR", "CAN", "CAF", "TCD", "CHL", "COL", "COM", "COG", "COK", "CRI", "HRV", "CYP", "CZE", "COD", "DNK", "DJI", "DMA", "DOM", "ECU", "SLV", "EST", "FJI", "FIN", "FRA", "GAB", "GMB", "GEO", "DEU", "GHA", "GRC", "GRD", "GTM", "GIN", "GNB", "GUY", "HND", "HUN", "ISL", "IRL", "ITA", "CIV", "JPN", "JOR", "KEN", "KIR", "LVA", "LSO", "LBR", "LIE", "LTU", "LUX", "MDG", "MWI", "MDV", "MLI", "MLT", "MHL", "MUS", "MEX", "MDA", "MNG", "MNE", "NAM", "NRU", "NLD", "NZL", "NER", "NGA", "MKD", "NOR", "PAN", "PRY", "PER", "PHL", "POL", "PRT", "KOR", "ROU", "WSM", "SMR", "SEN", "SRB", "SYC", "SLE", "SVK", "SVN", "SLB", "ZAF", "ESP", "LKA", "KNA", "LCA", "VCT", "SUR", "SWE", "CHE", "TJK", "TZA", "TLS", "TTO", "TUN", "GBR", "UGA", "URY", "VUT", "VEN", "ZMB"]
  },
  {
    id: "bri",
    name: "Belt and Road Initiative",
    color: "#E63946",
    members: ["CHN", "PAK", "BGD", "MMR", "LKA", "NPL", "AFG", "KAZ", "KGZ", "TJK", "UZB", "TKM", "IRN", "IRQ", "SYR", "TUR", "SAU", "EGY", "ETH", "KEN", "TZA", "ZAF", "AGO", "NGA", "DZA", "MAR", "ITA", "GRC", "HUN", "POL", "RUS", "MNG", "IDN", "MYS", "THA", "VNM", "KHM", "LAO", "PHL"]
  },
  {
    id: "quad",
    name: "QUAD",
    color: "#4A90E2",
    members: ["USA", "JPN", "IND", "AUS"]
  },
  {
    id: "celac",
    name: "CELAC",
    color: "#45B7D1",
    members: ["ATG", "ARG", "BHS", "BRB", "BLZ", "BOL", "BRA", "CHL", "COL", "CRI", "CUB", "DMA", "DOM", "ECU", "SLV", "GRD", "GTM", "GUY", "HTI", "HND", "JAM", "MEX", "NIC", "PAN", "PRY", "PER", "KNA", "LCA", "VCT", "SUR", "TTO", "URY", "VEN"]
  },
  {
    id: "oic",
    name: "OIC",
    color: "#2A9D8F",
    members: ["AFG", "ALB", "DZA", "AZE", "BHR", "BGD", "BEN", "BRN", "BFA", "CMR", "TCD", "COM", "CIV", "DJI", "EGY", "GAB", "GMB", "GIN", "GNB", "GUY", "IDN", "IRN", "IRQ", "JOR", "KAZ", "KWT", "KGZ", "LBN", "LBY", "MYS", "MDV", "MLI", "MRT", "MAR", "MOZ", "NER", "NGA", "OMN", "PAK", "PSE", "QAT", "SAU", "SEN", "SLE", "SOM", "SDN", "SUR", "SYR", "TJK", "TGO", "TUN", "TUR", "TKM", "UGA", "ARE", "UZB", "YEM"]
  }
];
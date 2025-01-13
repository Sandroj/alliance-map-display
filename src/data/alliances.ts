export interface Alliance {
  id: string;
  name: string;
  color: string;
  members: Array<{
    code: string;
    joinYear: number;
  }>;
}

export const alliances: Alliance[] = [
  {
    id: "nato",
    name: "NATO",
    color: "#004B87",
    members: [
      { code: "USA", joinYear: 1949 }, { code: "GBR", joinYear: 1949 }, 
      { code: "FRA", joinYear: 1949 }, { code: "DEU", joinYear: 1955 },
      { code: "ITA", joinYear: 1949 }, { code: "ESP", joinYear: 1982 },
      { code: "CAN", joinYear: 1949 }, { code: "POL", joinYear: 1999 },
      { code: "TUR", joinYear: 1952 }, { code: "NLD", joinYear: 1949 },
      { code: "BEL", joinYear: 1949 }, { code: "DNK", joinYear: 1949 },
      { code: "NOR", joinYear: 1949 }, { code: "LUX", joinYear: 1949 },
      { code: "ISL", joinYear: 1949 }, { code: "GRC", joinYear: 1952 },
      { code: "PRT", joinYear: 1949 }, { code: "CZE", joinYear: 1999 },
      { code: "HUN", joinYear: 1999 }, { code: "ROU", joinYear: 2004 },
      { code: "BGR", joinYear: 2004 }, { code: "SVK", joinYear: 2004 },
      { code: "SVN", joinYear: 2004 }, { code: "EST", joinYear: 2004 },
      { code: "LVA", joinYear: 2004 }, { code: "LTU", joinYear: 2004 },
      { code: "ALB", joinYear: 2009 }, { code: "HRV", joinYear: 2009 },
      { code: "MNE", joinYear: 2017 }, { code: "MKD", joinYear: 2020 },
      { code: "FIN", joinYear: 2023 }, { code: "SWE", joinYear: 2023 }
    ]
  },
  {
    id: "eu",
    name: "European Union",
    color: "#003399",
    members: [
      { code: "AUT", joinYear: 1958 }, { code: "BEL", joinYear: 1958 },
      { code: "BGR", joinYear: 2007 }, { code: "HRV", joinYear: 2013 },
      { code: "CYP", joinYear: 2004 }, { code: "CZE", joinYear: 2004 },
      { code: "DNK", joinYear: 1973 }, { code: "EST", joinYear: 2004 },
      { code: "FIN", joinYear: 1995 }, { code: "FRA", joinYear: 1958 },
      { code: "DEU", joinYear: 1958 }, { code: "GRC", joinYear: 1981 },
      { code: "HUN", joinYear: 2004 }, { code: "IRL", joinYear: 1973 },
      { code: "ITA", joinYear: 1958 }, { code: "LVA", joinYear: 2004 },
      { code: "LTU", joinYear: 2004 }, { code: "LUX", joinYear: 1958 },
      { code: "MLT", joinYear: 2004 }, { code: "NLD", joinYear: 1958 },
      { code: "POL", joinYear: 2004 }, { code: "PRT", joinYear: 1986 },
      { code: "ROU", joinYear: 2007 }, { code: "SVK", joinYear: 2004 },
      { code: "SVN", joinYear: 2004 }, { code: "ESP", joinYear: 1986 },
      { code: "SWE", joinYear: 1995 }
    ]
  },
  {
    id: "asean",
    name: "ASEAN",
    color: "#BD1E51",
    members: [
      { code: "BRN", joinYear: 1967 }, { code: "KHM", joinYear: 1999 },
      { code: "IDN", joinYear: 1967 }, { code: "LAO", joinYear: 1997 },
      { code: "MYS", joinYear: 1967 }, { code: "MMR", joinYear: 1997 },
      { code: "PHL", joinYear: 1967 }, { code: "SGP", joinYear: 1967 },
      { code: "THA", joinYear: 1967 }, { code: "VNM", joinYear: 1995 }
    ]
  },
  {
    id: "brics",
    name: "BRICS",
    color: "#F39237",
    members: [
      { code: "BRA", joinYear: 2010 }, { code: "RUS", joinYear: 2010 },
      { code: "IND", joinYear: 2010 }, { code: "CHN", joinYear: 2010 },
      { code: "ZAF", joinYear: 2010 }
    ]
  },
  {
    id: "g7",
    name: "G7",
    color: "#2E5090",
    members: [
      { code: "USA", joinYear: 1976 }, { code: "GBR", joinYear: 1976 },
      { code: "FRA", joinYear: 1976 }, { code: "DEU", joinYear: 1976 },
      { code: "ITA", joinYear: 1976 }, { code: "JPN", joinYear: 1976 },
      { code: "CAN", joinYear: 1976 }
    ]
  },
  {
    id: "opec",
    name: "OPEC",
    color: "#006B3E",
    members: [
      { code: "DZA", joinYear: 1960 }, { code: "AGO", joinYear: 2007 },
      { code: "COG", joinYear: 2016 }, { code: "GNQ", joinYear: 2011 },
      { code: "GAB", joinYear: 1975 }, { code: "IRN", joinYear: 1960 },
      { code: "IRQ", joinYear: 1960 }, { code: "KWT", joinYear: 1960 },
      { code: "LBY", joinYear: 1960 }, { code: "NGA", joinYear: 1971 },
      { code: "SAU", joinYear: 1960 }, { code: "ARE", joinYear: 1967 },
      { code: "VEN", joinYear: 1960 }
    ]
  },
  {
    id: "icc",
    name: "ICC",
    color: "#8B4513",
    members: [
      { code: "AFG", joinYear: 2001 }, { code: "ALB", joinYear: 2001 },
      { code: "AND", joinYear: 2001 }, { code: "ATG", joinYear: 2001 },
      { code: "ARG", joinYear: 2001 }, { code: "AUS", joinYear: 2001 },
      { code: "AUT", joinYear: 2001 }, { code: "BGD", joinYear: 2001 },
      { code: "BRB", joinYear: 2001 }, { code: "BEL", joinYear: 2001 },
      { code: "BLZ", joinYear: 2001 }, { code: "BEN", joinYear: 2001 },
      { code: "BOL", joinYear: 2001 }, { code: "BIH", joinYear: 2001 },
      { code: "BWA", joinYear: 2001 }, { code: "BRA", joinYear: 2001 },
      { code: "BGR", joinYear: 2001 }, { code: "BFA", joinYear: 2001 },
      { code: "BDI", joinYear: 2001 }, { code: "CPV", joinYear: 2001 },
      { code: "KHM", joinYear: 2001 }, { code: "CMR", joinYear: 2001 },
      { code: "CAN", joinYear: 2001 }, { code: "CAF", joinYear: 2001 },
      { code: "TCD", joinYear: 2001 }, { code: "CHL", joinYear: 2001 },
      { code: "COL", joinYear: 2001 }, { code: "COM", joinYear: 2001 },
      { code: "COG", joinYear: 2001 }, { code: "COK", joinYear: 2001 },
      { code: "CRI", joinYear: 2001 }, { code: "HRV", joinYear: 2001 },
      { code: "CYP", joinYear: 2001 }, { code: "CZE", joinYear: 2001 },
      { code: "COD", joinYear: 2001 }, { code: "DNK", joinYear: 2001 },
      { code: "DJI", joinYear: 2001 }, { code: "DMA", joinYear: 2001 },
      { code: "DOM", joinYear: 2001 }, { code: "ECU", joinYear: 2001 },
      { code: "SLV", joinYear: 2001 }, { code: "EST", joinYear: 2001 },
      { code: "FJI", joinYear: 2001 }, { code: "FIN", joinYear: 2001 },
      { code: "FRA", joinYear: 2001 }, { code: "GAB", joinYear: 2001 },
      { code: "GMB", joinYear: 2001 }, { code: "GEO", joinYear: 2001 },
      { code: "DEU", joinYear: 2001 }, { code: "GHA", joinYear: 2001 },
      { code: "GRC", joinYear: 2001 }, { code: "GRD", joinYear: 2001 },
      { code: "GTM", joinYear: 2001 }, { code: "GIN", joinYear: 2001 },
      { code: "GNB", joinYear: 2001 }, { code: "GUY", joinYear: 2001 },
      { code: "HND", joinYear: 2001 }, { code: "HUN", joinYear: 2001 },
      { code: "ISL", joinYear: 2001 }, { code: "IRL", joinYear: 2001 },
      { code: "ITA", joinYear: 2001 }, { code: "CIV", joinYear: 2001 },
      { code: "JPN", joinYear: 2001 }, { code: "JOR", joinYear: 2001 },
      { code: "KEN", joinYear: 2001 }, { code: "KIR", joinYear: 2001 },
      { code: "LVA", joinYear: 2001 }, { code: "LSO", joinYear: 2001 },
      { code: "LBR", joinYear: 2001 }, { code: "LIE", joinYear: 2001 },
      { code: "LTU", joinYear: 2001 }, { code: "LUX", joinYear: 2001 },
      { code: "MDG", joinYear: 2001 }, { code: "MWI", joinYear: 2001 },
      { code: "MDV", joinYear: 2001 }, { code: "MLI", joinYear: 2001 },
      { code: "MLT", joinYear: 2001 }, { code: "MHL", joinYear: 2001 },
      { code: "MUS", joinYear: 2001 }, { code: "MEX", joinYear: 2001 },
      { code: "MDA", joinYear: 2001 }, { code: "MNG", joinYear: 2001 },
      { code: "MNE", joinYear: 2001 }, { code: "NAM", joinYear: 2001 },
      { code: "NRU", joinYear: 2001 }, { code: "NLD", joinYear: 2001 },
      { code: "NZL", joinYear: 2001 }, { code: "NER", joinYear: 2001 },
      { code: "NGA", joinYear: 2001 }, { code: "MKD", joinYear: 2001 },
      { code: "NOR", joinYear: 2001 }, { code: "PAN", joinYear: 2001 },
      { code: "PRY", joinYear: 2001 }, { code: "PER", joinYear: 2001 },
      { code: "PHL", joinYear: 2001 }, { code: "POL", joinYear: 2001 },
      { code: "PRT", joinYear: 2001 }, { code: "KOR", joinYear: 2001 },
      { code: "ROU", joinYear: 2001 }, { code: "WSM", joinYear: 2001 },
      { code: "SMR", joinYear: 2001 }, { code: "SEN", joinYear: 2001 },
      { code: "SRB", joinYear: 2001 }, { code: "SYC", joinYear: 2001 },
      { code: "SLE", joinYear: 2001 }, { code: "SVK", joinYear: 2001 },
      { code: "SVN", joinYear: 2001 }, { code: "SLB", joinYear: 2001 },
      { code: "ZAF", joinYear: 2001 }, { code: "ESP", joinYear: 2001 },
      { code: "LKA", joinYear: 2001 }, { code: "KNA", joinYear: 2001 },
      { code: "LCA", joinYear: 2001 }, { code: "VCT", joinYear: 2001 },
      { code: "SUR", joinYear: 2001 }, { code: "SWE", joinYear: 2001 },
      { code: "CHE", joinYear: 2001 }, { code: "TJK", joinYear: 2001 },
      { code: "TZA", joinYear: 2001 }, { code: "TLS", joinYear: 2001 },
      { code: "TTO", joinYear: 2001 }, { code: "TUN", joinYear: 2001 },
      { code: "GBR", joinYear: 2001 }, { code: "UGA", joinYear: 2001 },
      { code: "URY", joinYear: 2001 }, { code: "VUT", joinYear: 2001 },
      { code: "VEN", joinYear: 2001 }, { code: "ZMB", joinYear: 2001 }
    ]
  },
  {
    id: "bri",
    name: "Belt and Road Initiative",
    color: "#E63946",
    members: [
      { code: "CHN", joinYear: 2013 }, { code: "PAK", joinYear: 2015 },
      { code: "BGD", joinYear: 2016 }, { code: "MMR", joinYear: 2017 },
      { code: "LKA", joinYear: 2017 }, { code: "NPL", joinYear: 2017 },
      { code: "AFG", joinYear: 2017 }, { code: "KAZ", joinYear: 2017 },
      { code: "KGZ", joinYear: 2017 }, { code: "TJK", joinYear: 2017 },
      { code: "UZB", joinYear: 2017 }, { code: "TKM", joinYear: 2017 },
      { code: "IRN", joinYear: 2016 }, { code: "IRQ", joinYear: 2017 },
      { code: "SYR", joinYear: 2017 }, { code: "TUR", joinYear: 2017 },
      { code: "SAU", joinYear: 2017 }, { code: "EGY", joinYear: 2017 },
      { code: "ETH", joinYear: 2017 }, { code: "KEN", joinYear: 2017 },
      { code: "TZA", joinYear: 2017 }, { code: "ZAF", joinYear: 2017 },
      { code: "AGO", joinYear: 2017 }, { code: "NGA", joinYear: 2017 },
      { code: "DZA", joinYear: 2017 }, { code: "MAR", joinYear: 2017 },
      { code: "ITA", joinYear: 2017 }, { code: "GRC", joinYear: 2017 },
      { code: "HUN", joinYear: 2017 }, { code: "POL", joinYear: 2017 },
      { code: "RUS", joinYear: 2017 }, { code: "MNG", joinYear: 2017 },
      { code: "IDN", joinYear: 2017 }, { code: "MYS", joinYear: 2017 },
      { code: "THA", joinYear: 2017 }, { code: "VNM", joinYear: 2017 },
      { code: "KHM", joinYear: 2017 }, { code: "LAO", joinYear: 2017 },
      { code: "PHL", joinYear: 2017 }
    ]
  },
  {
    id: "quad",
    name: "QUAD",
    color: "#4A90E2",
    members: [
      { code: "USA", joinYear: 2007 }, { code: "JPN", joinYear: 2007 },
      { code: "IND", joinYear: 2007 }, { code: "AUS", joinYear: 2007 }
    ]
  },
  {
    id: "celac",
    name: "CELAC",
    color: "#45B7D1",
    members: [
      { code: "ATG", joinYear: 2011 }, { code: "ARG", joinYear: 2011 },
      { code: "BHS", joinYear: 2011 }, { code: "BRB", joinYear: 2011 },
      { code: "BLZ", joinYear: 2011 }, { code: "BOL", joinYear: 2011 },
      { code: "BRA", joinYear: 2011 }, { code: "CHL", joinYear: 2011 },
      { code: "COL", joinYear: 2011 }, { code: "CRI", joinYear: 2011 },
      { code: "CUB", joinYear: 2011 }, { code: "DMA", joinYear: 2011 },
      { code: "DOM", joinYear: 2011 }, { code: "ECU", joinYear: 2011 },
      { code: "SLV", joinYear: 2011 }, { code: "GRD", joinYear: 2011 },
      { code: "GTM", joinYear: 2011 }, { code: "GUY", joinYear: 2011 },
      { code: "HTI", joinYear: 2011 }, { code: "HND", joinYear: 2011 },
      { code: "JAM", joinYear: 2011 }, { code: "MEX", joinYear: 2011 },
      { code: "NIC", joinYear: 2011 }, { code: "PAN", joinYear: 2011 },
      { code: "PRY", joinYear: 2011 }, { code: "PER", joinYear: 2011 },
      { code: "KNA", joinYear: 2011 }, { code: "LCA", joinYear: 2011 },
      { code: "VCT", joinYear: 2011 }, { code: "SUR", joinYear: 2011 },
      { code: "TTO", joinYear: 2011 }, { code: "URY", joinYear: 2011 },
      { code: "VEN", joinYear: 2011 }
    ]
  },
  {
    id: "oic",
    name: "OIC",
    color: "#2A9D8F",
    members: [
      { code: "AFG", joinYear: 1969 }, { code: "ALB", joinYear: 1992 },
      { code: "DZA", joinYear: 1969 }, { code: "AZE", joinYear: 1991 },
      { code: "BHR", joinYear: 1970 }, { code: "BGD", joinYear: 1974 },
      { code: "BEN", joinYear: 1970 }, { code: "BRN", joinYear: 1984 },
      { code: "BFA", joinYear: 1973 }, { code: "CMR", joinYear: 1972 },
      { code: "TCD", joinYear: 1972 }, { code: "COM", joinYear: 1975 },
      { code: "CIV", joinYear: 2000 }, { code: "DJI", joinYear: 1974 },
      { code: "EGY", joinYear: 1969 }, { code: "GAB", joinYear: 1972 },
      { code: "GMB", joinYear: 1972 }, { code: "GIN", joinYear: 1972 },
      { code: "GNB", joinYear: 1972 }, { code: "GUY", joinYear: 1972 },
      { code: "IDN", joinYear: 1969 }, { code: "IRN", joinYear: 1969 },
      { code: "IRQ", joinYear: 1969 }, { code: "JOR", joinYear: 1972 },
      { code: "KAZ", joinYear: 1995 }, { code: "KWT", joinYear: 1969 },
      { code: "KGZ", joinYear: 1994 }, { code: "LBN", joinYear: 1970 },
      { code: "LBY", joinYear: 1970 }, { code: "MYS", joinYear: 1970 },
      { code: "MDV", joinYear: 1984 }, { code: "MLI", joinYear: 1972 },
      { code: "MRT", joinYear: 1973 }, { code: "MAR", joinYear: 1969 },
      { code: "MOZ", joinYear: 1994 }, { code: "NER", joinYear: 1972 },
      { code: "NGA", joinYear: 1970 }, { code: "OMN", joinYear: 1970 },
      { code: "PAK", joinYear: 1970 }, { code: "PSE", joinYear: 1970 },
      { code: "QAT", joinYear: 1970 }, { code: "SAU", joinYear: 1969 },
      { code: "SEN", joinYear: 1972 }, { code: "SLE", joinYear: 1972 },
      { code: "SOM", joinYear: 1972 }, { code: "SDN", joinYear: 1972 },
      { code: "SUR", joinYear: 1972 }, { code: "SYR", joinYear: 1969 },
      { code: "TJK", joinYear: 1992 }, { code: "TGO", joinYear: 1972 },
      { code: "TUN", joinYear: 1969 }, { code: "TUR", joinYear: 1969 },
      { code: "TKM", joinYear: 1992 }, { code: "UGA", joinYear: 1972 },
      { code: "ARE", joinYear: 1972 }, { code: "UZB", joinYear: 1996 },
      { code: "YEM", joinYear: 1972 }
    ]
  }
];

export const findCountryAlliances = (countryCode: string, alliances: Alliance[]): Array<{ name: string; joinYear: number }> => {
  return alliances.reduce((acc, alliance) => {
    const membership = alliance.members.find(member => member.code === countryCode);
    if (membership) {
      acc.push({ name: alliance.name, joinYear: membership.joinYear });
    }
    return acc;
  }, [] as Array<{ name: string; joinYear: number }>);
};

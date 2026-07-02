import { Alliance } from "../alliance-types";

export const militairAlliances: Alliance[] = [
  {
    id: "africacorps",
    name: "Africa Corps",
    color: "hsl(335, 75%, 50%)",
    description: "Russian military organization active in several African countries",
    category: "militair",
    members: [
      { code: "CAF", joinYear: 2023 }, { code: "MLI", joinYear: 2023 },
      { code: "BFA", joinYear: 2023 }, { code: "NER", joinYear: 2023 }
    ]
  },
  {
    id: "aukus",
    name: "AUKUS",
    color: "hsl(0, 85%, 58%)",
    description: "Trilateral security pact between Australia, the UK, and the US focusing on military capability and technology sharing",
    category: "militair",
    members: [
      { code: "AUS", joinYear: 2021 }, { code: "GBR", joinYear: 2021 },
      { code: "USA", joinYear: 2021 }
    ]
  },
  {
    id: "nato",
    name: "NATO",
    color: "hsl(15, 90%, 50%)",
    description: "Military alliance between North American and European countries",
    category: "militair",
    members: [
      { code: "ALB", joinYear: 2009 }, { code: "BEL", joinYear: 1949 },
      { code: "BGR", joinYear: 2004 }, { code: "CAN", joinYear: 1949 },
      { code: "HRV", joinYear: 2009 }, { code: "CZE", joinYear: 1999 },
      { code: "DNK", joinYear: 1949 }, { code: "EST", joinYear: 2004 },
      { code: "FRA", joinYear: 1949 }, { code: "DEU", joinYear: 1955 },
      { code: "GRC", joinYear: 1952 }, { code: "HUN", joinYear: 1999 },
      { code: "ISL", joinYear: 1949 }, { code: "ITA", joinYear: 1949 },
      { code: "LVA", joinYear: 2004 }, { code: "LTU", joinYear: 2004 },
      { code: "LUX", joinYear: 1949 }, { code: "MNE", joinYear: 2017 },
      { code: "NLD", joinYear: 1949 }, { code: "MKD", joinYear: 2020 },
      { code: "NOR", joinYear: 1949 }, { code: "POL", joinYear: 1999 },
      { code: "PRT", joinYear: 1949 }, { code: "ROU", joinYear: 2004 },
      { code: "SVK", joinYear: 2004 }, { code: "SVN", joinYear: 2004 },
      { code: "ESP", joinYear: 1982 }, { code: "TUR", joinYear: 1952 },
      { code: "GBR", joinYear: 1949 }, { code: "USA", joinYear: 1949 },
      { code: "FIN", joinYear: 2023 }, { code: "SWE", joinYear: 2023 }
    ]
  },
  {
    id: "quad",
    name: "QUAD",
    color: "hsl(35, 70%, 65%)",
    description: "Strategic dialogue between Australia, India, Japan, and the United States focusing on maintaining a free Indo-Pacific region",
    category: "militair",
    members: [
      { code: "AUS", joinYear: 2007 }, { code: "IND", joinYear: 2007 },
      { code: "JPN", joinYear: 2007 }, { code: "USA", joinYear: 2007 }
    ]
  }
];

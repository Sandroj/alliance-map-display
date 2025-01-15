import { Alliance } from "../alliance-types";

export const militaryAlliances: Alliance[] = [
  {
    id: "nato",
    name: "NATO",
    color: "#00A0DC",
    description: "Military alliance between North American and European countries",
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
    id: "atlanticpact",
    name: "Atlantic Cooperation Pact",
    color: "#4682B4",
    description: "Strategic partnership between North Atlantic nations",
    members: [
      { code: "USA", joinYear: 2023 }, { code: "CAN", joinYear: 2023 },
      { code: "GBR", joinYear: 2023 }, { code: "NOR", joinYear: 2023 },
      { code: "ISL", joinYear: 2023 }
    ]
  },
  {
    id: "nac",
    name: "North Atlantic Council",
    color: "#000080",
    description: "Principal political decision-making body of NATO",
    members: [
      { code: "USA", joinYear: 1949 }, { code: "CAN", joinYear: 1949 },
      { code: "GBR", joinYear: 1949 }, { code: "FRA", joinYear: 1949 },
      { code: "DEU", joinYear: 1955 }
    ]
  }
];
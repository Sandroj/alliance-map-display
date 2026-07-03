import { Alliance } from "../../alliance-types";

export const ggi: Alliance = {
  id: "ggi",
  name: "Global Governance Initiative",
  color: "hsl(240, 40%, 55%)",
  description: "Chinese diplomatic initiative announced by President Xi Jinping in September 2025 at the Tianjin SCO summit, marking the 80th anniversary of the United Nations. The GGI is not a formal organization with membership, but a policy framework proposing five principles for reforming global governance and complementing China's earlier Global Security, Global Development and Global Civilization Initiatives. It has drawn public endorsements from a range of countries, mainly in the developing world, as part of Beijing's effort to build influence and structures aligned with its interests across the Global South. A formal Group of Friends of the initiative convened at the UN in December 2025.",
  categories: ["politiek"],
  members: [
    { code: "CHN", joinYear: 2025 },
    { code: "BLR", joinYear: 2025 }, { code: "PAK", joinYear: 2025 },
    { code: "CUB", joinYear: 2025 }, { code: "VEN", joinYear: 2025 }
  ]
};

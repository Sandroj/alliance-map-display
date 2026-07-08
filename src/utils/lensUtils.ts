import { Alliance } from "@/data/alliances";
import { StrategicLensId } from "@/data/alliance-types";

const SECURITY_IDS = new Set([
  "africacorps",
  "arableague",
  "aukus",
  "ceps",
  "cofa",
  "csto",
  "iaea",
  "icepact",
  "msp",
  "nato",
  "quad",
  "safe",
  "sco",
]);

const RESOURCE_IDS = new Set([
  "arcticcouncil",
  "bri",
  "ceps",
  "icepact",
  "iea",
  "msp",
  "opec",
]);

const INFLUENCE_IDS = new Set([
  "africanunion",
  "arableague",
  "bri",
  "brics",
  "celac",
  "cdrn",
  "epc",
  "g7",
  "g20",
  "ggi",
  "oic",
  "osce",
  "parischarter",
  "sco",
]);

const DISPUTE_IDS = new Set([
  "arcticcouncil",
  "cdrn",
  "csto",
  "epc",
  "iaea",
  "osce",
]);

const CHOKEPOINT_IDS = new Set([
  "arcticcouncil",
  "bri",
  "ceps",
  "cofa",
  "icepact",
]);

export const getLensIdsForAlliance = (alliance: Alliance): StrategicLensId[] => {
  const lensIds = new Set<StrategicLensId>(alliance.lensIds ?? ["alliances"]);

  if (alliance.categories.includes("militair") || SECURITY_IDS.has(alliance.id)) {
    lensIds.add("security");
  }

  if (alliance.categories.includes("handel")) {
    lensIds.add("trade");
  }

  if (RESOURCE_IDS.has(alliance.id)) {
    lensIds.add("energy-resources");
  }

  if (alliance.categories.includes("politiek") || alliance.categories.includes("religieus") || INFLUENCE_IDS.has(alliance.id)) {
    lensIds.add("influence");
  }

  if (DISPUTE_IDS.has(alliance.id)) {
    lensIds.add("conflict-disputes");
  }

  if (CHOKEPOINT_IDS.has(alliance.id)) {
    lensIds.add("chokepoints");
  }

  return Array.from(lensIds);
};

export const belongsToLens = (alliance: Alliance, lensId: StrategicLensId) =>
  getLensIdsForAlliance(alliance).includes(lensId);

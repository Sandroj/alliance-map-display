import { Alliance } from "./alliance-types";
import { generalAlliances } from "./alliances/general";
import { politicalAlliances } from "./alliances/political";
import { economicAlliances } from "./alliances/economic";
import { militaryAlliances } from "./alliances/military";
import { commoditiesAlliances } from "./alliances/commodities";

export type { Alliance } from "./alliance-types";

export const alliances: Alliance[] = [
  ...generalAlliances,
  ...politicalAlliances,
  ...economicAlliances,
  ...militaryAlliances,
  ...commoditiesAlliances
].sort((a, b) => a.name.localeCompare(b.name));
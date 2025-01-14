import { Alliance } from "./alliance-types";
import { asiaPacificAlliances } from "./alliances/asia-pacific";
import { economicAlliances } from "./alliances/economic";
import { globalAlliances } from "./alliances/global";
import { regionalAlliances } from "./alliances/regional";

export type { Alliance } from "./alliance-types";

export const alliances: Alliance[] = [
  ...asiaPacificAlliances,
  ...economicAlliances,
  ...globalAlliances,
  ...regionalAlliances
].sort((a, b) => a.name.localeCompare(b.name));
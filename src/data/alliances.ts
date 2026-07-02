import { Alliance } from "./alliance-types";
import { militairAlliances } from "./alliances/militair";
import { handelAlliances } from "./alliances/handel";
import { politiekAlliances } from "./alliances/politiek";
import { religieusAlliances } from "./alliances/religieus";

export type { Alliance, AllianceCategory } from "./alliance-types";

export const alliances: Alliance[] = [
  ...militairAlliances,
  ...handelAlliances,
  ...politiekAlliances,
  ...religieusAlliances
].sort((a, b) => a.name.localeCompare(b.name));
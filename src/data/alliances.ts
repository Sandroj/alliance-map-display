import { Alliance } from "./alliance-types";
import { africacorps } from "./alliances/orgs/africacorps";
import { africanunion } from "./alliances/orgs/africanunion";
import { asean } from "./alliances/orgs/asean";
import { atlanticpact } from "./alliances/orgs/atlanticpact";
import { aukus } from "./alliances/orgs/aukus";
import { bri } from "./alliances/orgs/bri";
import { brics } from "./alliances/orgs/brics";
import { celac } from "./alliances/orgs/celac";
import { cptpp } from "./alliances/orgs/cptpp";
import { eu } from "./alliances/orgs/eu";
import { g7 } from "./alliances/orgs/g7";
import { g20 } from "./alliances/orgs/g20";
import { nato } from "./alliances/orgs/nato";
import { oecd } from "./alliances/orgs/oecd";
import { oic } from "./alliances/orgs/oic";
import { opec } from "./alliances/orgs/opec";
import { quad } from "./alliances/orgs/quad";
import { rcep } from "./alliances/orgs/rcep";
import { sco } from "./alliances/orgs/sco";
import { usmca } from "./alliances/orgs/usmca";

export type { Alliance, AllianceCategory, AllianceMember, MemberStatus } from "./alliance-types";

export const alliances: Alliance[] = [
  africacorps, africanunion, asean, atlanticpact, aukus, bri, brics, celac,
  cptpp, eu, g7, g20, nato, oecd, oic, opec, quad, rcep, sco, usmca,
].sort((a, b) => a.name.localeCompare(b.name));

import { Alliance } from "./alliance-types";
import { africacorps } from "./alliances/orgs/africacorps";
import { africanunion } from "./alliances/orgs/africanunion";
import { asean } from "./alliances/orgs/asean";
import { atlanticpact } from "./alliances/orgs/atlanticpact";
import { aukus } from "./alliances/orgs/aukus";
import { bri } from "./alliances/orgs/bri";
import { brics } from "./alliances/orgs/brics";
import { celac } from "./alliances/orgs/celac";
import { ceps } from "./alliances/orgs/ceps";
import { cptpp } from "./alliances/orgs/cptpp";
import { csto } from "./alliances/orgs/csto";
import { eu } from "./alliances/orgs/eu";
import { g7 } from "./alliances/orgs/g7";
import { g20 } from "./alliances/orgs/g20";
import { hanseatic } from "./alliances/orgs/hanseatic";
import { iaea } from "./alliances/orgs/iaea";
import { icc } from "./alliances/orgs/icc";
import { icepact } from "./alliances/orgs/icepact";
import { iea } from "./alliances/orgs/iea";
import { msp } from "./alliances/orgs/msp";
import { nato } from "./alliances/orgs/nato";
import { oecd } from "./alliances/orgs/oecd";
import { oic } from "./alliances/orgs/oic";
import { opec } from "./alliances/orgs/opec";
import { osce } from "./alliances/orgs/osce";
import { parischarter } from "./alliances/orgs/parischarter";
import { quad } from "./alliances/orgs/quad";
import { rcep } from "./alliances/orgs/rcep";
import { safe } from "./alliances/orgs/safe";
import { sco } from "./alliances/orgs/sco";
import { usmca } from "./alliances/orgs/usmca";

export type { Alliance, AllianceCategory, AllianceMember, MemberStatus } from "./alliance-types";

export const alliances: Alliance[] = [
  africacorps, africanunion, asean, atlanticpact, aukus, bri, brics, celac,
  ceps, cptpp, csto, eu, g7, g20, hanseatic, iaea, icc, icepact, iea, msp, nato,
  oecd, oic, opec, osce, parischarter, quad, rcep, safe, sco, usmca,
].sort((a, b) => a.name.localeCompare(b.name));

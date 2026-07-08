import { Alliance } from "./alliance-types";
import { aachen } from "./alliances/orgs/aachen";
import { africacorps } from "./alliances/orgs/africacorps";
import { africanunion } from "./alliances/orgs/africanunion";
import { arableague } from "./alliances/orgs/arableague";
import { arcticcouncil } from "./alliances/orgs/arcticcouncil";
import { asean } from "./alliances/orgs/asean";
import { atlanticpact } from "./alliances/orgs/atlanticpact";
import { aukus } from "./alliances/orgs/aukus";
import { bri } from "./alliances/orgs/bri";
import { brics } from "./alliances/orgs/brics";
import { cdrn } from "./alliances/orgs/cdrn";
import { celac } from "./alliances/orgs/celac";
import { ceps } from "./alliances/orgs/ceps";
import { cofa } from "./alliances/orgs/cofa";
import { commonwealth } from "./alliances/orgs/commonwealth";
import { councilofeurope } from "./alliances/orgs/councilofeurope";
import { cptpp } from "./alliances/orgs/cptpp";
import { csto } from "./alliances/orgs/csto";
import { epc } from "./alliances/orgs/epc";
import { eu } from "./alliances/orgs/eu";
import { eaeu } from "./alliances/orgs/eaeu";
import { efta } from "./alliances/orgs/efta";
import { fiveeyes } from "./alliances/orgs/fiveeyes";
import { g7 } from "./alliances/orgs/g7";
import { g20 } from "./alliances/orgs/g20";
import { gcc } from "./alliances/orgs/gcc";
import { ggi } from "./alliances/orgs/ggi";
import { hanseatic } from "./alliances/orgs/hanseatic";
import { iaea } from "./alliances/orgs/iaea";
import { icc } from "./alliances/orgs/icc";
import { icepact } from "./alliances/orgs/icepact";
import { iea } from "./alliances/orgs/iea";
import { iomed } from "./alliances/orgs/iomed";
import { msp } from "./alliances/orgs/msp";
import { mercosur } from "./alliances/orgs/mercosur";
import { nato } from "./alliances/orgs/nato";
import { oecd } from "./alliances/orgs/oecd";
import { oas } from "./alliances/orgs/oas";
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
  aachen, africacorps, africanunion, arableague, arcticcouncil, asean,
  atlanticpact, aukus, bri, brics, cdrn, celac, ceps, cofa, commonwealth,
  councilofeurope, cptpp, csto, epc, eu, eaeu, efta, fiveeyes, g7, g20, gcc,
  ggi, hanseatic, iaea, icc, icepact, iea, iomed, msp, mercosur, nato, oas,
  oecd, oic, opec, osce, parischarter, quad, rcep, safe, sco, usmca,
].sort((a, b) => a.name.localeCompare(b.name));

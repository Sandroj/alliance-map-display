import { Alliance } from "./alliance-types";
import { aachen } from "./alliances/orgs/aachen";
import { afcfta } from "./alliances/orgs/afcfta";
import { africacorps } from "./alliances/orgs/africacorps";
import { africanunion } from "./alliances/orgs/africanunion";
import { albaTcp } from "./alliances/orgs/albaTcp";
import { andeanCommunity } from "./alliances/orgs/andeanCommunity";
import { antarcticTreaty } from "./alliances/orgs/antarcticTreaty";
import { apec } from "./alliances/orgs/apec";
import { arableague } from "./alliances/orgs/arableague";
import { arcticcouncil } from "./alliances/orgs/arcticcouncil";
import { asean } from "./alliances/orgs/asean";
import { atlanticpact } from "./alliances/orgs/atlanticpact";
import { aukus } from "./alliances/orgs/aukus";
import { bimstec } from "./alliances/orgs/bimstec";
import { bri } from "./alliances/orgs/bri";
import { brics } from "./alliances/orgs/brics";
import { caricom } from "./alliances/orgs/caricom";
import { cdrn } from "./alliances/orgs/cdrn";
import { celac } from "./alliances/orgs/celac";
import { ceps } from "./alliances/orgs/ceps";
import { cofa } from "./alliances/orgs/cofa";
import { comesa } from "./alliances/orgs/comesa";
import { commonwealth } from "./alliances/orgs/commonwealth";
import { councilofeurope } from "./alliances/orgs/councilofeurope";
import { cplp } from "./alliances/orgs/cplp";
import { cptpp } from "./alliances/orgs/cptpp";
import { csto } from "./alliances/orgs/csto";
import { eac } from "./alliances/orgs/eac";
import { epc } from "./alliances/orgs/epc";
import { eu } from "./alliances/orgs/eu";
import { eaeu } from "./alliances/orgs/eaeu";
import { ecowas } from "./alliances/orgs/ecowas";
import { efta } from "./alliances/orgs/efta";
import { fiveeyes } from "./alliances/orgs/fiveeyes";
import { fpda } from "./alliances/orgs/fpda";
import { francophonie } from "./alliances/orgs/francophonie";
import { g7 } from "./alliances/orgs/g7";
import { g20 } from "./alliances/orgs/g20";
import { gcc } from "./alliances/orgs/gcc";
import { gecf } from "./alliances/orgs/gecf";
import { ggi } from "./alliances/orgs/ggi";
import { hanseatic } from "./alliances/orgs/hanseatic";
import { iaea } from "./alliances/orgs/iaea";
import { icc } from "./alliances/orgs/icc";
import { icepact } from "./alliances/orgs/icepact";
import { iea } from "./alliances/orgs/iea";
import { igad } from "./alliances/orgs/igad";
import { iomed } from "./alliances/orgs/iomed";
import { iora } from "./alliances/orgs/iora";
import { jef } from "./alliances/orgs/jef";
import { kimberleyProcess } from "./alliances/orgs/kimberleyProcess";
import { msp } from "./alliances/orgs/msp";
import { mercosur } from "./alliances/orgs/mercosur";
import { nato } from "./alliances/orgs/nato";
import { norad } from "./alliances/orgs/norad";
import { nptNuclearStates } from "./alliances/orgs/nptNuclearStates";
import { nuclearUmbrella } from "./alliances/orgs/nuclearUmbrella";
import { nuclearWeaponFreeZones } from "./alliances/orgs/nuclearWeaponFreeZones";
import { oecs } from "./alliances/orgs/oecs";
import { oecd } from "./alliances/orgs/oecd";
import { oas } from "./alliances/orgs/oas";
import { oic } from "./alliances/orgs/oic";
import { opec } from "./alliances/orgs/opec";
import { opecPlus } from "./alliances/orgs/opecPlus";
import { osce } from "./alliances/orgs/osce";
import { parischarter } from "./alliances/orgs/parischarter";
import { pesco } from "./alliances/orgs/pesco";
import { pif } from "./alliances/orgs/pif";
import { quad } from "./alliances/orgs/quad";
import { rcep } from "./alliances/orgs/rcep";
import { saarc } from "./alliances/orgs/saarc";
import { sadc } from "./alliances/orgs/sadc";
import { safe } from "./alliances/orgs/safe";
import { sco } from "./alliances/orgs/sco";
import { sica } from "./alliances/orgs/sica";
import { tiar } from "./alliances/orgs/tiar";
import { turkicStates } from "./alliances/orgs/turkicStates";
import { usmca } from "./alliances/orgs/usmca";
import { usTreatyAllies } from "./alliances/orgs/usTreatyAllies";

export type { Alliance, AllianceCategory, AllianceMember, MemberStatus } from "./alliance-types";

export const alliances: Alliance[] = [
  aachen, afcfta, africacorps, africanunion, albaTcp, andeanCommunity,
  antarcticTreaty, apec, arableague, arcticcouncil, asean, atlanticpact, aukus,
  bimstec, bri, brics, caricom, cdrn, celac, ceps, cofa, comesa, commonwealth,
  councilofeurope, cplp, cptpp, csto, eac, epc, eu, eaeu, ecowas, efta,
  fiveeyes, fpda, francophonie, g7, g20, gcc, gecf, ggi, hanseatic, iaea, icc,
  icepact, iea, igad, iomed, iora, jef, kimberleyProcess, msp, mercosur, nato,
  norad, nptNuclearStates, nuclearUmbrella, nuclearWeaponFreeZones, oas, oecd,
  oecs, oic, opec, opecPlus, osce, parischarter, pesco, pif, quad, rcep, saarc,
  sadc, safe, sco, sica, tiar, turkicStates, usmca, usTreatyAllies,
].sort((a, b) => a.name.localeCompare(b.name));

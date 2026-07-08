import React from "react";
import { CalendarClock, Layers3, Server } from "lucide-react";
import { StrategicLensId } from "@/data/alliance-types";
import { STRATEGIC_LENSES } from "@/data/strategic-lenses";
import { Alliance } from "@/data/alliances";
import { belongsToLens } from "@/utils/lensUtils";
import { withAlpha } from "@/utils/colorUtils";

interface AtlasBriefingProps {
  activeLens: StrategicLensId;
  alliances: Alliance[];
}

const NEXT_LAYERS: Record<StrategicLensId, string> = {
  alliances: "Five Eyes, AfCFTA, Mercosur, GCC, EAEU, EFTA, Commonwealth, Francophonie, OAS, Council of Europe.",
  security: "US treaty allies, NPT, nuclear umbrella, PESCO, FPDA, NORAD, bases and military access.",
  trade: "WTO status, AfCFTA, Mercosur, EAEU, EFTA, APEC, CARICOM, ECOWAS, SADC, EAC.",
  "energy-resources": "Oil, gas, lithium, cobalt, nickel, copper, uranium, rare earths, grain and fertilizer.",
  influence: "G77 + China, Non-Aligned Movement, Commonwealth, Francophonie, CPLP, Turkic States.",
  "conflict-disputes": "Disputed territories, sanctions exposure, frozen participation and structural conflict context.",
  chokepoints: "Hormuz, Malacca, Suez, Bab el-Mandeb, Bosporus, Panama and Arctic routes.",
};

const AtlasBriefing: React.FC<AtlasBriefingProps> = ({ activeLens, alliances }) => {
  const lens = STRATEGIC_LENSES.find((item) => item.id === activeLens) ?? STRATEGIC_LENSES[0];
  const mappedCount = alliances.filter((alliance) => belongsToLens(alliance, activeLens)).length;

  return (
    <section
      className="grid gap-2 rounded-xl border bg-white/58 p-3 shadow-sm backdrop-blur-xl md:grid-cols-[1fr_1fr_1.4fr]"
      style={{ borderColor: withAlpha(lens.accent, 0.22) }}
    >
      <div className="flex items-start gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gray-950/5 text-gray-700">
          <Layers3 className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-[11px] font-bold uppercase text-gray-500">Mapped now</span>
          <span className="block text-sm font-bold text-gray-950">{mappedCount} curated layers</span>
        </span>
      </div>
      <div className="flex items-start gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gray-950/5 text-gray-700">
          <CalendarClock className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-[11px] font-bold uppercase text-gray-500">Cadence</span>
          <span className="block text-sm font-bold text-gray-950">Months to years, not daily news</span>
        </span>
      </div>
      <div className="flex items-start gap-3">
        <span
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
          style={{ backgroundColor: withAlpha(lens.accent, 0.14), color: lens.accent }}
        >
          <Server className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-[11px] font-bold uppercase text-gray-500">Next data layer</span>
          <span className="block text-sm font-semibold leading-snug text-gray-800">{NEXT_LAYERS[activeLens]}</span>
        </span>
      </div>
    </section>
  );
};

export default AtlasBriefing;

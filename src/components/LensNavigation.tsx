import React from "react";
import {
  Anchor,
  BadgeCheck,
  CircleAlert,
  Factory,
  Landmark,
  Network,
  Shield,
} from "lucide-react";
import { STRATEGIC_LENSES } from "@/data/strategic-lenses";
import { StrategicLensId } from "@/data/alliance-types";
import { withAlpha } from "@/utils/colorUtils";

interface LensNavigationProps {
  activeLens: StrategicLensId;
  onLensChange: (lens: StrategicLensId) => void;
}

const ICONS: Record<StrategicLensId, React.ComponentType<{ className?: string }>> = {
  alliances: BadgeCheck,
  security: Shield,
  trade: Landmark,
  "energy-resources": Factory,
  influence: Network,
  "conflict-disputes": CircleAlert,
  chokepoints: Anchor,
};

const STATUS_LABELS = {
  live: "Live",
  mapped: "Mapped",
  planned: "Next",
};

const LensNavigation: React.FC<LensNavigationProps> = ({ activeLens, onLensChange }) => (
  <section className="flex gap-2 overflow-x-auto pb-1 md:grid md:grid-cols-7 md:overflow-visible md:pb-0">
    {STRATEGIC_LENSES.map((lens) => {
      const active = lens.id === activeLens;
      const Icon = ICONS[lens.id];

      return (
        <button
          key={lens.id}
          type="button"
          data-testid={`lens-${lens.id}`}
          onClick={() => onLensChange(lens.id)}
          aria-pressed={active}
          className="group min-h-[5.25rem] min-w-[12rem] rounded-lg border px-3 py-2.5 text-left transition-all focus-visible:ring-2 focus-visible:ring-gray-500 md:min-w-0"
          style={{
            backgroundColor: active ? withAlpha(lens.accent, 0.14) : "rgba(255,255,255,0.62)",
            borderColor: active ? withAlpha(lens.accent, 0.65) : "rgba(255,255,255,0.72)",
            boxShadow: active ? `0 12px 28px ${withAlpha(lens.accent, 0.18)}` : undefined,
          }}
        >
          <span className="flex items-center justify-between gap-2">
            <span
              className="grid h-8 w-8 place-items-center rounded-md"
              style={{ backgroundColor: withAlpha(lens.accent, active ? 0.2 : 0.12), color: lens.accent }}
            >
              <Icon className="h-4 w-4" />
            </span>
            <span
              className="rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase"
              style={{ backgroundColor: withAlpha(lens.accent, 0.1), color: lens.accent }}
            >
              {STATUS_LABELS[lens.status]}
            </span>
          </span>
          <span className="mt-2 block text-sm font-bold text-gray-950">{lens.shortLabel}</span>
          <span className="mt-1 block text-[11px] leading-snug text-gray-500">{lens.description}</span>
        </button>
      );
    })}
  </section>
);

export default LensNavigation;

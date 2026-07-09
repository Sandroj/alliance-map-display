import React, { useState } from 'react';
import { BadgeInfo, CircleDollarSign, Landmark, Shield, UsersRound } from 'lucide-react';
import { Alliance, AllianceCategory } from '@/data/alliances';
import { CATEGORY_META, CATEGORY_ORDER } from '@/data/categories';
import { STRATEGIC_LENSES } from '@/data/strategic-lenses';
import { StrategicLensId } from '@/data/alliance-types';
import { getAllianceStats } from '@/utils/allianceStats';
import { getContrastTextColor, withAlpha } from '@/utils/colorUtils';
import { belongsToLens } from '@/utils/lensUtils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface AlliancePanelProps {
  alliances: Alliance[];
  activeCategory: AllianceCategory | null;
  activeLens: StrategicLensId;
  selectedIds: string[];
  onToggle: (alliance: Alliance) => void;
  onShowInfo: (alliance: Alliance) => void;
}

const AllianceChip: React.FC<{
  alliance: Alliance;
  isSelected: boolean;
  onToggle: () => void;
  onShowInfo: () => void;
}> = ({ alliance, isSelected, onToggle, onShowInfo }) => {
  const stats = getAllianceStats(alliance);
  const multiCategory = alliance.categories.length > 1;
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className="flex items-stretch rounded-full transition-all hover:-translate-y-px hover:shadow-md"
          style={{
            backgroundColor: isSelected ? alliance.color : withAlpha(alliance.color, 0.18),
            boxShadow: isSelected ? `0 0 14px ${withAlpha(alliance.color, 0.6)}` : undefined,
          }}
        >
          <button
            onClick={onToggle}
            aria-pressed={isSelected}
            className="pl-3 pr-1 py-1.5 text-xs font-semibold rounded-l-full transition-colors focus-visible:ring-2 focus-visible:ring-gray-500"
            style={{ color: isSelected ? getContrastTextColor(alliance.color) : alliance.color }}
          >
            {alliance.name}
            {multiCategory && (
              <span className="ml-1 text-[9px] opacity-70">
                +{alliance.categories.length - 1}
              </span>
            )}
          </button>
          <button
            onClick={onShowInfo}
            aria-label={`About ${alliance.name}`}
            className="pl-1 pr-2.5 text-[10px] rounded-r-full opacity-55 hover:opacity-100 transition-opacity focus-visible:ring-2 focus-visible:ring-gray-500"
            style={{ color: isSelected ? getContrastTextColor(alliance.color) : alliance.color }}
          >
            <BadgeInfo className="h-3 w-3" />
          </button>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="max-w-xs text-sm font-medium">{alliance.description}</p>
        <p className="text-xs text-muted-foreground mt-1">
          {stats.memberCount} members{stats.foundingYear ? ` · since ${stats.foundingYear}` : ''}
        </p>
      </TooltipContent>
    </Tooltip>
  );
};

const CATEGORY_ICONS: Record<AllianceCategory, React.ComponentType<{ className?: string }>> = {
  militair: Shield,
  handel: CircleDollarSign,
  politiek: Landmark,
  religieus: UsersRound,
};

const AlliancePanel: React.FC<AlliancePanelProps> = ({
  alliances,
  activeCategory,
  activeLens,
  selectedIds,
  onToggle,
  onShowInfo,
}) => {
  const [collapsed, setCollapsed] = useState<Partial<Record<AllianceCategory, boolean>>>({});
  const visibleCategories = activeCategory ? [activeCategory] : CATEGORY_ORDER;
  const activeLensMeta = STRATEGIC_LENSES.find((lens) => lens.id === activeLens);
  const lensAlliances = alliances.filter((alliance) => belongsToLens(alliance, activeLens));

  return (
    <div className="flex min-h-0 flex-col gap-2.5 rounded-xl border border-white/70 bg-white/64 p-3 shadow-sm backdrop-blur-xl lg:flex-1 lg:overflow-y-auto">
      <div className="flex flex-wrap items-center gap-2">
        <div>
          <div className="text-xs font-bold uppercase text-gray-950">
            {activeLensMeta?.label ?? 'Atlas layers'}
          </div>
          <div className="text-[11px] leading-snug text-gray-500">
            {activeLensMeta?.description}
          </div>
        </div>
        <span className="ml-auto rounded bg-gray-950/5 px-2 py-1 text-[11px] font-semibold text-gray-600">
          {lensAlliances.length} mapped layers
        </span>
      </div>
      <TooltipProvider>
        {visibleCategories.map((category) => {
          const orgs = lensAlliances.filter((a) => a.categories.includes(category));
          if (orgs.length === 0) return null;
          const meta = CATEGORY_META[category];
          const CategoryIcon = CATEGORY_ICONS[category];
          const open = !collapsed[category];
          return (
            <section key={category}>
              <button
                onClick={() => setCollapsed((prev) => ({ ...prev, [category]: open }))}
                aria-expanded={open}
                className="w-full flex items-center gap-2 py-1 text-[11px] font-bold uppercase tracking-wider rounded transition-colors focus-visible:ring-2 focus-visible:ring-gray-500"
                style={{ color: meta.color }}
              >
                <CategoryIcon className="h-3.5 w-3.5" />
                <span>{meta.label}</span>
                <span className="font-mono font-normal opacity-60">{orgs.length}</span>
                <span className="flex-1 h-px" style={{ backgroundColor: withAlpha(meta.color, 0.3) }} />
                <span className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>▾</span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                  open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-wrap gap-1.5 pt-1.5 pb-1">
                    {orgs.map((alliance) => (
                      <AllianceChip
                        key={alliance.id}
                        alliance={alliance}
                        isSelected={selectedIds.includes(alliance.id)}
                        onToggle={() => onToggle(alliance)}
                        onShowInfo={() => onShowInfo(alliance)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
        {lensAlliances.length === 0 && (
          <div className="rounded-lg border border-dashed border-gray-300 bg-white/50 px-3 py-3 text-xs text-gray-500">
            This lens is ready for the next data batch. Resource, dispute and route layers will use
            separate map styles instead of being forced into alliance colors.
          </div>
        )}
      </TooltipProvider>
    </div>
  );
};

export default AlliancePanel;

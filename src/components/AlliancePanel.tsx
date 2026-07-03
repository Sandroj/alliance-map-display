import React, { useState } from 'react';
import { Alliance, AllianceCategory } from '@/data/alliances';
import { CATEGORY_META, CATEGORY_ORDER } from '@/data/categories';
import { getAllianceStats } from '@/utils/allianceStats';
import { getContrastTextColor, withAlpha } from '@/utils/colorUtils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface AlliancePanelProps {
  alliances: Alliance[];
  activeCategory: AllianceCategory | null;
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
                {alliance.categories.map((c) => CATEGORY_META[c].icon).join('')}
              </span>
            )}
          </button>
          <button
            onClick={onShowInfo}
            aria-label={`About ${alliance.name}`}
            className="pl-1 pr-2.5 text-[10px] rounded-r-full opacity-50 hover:opacity-100 transition-opacity focus-visible:ring-2 focus-visible:ring-gray-500"
            style={{ color: isSelected ? getContrastTextColor(alliance.color) : alliance.color }}
          >
            ⓘ
          </button>
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="max-w-xs text-sm font-medium">{alliance.description}</p>
        <p className="text-xs text-muted-foreground mt-1">
          {stats.memberCount} members · since {stats.foundingYear}
        </p>
      </TooltipContent>
    </Tooltip>
  );
};

const AlliancePanel: React.FC<AlliancePanelProps> = ({
  alliances,
  activeCategory,
  selectedIds,
  onToggle,
  onShowInfo,
}) => {
  const [collapsed, setCollapsed] = useState<Partial<Record<AllianceCategory, boolean>>>({});
  const visibleCategories = activeCategory ? [activeCategory] : CATEGORY_ORDER;

  return (
    <div className="flex flex-col gap-1.5 p-3 bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm rounded-xl">
      <TooltipProvider>
        {visibleCategories.map((category) => {
          const orgs = alliances.filter((a) => a.categories.includes(category));
          if (orgs.length === 0) return null;
          const meta = CATEGORY_META[category];
          const open = !collapsed[category];
          return (
            <section key={category}>
              <button
                onClick={() => setCollapsed((prev) => ({ ...prev, [category]: open }))}
                aria-expanded={open}
                className="w-full flex items-center gap-2 py-1 text-[11px] font-bold uppercase tracking-wider rounded transition-colors focus-visible:ring-2 focus-visible:ring-gray-500"
                style={{ color: meta.color }}
              >
                <span>{meta.icon}</span>
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
                  <div className="flex flex-wrap gap-2 pt-1.5 pb-1">
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
      </TooltipProvider>
    </div>
  );
};

export default AlliancePanel;

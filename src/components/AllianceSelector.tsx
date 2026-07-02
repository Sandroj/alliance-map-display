import React from 'react';
import { Alliance } from '@/data/alliances';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getAllianceStats } from '@/utils/allianceStats';
import { getContrastTextColor, withAlpha } from '@/utils/colorUtils';

interface AllianceSelectorProps {
  alliances: Alliance[];
  selectedIds: string[];
  onToggle: (alliance: Alliance) => void;
}

const AllianceSelector: React.FC<AllianceSelectorProps> = ({
  alliances,
  selectedIds,
  onToggle,
}) => {
  return (
    <div className="flex flex-wrap gap-2 p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl">
      <TooltipProvider>
        {alliances.map((alliance) => {
          const isSelected = selectedIds.includes(alliance.id);
          const stats = getAllianceStats(alliance);
          return (
            <Tooltip key={alliance.id}>
              <TooltipTrigger asChild>
                <button
                  onClick={() => onToggle(alliance)}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                  style={{
                    backgroundColor: isSelected ? alliance.color : withAlpha(alliance.color, 0.18),
                    color: isSelected ? getContrastTextColor(alliance.color) : alliance.color,
                    boxShadow: isSelected ? `0 0 14px ${withAlpha(alliance.color, 0.6)}` : 'none',
                  }}
                >
                  {alliance.name}
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-sm font-medium">{alliance.description}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {stats.memberCount} leden · sinds {stats.foundingYear}
                </p>
              </TooltipContent>
            </Tooltip>
          );
        })}
      </TooltipProvider>
    </div>
  );
};

export default AllianceSelector;
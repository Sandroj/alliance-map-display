import React from 'react';
import { Alliance } from '@/data/alliances';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AllianceSelectorProps {
  alliances: Alliance[];
  selectedAlliance: Alliance | null;
  onSelect: (alliance: Alliance | null) => void;
}

const AllianceSelector: React.FC<AllianceSelectorProps> = ({
  alliances,
  selectedAlliance,
  onSelect,
}) => {
  return (
    <div className="flex flex-wrap gap-2 p-4 bg-white rounded-lg shadow-md">
      <TooltipProvider>
        {alliances.map((alliance) => (
          <Tooltip key={alliance.id}>
            <TooltipTrigger asChild>
              <Button
                onClick={() => onSelect(selectedAlliance?.id === alliance.id ? null : alliance)}
                variant={selectedAlliance?.id === alliance.id ? "default" : "outline"}
                className="transition-all duration-200"
                style={{
                  backgroundColor: selectedAlliance?.id === alliance.id ? alliance.color : undefined,
                  borderColor: alliance.color,
                  color: selectedAlliance?.id === alliance.id ? "white" : alliance.color,
                }}
              >
                {alliance.name}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs text-sm">{alliance.description}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default AllianceSelector;
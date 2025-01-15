import React from 'react';
import { Alliance } from '@/data/alliances';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
  onToggleDialoguePartners?: (alliance: Alliance) => void;
}

const AllianceSelector: React.FC<AllianceSelectorProps> = ({
  alliances,
  selectedAlliance,
  onSelect,
  onToggleDialoguePartners,
}) => {
  return (
    <div className="flex flex-wrap gap-2 p-4 bg-white rounded-lg shadow-md">
      <TooltipProvider>
        {alliances.map((alliance) => (
          <div key={alliance.id} className="relative">
            <Tooltip>
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
                  {(alliance.id === 'sco' || alliance.id === 'g20') && (
                    <div className="absolute -top-2 -right-2">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Checkbox
                            checked={alliance.showDialoguePartners}
                            onCheckedChange={() => onToggleDialoguePartners?.(alliance)}
                            className="h-4 w-4 border-2"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs text-sm">
                            {alliance.id === 'sco' 
                              ? "Show dialogue partners of the Shanghai Cooperation Organisation"
                              : "Show African Union member states in G20"}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-sm">{alliance.description}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default AllianceSelector;
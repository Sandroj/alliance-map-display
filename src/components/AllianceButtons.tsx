import React from 'react';
import { Button } from './ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import { Alliance } from '@/data/alliances';

interface AllianceButtonsProps {
  alliances: Alliance[];
  selectedAlliance: Alliance | null;
  onSelect: (alliance: Alliance | null) => void;
}

const allianceDescriptions: { [key: string]: string } = {
  'CPTPP': 'Comprehensive and Progressive Agreement for Trans-Pacific Partnership - A free trade agreement between 11 Pacific Rim economies focusing on reducing tariffs and promoting economic integration.',
  'RCEP': 'Regional Comprehensive Economic Partnership - The world\'s largest trade bloc, comprising 15 Asia-Pacific nations, focusing on trade, services, investment, and digital commerce.',
  'USMCA': 'United States-Mexico-Canada Agreement - A trilateral trade agreement replacing NAFTA, modernizing trade rules between North American nations.',
  'OECD': 'Organisation for Economic Co-operation and Development - An intergovernmental organization of 38 countries focused on economic progress and world trade.',
  'G20': 'Group of Twenty - An international forum for the governments and central bank governors of 19 countries and the European Union.'
};

const AllianceButtons: React.FC<AllianceButtonsProps> = ({
  alliances,
  selectedAlliance,
  onSelect,
}) => {
  const significantAlliances = ['cptpp', 'rcep', 'usmca', 'oecd', 'g20'];

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <TooltipProvider>
        {alliances
          .filter(alliance => significantAlliances.includes(alliance.id))
          .map(alliance => (
            <Tooltip key={alliance.id}>
              <TooltipTrigger asChild>
                <Button
                  variant={selectedAlliance?.id === alliance.id ? "default" : "outline"}
                  onClick={() => onSelect(selectedAlliance?.id === alliance.id ? null : alliance)}
                  className="min-w-[100px]"
                >
                  {alliance.name}
                </Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-[300px] p-2">
                <p>{allianceDescriptions[alliance.name]}</p>
              </TooltipContent>
            </Tooltip>
          ))}
      </TooltipProvider>
    </div>
  );
};

export default AllianceButtons;
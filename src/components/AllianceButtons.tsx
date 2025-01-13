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
  'NATO': 'North Atlantic Treaty Organization - A military and political alliance of North American and European countries.',
  'European Union': 'A political and economic union of 27 European member states.',
  'ASEAN': 'Association of Southeast Asian Nations - A regional organization promoting economic and political cooperation.',
  'BRICS': 'An association of five major emerging economies: Brazil, Russia, India, China, and South Africa.',
  'G7': 'Group of Seven - An informal forum of leading industrial nations.',
  'OPEC': 'Organization of Petroleum Exporting Countries - Coordinates petroleum policies among member nations.',
  'ICC': 'International Criminal Court - An international tribunal for prosecuting international crimes.',
  'Belt and Road Initiative': 'China\'s global infrastructure development strategy to invest in nearly 70 countries.',
  'QUAD': 'Quadrilateral Security Dialogue - Strategic dialogue between USA, India, Japan and Australia.',
  'CELAC': 'Community of Latin American and Caribbean States - A regional bloc of Latin American and Caribbean states.',
  'OIC': 'Organization of Islamic Cooperation - The collective voice of the Muslim world.',
  'CPTPP': 'Comprehensive and Progressive Agreement for Trans-Pacific Partnership - A free trade agreement between 11 Pacific Rim economies.',
  'RCEP': 'Regional Comprehensive Economic Partnership - The world\'s largest trade bloc, comprising 15 Asia-Pacific nations.',
  'USMCA': 'United States-Mexico-Canada Agreement - A trilateral trade agreement replacing NAFTA.',
  'OECD': 'Organisation for Economic Co-operation and Development - An intergovernmental organization focused on economic progress.',
  'G20': 'Group of Twenty - An international forum for the governments and central bank governors of 19 countries and the EU.'
};

const AllianceButtons: React.FC<AllianceButtonsProps> = ({
  alliances,
  selectedAlliance,
  onSelect,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      <TooltipProvider>
        {alliances.map(alliance => (
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
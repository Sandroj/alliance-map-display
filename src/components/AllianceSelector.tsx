import React from 'react';
import { Alliance } from '@/data/alliances';
import { Button } from '@/components/ui/button';

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
      {alliances.map((alliance) => {
        const isSelected = selectedAlliance?.id === alliance.id;
        return (
          <Button
            key={alliance.id}
            onClick={() => onSelect(isSelected ? null : alliance)}
            variant={isSelected ? "default" : "outline"}
            className="transition-all duration-200"
            style={{
              backgroundColor: isSelected ? alliance.color : 'transparent',
              borderColor: alliance.color,
              color: isSelected ? 'white' : alliance.color,
            }}
          >
            {alliance.name}
          </Button>
        );
      })}
    </div>
  );
};

export default AllianceSelector;
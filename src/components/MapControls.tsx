import React from 'react';
import { Checkbox } from './ui/checkbox';

interface MapControlsProps {
  showAlliances: boolean;
  setShowAlliances: (show: boolean) => void;
  showDisputed: boolean;
  setShowDisputed: (show: boolean) => void;
}

const MapControls: React.FC<MapControlsProps> = ({
  showAlliances,
  setShowAlliances,
  showDisputed,
  setShowDisputed
}) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="show-alliances"
            checked={showAlliances}
            onCheckedChange={(checked) => setShowAlliances(checked as boolean)}
          />
          <label
            htmlFor="show-alliances"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Show country alliance memberships on hover
          </label>
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox
            id="show-disputed"
            checked={showDisputed}
            onCheckedChange={(checked) => setShowDisputed(checked as boolean)}
          />
          <label
            htmlFor="show-disputed"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Show disputed territories
          </label>
        </div>
      </div>
    </div>
  );
};

export default MapControls;
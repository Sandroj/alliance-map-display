import { useState } from 'react';
import WorldMap from '@/components/WorldMap';
import AllianceSelector from '@/components/AllianceSelector';
import { alliances, Alliance } from '@/data/alliances';

const Index = () => {
  const [selectedAlliance, setSelectedAlliance] = useState<Alliance | null>(null);

  const handleToggleDialoguePartners = (alliance: Alliance) => {
    const updatedAlliance = {
      ...alliance,
      showDialoguePartners: !alliance.showDialoguePartners
    };
    setSelectedAlliance(updatedAlliance);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">World Alliances Map</h1>
        <p className="text-gray-600">
          Explore international alliances and their member countries. Click on an alliance to highlight its members.
        </p>
        
        <AllianceSelector
          alliances={alliances}
          selectedAlliance={selectedAlliance}
          onSelect={setSelectedAlliance}
          onToggleDialoguePartners={handleToggleDialoguePartners}
        />
        
        <WorldMap selectedAlliance={selectedAlliance} />
      </div>
    </div>
  );
};

export default Index;
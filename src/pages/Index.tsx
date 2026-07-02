import { useState } from 'react';
import WorldMap from '@/components/WorldMap';
import AllianceSelector from '@/components/AllianceSelector';
import TopBar from '@/components/TopBar';
import CountryDetailDrawer from '@/components/CountryDetailDrawer';
import { alliances, Alliance, AllianceCategory } from '@/data/alliances';
import { countries } from '@/data/countries';

const Index = () => {
  const [selectedAlliances, setSelectedAlliances] = useState<Alliance[]>([]);
  const [activeCategory, setActiveCategory] = useState<AllianceCategory | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const toggleAlliance = (alliance: Alliance) => {
    setSelectedAlliances((prev) =>
      prev.some((a) => a.id === alliance.id)
        ? prev.filter((a) => a.id !== alliance.id)
        : [...prev, alliance]
    );
  };

  const visibleAlliances = activeCategory
    ? alliances.filter((a) => a.category === activeCategory)
    : alliances;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-4">
      <div className="max-w-7xl mx-auto space-y-3">
        <TopBar
          alliances={alliances}
          countries={countries}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onSelectAlliance={toggleAlliance}
          onSelectCountry={setSelectedCountry}
        />

        <AllianceSelector
          alliances={visibleAlliances}
          selectedIds={selectedAlliances.map((a) => a.id)}
          onToggle={toggleAlliance}
        />

        <div className="relative">
          <WorldMap
            selectedAlliances={selectedAlliances}
            onCountryClick={(code) =>
              setSelectedCountry((prev) => (prev === code ? null : code))
            }
          />
          <CountryDetailDrawer
            countryCode={selectedCountry}
            alliances={alliances}
            onClose={() => setSelectedCountry(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
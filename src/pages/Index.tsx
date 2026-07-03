import { useState } from 'react';
import WorldMap from '@/components/WorldMap';
import Header, { InfoKind } from '@/components/Header';
import AlliancePanel from '@/components/AlliancePanel';
import CountryDetailDrawer from '@/components/CountryDetailDrawer';
import OrgProfileModal from '@/components/OrgProfileModal';
import InfoOverlay from '@/components/InfoOverlay';
import AnimatedBackground from '@/components/AnimatedBackground';
import { AboutContent, LegendContent, SourcesContent } from '@/components/InfoContent';
import { alliances, Alliance, AllianceCategory } from '@/data/alliances';
import { countries } from '@/data/countries';

const INFO_TITLES: Record<InfoKind, string> = {
  about: 'About',
  legend: 'Legend',
  sources: 'Sources',
};

const Index = () => {
  const [selectedAlliances, setSelectedAlliances] = useState<Alliance[]>([]);
  const [activeCategory, setActiveCategory] = useState<AllianceCategory | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [openInfo, setOpenInfo] = useState<InfoKind | null>(null);
  const [profileOrg, setProfileOrg] = useState<Alliance | null>(null);

  const toggleAlliance = (alliance: Alliance) => {
    setSelectedAlliances((prev) =>
      prev.some((a) => a.id === alliance.id)
        ? prev.filter((a) => a.id !== alliance.id)
        : [...prev, alliance]
    );
  };

  return (
    <div className="min-h-screen p-4">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto space-y-3">
        <Header
          alliances={alliances}
          countries={countries}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onSelectAlliance={toggleAlliance}
          onSelectCountry={setSelectedCountry}
          onOpenInfo={setOpenInfo}
        />

        <AlliancePanel
          alliances={alliances}
          activeCategory={activeCategory}
          selectedIds={selectedAlliances.map((a) => a.id)}
          onToggle={toggleAlliance}
          onShowInfo={setProfileOrg}
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
            onShowInfo={setProfileOrg}
          />
        </div>
      </div>

      {openInfo && (
        <InfoOverlay title={INFO_TITLES[openInfo]} onClose={() => setOpenInfo(null)}>
          {openInfo === 'about' && <AboutContent />}
          {openInfo === 'legend' && <LegendContent />}
          {openInfo === 'sources' && <SourcesContent />}
        </InfoOverlay>
      )}
      <OrgProfileModal alliance={profileOrg} onClose={() => setProfileOrg(null)} />
    </div>
  );
};

export default Index;

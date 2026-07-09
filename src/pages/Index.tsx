import { lazy, Suspense, useState } from 'react';
import Header, { InfoKind } from '@/components/Header';
import AlliancePanel from '@/components/AlliancePanel';
import LensNavigation from '@/components/LensNavigation';
import CountryDetailDrawer from '@/components/CountryDetailDrawer';
import InfoOverlay from '@/components/InfoOverlay';
import AnimatedBackground from '@/components/AnimatedBackground';
import { AboutContent, LegendContent, SourcesContent } from '@/components/InfoContent';
import { alliances, Alliance, AllianceCategory } from '@/data/alliances';
import { StrategicLensId } from '@/data/alliance-types';
import { countries } from '@/data/countries';

const WorldMap = lazy(() => import('@/components/WorldMap'));
const OrgProfileModal = lazy(() => import('@/components/OrgProfileModal'));

const INFO_TITLES: Record<InfoKind, string> = {
  about: 'About',
  legend: 'Legend',
  sources: 'Sources',
};

const Index = () => {
  const [selectedAlliances, setSelectedAlliances] = useState<Alliance[]>([]);
  const [activeCategory, setActiveCategory] = useState<AllianceCategory | null>(null);
  const [activeLens, setActiveLens] = useState<StrategicLensId>('alliances');
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
      <div className="mx-auto flex max-w-[96rem] flex-col gap-3">
        <Header
          alliances={alliances}
          countries={countries}
          onSelectAlliance={toggleAlliance}
          onSelectCountry={setSelectedCountry}
          onOpenInfo={setOpenInfo}
        />

        <div className="grid gap-3 lg:grid-cols-[24rem_minmax(0,1fr)]">
          <aside className="order-2 flex flex-col gap-3 lg:sticky lg:top-24 lg:order-1 lg:max-h-[calc(100vh-7rem)]">
            <LensNavigation
              activeLens={activeLens}
              onLensChange={(lens) => {
                setActiveLens(lens);
                setActiveCategory(null);
              }}
            />

            <AlliancePanel
              alliances={alliances}
              activeCategory={activeCategory}
              activeLens={activeLens}
              selectedIds={selectedAlliances.map((a) => a.id)}
              onToggle={toggleAlliance}
              onShowInfo={setProfileOrg}
            />
          </aside>

          <div className="relative order-1 min-h-[34rem] lg:order-2">
            <Suspense
              fallback={
                <div className="grid h-[calc(100vh-9rem)] min-h-[34rem] place-items-center rounded-xl border border-white/70 bg-white/58 text-sm font-semibold text-gray-500 shadow-sm backdrop-blur-xl">
                  Loading strategic map...
                </div>
              }
            >
              <WorldMap
                selectedAlliances={selectedAlliances}
                onCountryClick={(code) =>
                  setSelectedCountry((prev) => (prev === code ? null : code))
                }
              />
            </Suspense>
            <CountryDetailDrawer
              countryCode={selectedCountry}
              alliances={alliances}
              onClose={() => setSelectedCountry(null)}
              onShowInfo={setProfileOrg}
            />
          </div>
        </div>
      </div>

      {openInfo && (
        <InfoOverlay title={INFO_TITLES[openInfo]} onClose={() => setOpenInfo(null)}>
          {openInfo === 'about' && <AboutContent />}
          {openInfo === 'legend' && <LegendContent />}
          {openInfo === 'sources' && <SourcesContent />}
        </InfoOverlay>
      )}
      {profileOrg && (
        <Suspense fallback={null}>
          <OrgProfileModal alliance={profileOrg} onClose={() => setProfileOrg(null)} />
        </Suspense>
      )}
    </div>
  );
};

export default Index;

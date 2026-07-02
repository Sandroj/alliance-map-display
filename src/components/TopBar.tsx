import React, { useMemo, useState } from 'react';
import { Alliance, AllianceCategory } from '@/data/alliances';
import { CountryInfo } from '@/data/countries';

interface TopBarProps {
  alliances: Alliance[];
  countries: Record<string, CountryInfo>;
  activeCategory: AllianceCategory | null;
  onCategoryChange: (category: AllianceCategory | null) => void;
  onSelectAlliance: (alliance: Alliance) => void;
  onSelectCountry: (code: string) => void;
}

const CATEGORY_LABELS: Record<AllianceCategory, string> = {
  militair: '⚔ militair',
  handel: '💰 handel',
  politiek: '🏛 politiek',
  religieus: '☪ religieus',
};

const TopBar: React.FC<TopBarProps> = ({
  alliances,
  countries,
  activeCategory,
  onCategoryChange,
  onSelectAlliance,
  onSelectCountry,
}) => {
  const [query, setQuery] = useState('');

  const allianceResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return alliances.filter((a) => a.name.toLowerCase().includes(q)).slice(0, 5);
  }, [query, alliances]);

  const countryResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return Object.entries(countries)
      .filter(([, info]) => info.name.toLowerCase().includes(q))
      .slice(0, 5);
  }, [query, countries]);

  const hasResults = allianceResults.length > 0 || countryResults.length > 0;

  return (
    <div className="flex flex-wrap items-center gap-3 px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl relative">
      <div className="font-heading font-bold text-lg text-white">🌐 Wereldkaart</div>

      <div className="relative flex-1 min-w-[220px]">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Zoek land of alliantie..."
          className="w-full px-3 py-1.5 text-sm text-white placeholder-white/50 bg-white/5 border border-white/10 rounded-lg outline-none focus:border-white/30"
        />
        {query.trim() && (
          <div className="absolute top-full left-0 right-0 mt-2 p-2 z-20 max-h-64 overflow-y-auto bg-[#1e0f42] border border-white/10 rounded-xl shadow-xl">
            {!hasResults && (
              <div className="text-xs text-white/50 px-2 py-1">Geen resultaten</div>
            )}
            {allianceResults.map((a) => (
              <button
                key={a.id}
                onClick={() => { onSelectAlliance(a); setQuery(''); }}
                className="block w-full text-left text-sm text-white px-2 py-1 rounded hover:bg-white/10"
              >
                {a.name} <span className="text-white/40 text-xs">alliantie</span>
              </button>
            ))}
            {countryResults.map(([code, info]) => (
              <button
                key={code}
                onClick={() => { onSelectCountry(code); setQuery(''); }}
                className="block w-full text-left text-sm text-white px-2 py-1 rounded hover:bg-white/10"
              >
                {info.flag} {info.name}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-2 flex-wrap">
        {(Object.keys(CATEGORY_LABELS) as AllianceCategory[]).map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(activeCategory === category ? null : category)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeCategory === category
                ? 'bg-white/25 text-white'
                : 'bg-white/5 text-white/60 hover:bg-white/10'
            }`}
          >
            {CATEGORY_LABELS[category]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopBar;

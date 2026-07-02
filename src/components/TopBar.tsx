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
  militair: '⚔ military',
  handel: '💰 trade',
  politiek: '🏛 political',
  religieus: '☪ religious',
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
    <div className="flex flex-wrap items-center gap-3 px-4 py-3 bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm rounded-xl relative">
      <div className="font-heading font-bold text-lg text-gray-900">🌐 World Alliances</div>

      <div className="relative flex-1 min-w-[220px]">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search country or alliance..."
          className="w-full px-3 py-1.5 text-sm text-gray-900 placeholder-gray-400 bg-white/80 border border-gray-200 rounded-lg outline-none focus:border-gray-400"
        />
        {query.trim() && (
          <div className="absolute top-full left-0 right-0 mt-2 p-2 z-20 max-h-64 overflow-y-auto bg-white/90 backdrop-blur-xl border border-gray-200 rounded-xl shadow-xl">
            {!hasResults && (
              <div className="text-xs text-gray-400 px-2 py-1">No results</div>
            )}
            {allianceResults.map((a) => (
              <button
                key={a.id}
                onClick={() => { onSelectAlliance(a); setQuery(''); }}
                className="block w-full text-left text-sm text-gray-900 px-2 py-1 rounded hover:bg-gray-100"
              >
                {a.name} <span className="text-gray-400 text-xs">alliance</span>
              </button>
            ))}
            {countryResults.map(([code, info]) => (
              <button
                key={code}
                onClick={() => { onSelectCountry(code); setQuery(''); }}
                className="block w-full text-left text-sm text-gray-900 px-2 py-1 rounded hover:bg-gray-100"
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
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
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

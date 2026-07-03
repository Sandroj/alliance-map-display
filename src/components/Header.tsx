import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Alliance, AllianceCategory } from '@/data/alliances';
import { CountryInfo } from '@/data/countries';
import { CATEGORY_META, CATEGORY_ORDER } from '@/data/categories';
import { withAlpha } from '@/utils/colorUtils';

export type InfoKind = 'about' | 'legend' | 'sources';

interface HeaderProps {
  alliances: Alliance[];
  countries: Record<string, CountryInfo>;
  activeCategory: AllianceCategory | null;
  onCategoryChange: (category: AllianceCategory | null) => void;
  onSelectAlliance: (alliance: Alliance) => void;
  onSelectCountry: (code: string) => void;
  onOpenInfo: (which: InfoKind) => void;
}

type SearchResult =
  | { kind: 'alliance'; key: string; alliance: Alliance }
  | { kind: 'country'; key: string; code: string; label: string };

const INFO_ITEMS: { kind: InfoKind; label: string }[] = [
  { kind: 'about', label: 'About' },
  { kind: 'legend', label: 'Legend' },
  { kind: 'sources', label: 'Sources' },
];

const Header: React.FC<HeaderProps> = ({
  alliances,
  countries,
  activeCategory,
  onCategoryChange,
  onSelectAlliance,
  onSelectCountry,
  onOpenInfo,
}) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);

  const results = useMemo<SearchResult[]>(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const allianceHits: SearchResult[] = alliances
      .filter((a) => a.name.toLowerCase().includes(q))
      .slice(0, 5)
      .map((a) => ({ kind: 'alliance', key: a.id, alliance: a }));
    const countryHits: SearchResult[] = Object.entries(countries)
      .filter(([, info]) => info.name.toLowerCase().includes(q))
      .slice(0, 5)
      .map(([code, info]) => ({ kind: 'country', key: code, code, label: `${info.flag} ${info.name}` }));
    return [...allianceHits, ...countryHits];
  }, [query, alliances, countries]);

  const choose = (r: SearchResult) => {
    if (r.kind === 'alliance') onSelectAlliance(r.alliance);
    else onSelectCountry(r.code);
    setQuery('');
    setActiveIndex(0);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (results.length === 0) {
      if (e.key === 'Escape') setQuery('');
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      choose(results[Math.min(activeIndex, results.length - 1)]);
    } else if (e.key === 'Escape') {
      setQuery('');
    }
  };

  useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) setQuery('');
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  return (
    <header className="sticky top-4 z-30 flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 bg-white/60 backdrop-blur-xl border border-white/60 shadow-sm rounded-xl">
      <div className="font-heading font-bold text-lg text-gray-900">🌐 World Alliances</div>

      <nav className="flex gap-1.5 flex-wrap" aria-label="Categories">
        {CATEGORY_ORDER.map((category) => {
          const meta = CATEGORY_META[category];
          const active = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(active ? null : category)}
              aria-pressed={active}
              className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all focus-visible:ring-2 focus-visible:ring-gray-500"
              style={{
                backgroundColor: active ? meta.color : withAlpha(meta.color, 0.1),
                color: active ? '#ffffff' : meta.color,
              }}
            >
              {meta.icon} {meta.label}
            </button>
          );
        })}
      </nav>

      <div className="flex-1" />

      <nav className="flex gap-1 flex-wrap" aria-label="Information">
        {INFO_ITEMS.map(({ kind, label }) => (
          <button
            key={kind}
            onClick={() => onOpenInfo(kind)}
            className="px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-900/5 hover:text-gray-900 transition-colors focus-visible:ring-2 focus-visible:ring-gray-500"
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="relative w-56" ref={searchRef}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Search country or alliance..."
          role="combobox"
          aria-expanded={results.length > 0}
          aria-controls="header-search-results"
          aria-activedescendant={results.length > 0 ? `search-opt-${activeIndex}` : undefined}
          className="w-full px-3 py-1.5 text-sm text-gray-900 placeholder-gray-400 bg-white/80 border border-gray-200 rounded-lg outline-none focus:border-gray-400 focus-visible:ring-2 focus-visible:ring-gray-400 transition-colors"
        />
        {query.trim() && (
          <div
            id="header-search-results"
            role="listbox"
            className="absolute top-full right-0 w-72 mt-2 p-2 z-50 max-h-72 overflow-y-auto bg-white/90 backdrop-blur-xl border border-gray-200 rounded-xl shadow-xl"
          >
            {results.length === 0 && <div className="text-xs text-gray-400 px-2 py-1">No results</div>}
            {results.map((r, i) => (
              <button
                key={`${r.kind}-${r.key}`}
                id={`search-opt-${i}`}
                role="option"
                aria-selected={i === activeIndex}
                onClick={() => choose(r)}
                onMouseEnter={() => setActiveIndex(i)}
                className={`block w-full text-left text-sm text-gray-900 px-2 py-1 rounded transition-colors ${
                  i === activeIndex ? 'bg-gray-100' : ''
                }`}
              >
                {r.kind === 'alliance' ? (
                  <>
                    {r.alliance.name}{' '}
                    <span className="text-gray-400 text-xs">
                      {r.alliance.categories.map((c) => CATEGORY_META[c].icon).join('')} alliance
                    </span>
                  </>
                ) : (
                  r.label
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

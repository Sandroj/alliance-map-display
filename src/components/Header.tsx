import React, { useEffect, useMemo, useRef, useState } from 'react';
import { BookOpenText, CircleHelp, Database, Globe2, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Alliance } from '@/data/alliances';
import { CountryInfo } from '@/data/countries';
import { CATEGORY_META } from '@/data/categories';
import { ATLAS_MODE_NAV } from '@/data/atlas-modes';

export type InfoKind = 'about' | 'legend' | 'sources';

interface HeaderProps {
  alliances: Alliance[];
  countries: Record<string, CountryInfo>;
  onSelectAlliance: (alliance: Alliance) => void;
  onSelectCountry: (code: string) => void;
  onOpenInfo: (which: InfoKind) => void;
}

type SearchResult =
  | { kind: 'alliance'; key: string; alliance: Alliance }
  | { kind: 'country'; key: string; code: string; label: string };

const INFO_ITEMS: { kind: InfoKind; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { kind: 'about', label: 'About', icon: CircleHelp },
  { kind: 'legend', label: 'Legend', icon: BookOpenText },
  { kind: 'sources', label: 'Sources', icon: Database },
];

const Header: React.FC<HeaderProps> = ({
  alliances,
  countries,
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
    <header className="sticky top-4 z-30 flex flex-wrap items-center gap-x-4 gap-y-3 px-4 py-3 bg-white/72 backdrop-blur-xl border border-white/70 shadow-sm rounded-xl">
      <div className="flex min-w-[13rem] items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-gray-950 text-white shadow-sm">
          <Globe2 className="h-5 w-5" />
        </span>
        <span>
          <span className="block font-heading text-lg font-bold text-gray-950">Geopolitical Atlas</span>
          <span className="block text-[11px] font-medium text-gray-500">Strategic alignments, resources and routes</span>
        </span>
      </div>

      <nav className="flex gap-1.5 flex-wrap" aria-label="Information">
        {ATLAS_MODE_NAV.map(({ id, label, path, icon: Icon }) => (
          <NavLink
            key={id}
            to={path}
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-900/5 hover:text-gray-950 focus-visible:ring-2 focus-visible:ring-gray-500"
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </NavLink>
        ))}
        {INFO_ITEMS.map(({ kind, label, icon: Icon }) => (
          <button
            key={kind}
            onClick={() => onOpenInfo(kind)}
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-900/5 hover:text-gray-950 focus-visible:ring-2 focus-visible:ring-gray-500"
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </button>
        ))}
      </nav>

      <div className="flex-1" />

      <div className="relative w-full sm:w-72" ref={searchRef}>
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
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
          className="w-full rounded-lg border border-gray-200 bg-white/86 py-2 pl-9 pr-3 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-gray-400 focus-visible:ring-2 focus-visible:ring-gray-400"
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
                      {CATEGORY_META[r.alliance.categories[0]].label} layer
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

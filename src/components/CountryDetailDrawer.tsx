import React from 'react';
import { Alliance } from '@/data/alliances';
import { countries } from '@/data/countries';
import { findCountryAlliances } from '@/utils/mapUtils';
import { getContrastTextColor, withAlpha } from '@/utils/colorUtils';

interface CountryDetailDrawerProps {
  countryCode: string | null;
  alliances: Alliance[];
  onClose: () => void;
}

const CountryDetailDrawer: React.FC<CountryDetailDrawerProps> = ({
  countryCode,
  alliances,
  onClose,
}) => {
  if (!countryCode) return null;

  const info = countries[countryCode];
  const memberships = findCountryAlliances(countryCode, alliances);

  return (
    <div className="absolute top-4 right-4 bottom-4 w-56 p-4 flex flex-col gap-3 z-10 overflow-y-auto bg-white/70 backdrop-blur-xl border border-gray-200 shadow-sm rounded-xl">
      <button
        onClick={onClose}
        className="self-end text-gray-400 hover:text-gray-900 text-sm"
        aria-label="Sluiten"
      >
        ✕
      </button>
      <div>
        <div className="text-3xl">{info?.flag ?? '🏳️'}</div>
        <div className="font-heading font-bold text-lg text-gray-900">
          {info?.name ?? countryCode}
        </div>
        <div className="text-xs text-gray-400 uppercase tracking-wide">
          {memberships.length} {memberships.length === 1 ? 'alliantie' : 'allianties'}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {memberships.map(({ alliance, joinYear }) => (
          <div
            key={alliance.id}
            className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold"
            style={{
              backgroundColor: withAlpha(alliance.color, 0.22),
              color: alliance.color,
            }}
          >
            <span>{alliance.name}</span>
            <span className="font-mono">{joinYear}</span>
          </div>
        ))}
        {memberships.length === 0 && (
          <div className="text-xs text-gray-400">Geen lidmaatschappen bekend</div>
        )}
      </div>
    </div>
  );
};

export default CountryDetailDrawer;

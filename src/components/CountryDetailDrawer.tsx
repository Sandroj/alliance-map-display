import React, { useEffect, useRef } from 'react';
import { Alliance, MemberStatus } from '@/data/alliances';
import { countries } from '@/data/countries';
import { CATEGORY_META } from '@/data/categories';
import { findCountryAlliances } from '@/utils/mapUtils';
import { withAlpha } from '@/utils/colorUtils';

interface CountryDetailDrawerProps {
  countryCode: string | null;
  alliances: Alliance[];
  onClose: () => void;
  onShowInfo: (alliance: Alliance) => void;
}

const STATUS_LABELS: Record<MemberStatus, string> = {
  observer: 'Observer',
  dialogue: 'Dialogue partner',
  partner: 'Partner',
  suspended: 'Suspended',
};

const CountryDetailDrawer: React.FC<CountryDetailDrawerProps> = ({
  countryCode,
  alliances,
  onClose,
  onShowInfo,
}) => {
  // Onthoud het laatst getoonde land zodat de inhoud tijdens de
  // uitschuif-animatie zichtbaar blijft.
  const lastCode = useRef<string | null>(null);
  if (countryCode) lastCode.current = countryCode;
  const displayCode = countryCode ?? lastCode.current;
  const open = countryCode !== null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!displayCode) return null;

  const info = countries[displayCode];
  const memberships = findCountryAlliances(displayCode, alliances);

  return (
    <div
      aria-hidden={!open}
      className={`absolute top-4 right-4 bottom-4 w-56 p-4 flex flex-col gap-3 z-10 overflow-y-auto bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm rounded-xl transition-transform duration-300 ease-out ${
        open ? 'translate-x-0' : 'translate-x-[120%]'
      }`}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        tabIndex={open ? 0 : -1}
        className="self-end text-gray-400 hover:text-gray-900 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-gray-400 rounded px-1"
      >
        ✕
      </button>
      <div>
        <div className="text-3xl">{info?.flag ?? '🏳️'}</div>
        <div className="font-heading font-bold text-lg text-gray-900">{info?.name ?? displayCode}</div>
        <div className="text-xs text-gray-400 uppercase tracking-wide">
          {memberships.length} {memberships.length === 1 ? 'alliance' : 'alliances'}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {memberships.map(({ alliance, joinYear, status }) => (
          <button
            key={alliance.id}
            onClick={() => onShowInfo(alliance)}
            tabIndex={open ? 0 : -1}
            className="text-left rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-transform hover:-translate-y-px focus-visible:ring-2 focus-visible:ring-gray-500"
            style={{ backgroundColor: withAlpha(alliance.color, 0.22), color: alliance.color }}
          >
            <span className="flex items-center justify-between gap-2">
              <span>
                {alliance.name}{' '}
                <span className="text-[9px] opacity-70">
                  {alliance.categories.map((c) => CATEGORY_META[c].label).join(' / ')}
                </span>
              </span>
              <span className="font-mono">{joinYear}</span>
            </span>
            {status && (
              <span className="block mt-0.5 text-[10px] font-normal opacity-75">{STATUS_LABELS[status]}</span>
            )}
          </button>
        ))}
        {memberships.length === 0 && <div className="text-xs text-gray-400">No known memberships</div>}
      </div>
    </div>
  );
};

export default CountryDetailDrawer;

import React, { useEffect, useState } from 'react';
import { Alliance } from '@/data/alliances';
import { CATEGORY_META } from '@/data/categories';
import { getAllianceStats } from '@/utils/allianceStats';
import { fetchWikiSummary, WikiSummary } from '@/utils/wikipedia';
import InfoOverlay from './InfoOverlay';

interface OrgProfileModalProps {
  alliance: Alliance | null;
  onClose: () => void;
}

const OrgProfileModal: React.FC<OrgProfileModalProps> = ({ alliance, onClose }) => {
  const [summary, setSummary] = useState<WikiSummary | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!alliance?.wikipediaTitle) {
      setSummary(null);
      return;
    }
    let cancelled = false;
    setLoading(true);
    fetchWikiSummary(alliance.wikipediaTitle).then((s) => {
      if (!cancelled) {
        setSummary(s);
        setLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [alliance]);

  if (!alliance) return null;
  const stats = getAllianceStats(alliance);

  return (
    <InfoOverlay title={alliance.name} onClose={onClose}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3 text-xs text-gray-500">
        <span>
          {alliance.categories.map((c) => CATEGORY_META[c].label).join(' · ')}
        </span>
        <span className="font-mono">{stats.memberCount} members</span>
        {stats.foundingYear && <span className="font-mono">since {stats.foundingYear}</span>}
        {alliance.asOf && <span className="font-mono">as of {alliance.asOf}</span>}
      </div>
      {alliance.mapNote && <p className="mb-3 text-xs italic text-gray-500">{alliance.mapNote}</p>}
      {loading && (
        <div className="space-y-2 animate-pulse" aria-label="Loading">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-11/12" />
          <div className="h-3 bg-gray-200 rounded w-4/5" />
        </div>
      )}
      {!loading && summary && (
        <div>
          {summary.thumbnailUrl && (
            <img src={summary.thumbnailUrl} alt="" className="float-right ml-3 mb-2 w-24 rounded-lg" />
          )}
          <p className="whitespace-pre-line">{summary.extract}</p>
          <p className="mt-3 text-xs text-gray-400 clear-both">
            From Wikipedia ·{' '}
            <a
              href={summary.pageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read more on Wikipedia →
            </a>
          </p>
        </div>
      )}
      {!loading && !summary && <p>{alliance.description}</p>}
      {alliance.sourceRefs && alliance.sourceRefs.length > 0 && (
        <div className="mt-4 border-t border-gray-200 pt-3">
          <div className="mb-1 text-[11px] font-bold uppercase text-gray-500">Curated sources</div>
          <div className="flex flex-col gap-1">
            {alliance.sourceRefs.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-blue-700 hover:underline"
              >
                {source.title}
                {source.checkedAt ? ` · checked ${source.checkedAt}` : ''}
              </a>
            ))}
          </div>
        </div>
      )}
    </InfoOverlay>
  );
};

export default OrgProfileModal;

import { Alliance } from '@/data/alliances';

export interface AllianceStats {
  memberCount: number;
  foundingYear?: number;
}

export const getAllianceStats = (alliance: Alliance): AllianceStats => {
  const knownJoinYears = alliance.members
    .map((member) => member.joinYear)
    .filter((year): year is number => typeof year === 'number');
  const foundingYear = alliance.foundedYear ?? (knownJoinYears.length > 0 ? Math.min(...knownJoinYears) : undefined);

  return {
    memberCount: alliance.members.length,
    foundingYear,
  };
};

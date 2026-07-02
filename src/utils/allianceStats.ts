import { Alliance } from '@/data/alliances';

export interface AllianceStats {
  memberCount: number;
  foundingYear: number;
}

export const getAllianceStats = (alliance: Alliance): AllianceStats => {
  const foundingYear = alliance.members.reduce(
    (earliest, member) => Math.min(earliest, member.joinYear),
    Infinity
  );
  return {
    memberCount: alliance.members.length,
    foundingYear,
  };
};

import { Alliance } from './types';
import { europeanAlliances } from './european';
import { asianAlliances } from './asian';
import { globalAlliances } from './global';

export type { Alliance } from './types';

export const alliances: Alliance[] = [
  ...europeanAlliances,
  ...asianAlliances,
  ...globalAlliances
];

export const findCountryAlliances = (countryCode: string, alliances: Alliance[]): Array<{ name: string; joinYear: number }> => {
  return alliances.reduce((acc, alliance) => {
    const membership = alliance.members.find(member => member.code === countryCode);
    if (membership) {
      acc.push({ name: alliance.name, joinYear: membership.joinYear });
    }
    return acc;
  }, [] as Array<{ name: string; joinYear: number }>);
};
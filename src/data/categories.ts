import { AllianceCategory } from './alliance-types';

export const CATEGORY_META: Record<AllianceCategory, { label: string; color: string }> = {
  militair: { label: 'Military', color: 'hsl(0, 70%, 50%)' },
  handel: { label: 'Trade', color: 'hsl(36, 80%, 45%)' },
  politiek: { label: 'Political', color: 'hsl(240, 60%, 55%)' },
  religieus: { label: 'Religious', color: 'hsl(165, 70%, 40%)' },
};

export const CATEGORY_ORDER: AllianceCategory[] = ['militair', 'handel', 'politiek', 'religieus'];

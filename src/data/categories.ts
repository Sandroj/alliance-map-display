import { AllianceCategory } from './alliance-types';

export const CATEGORY_META: Record<AllianceCategory, { label: string; icon: string; color: string }> = {
  militair: { label: 'Military', icon: '⚔️', color: 'hsl(0, 70%, 50%)' },
  handel: { label: 'Trade', icon: '💰', color: 'hsl(36, 80%, 45%)' },
  politiek: { label: 'Political', icon: '🏛️', color: 'hsl(240, 60%, 55%)' },
  religieus: { label: 'Religious', icon: '☪️', color: 'hsl(165, 70%, 40%)' },
};

export const CATEGORY_ORDER: AllianceCategory[] = ['militair', 'handel', 'politiek', 'religieus'];

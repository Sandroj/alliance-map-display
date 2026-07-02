export const getContrastTextColor = (hslColor: string): string => {
  const match = hslColor.match(/hsl\(\s*[\d.]+\s*,\s*[\d.]+%\s*,\s*([\d.]+)%\s*\)/);
  const lightness = match ? parseFloat(match[1]) : 50;
  return lightness > 58 ? '#0a0a0a' : '#ffffff';
};

export const withAlpha = (hslColor: string, alpha: number): string => {
  return hslColor.replace('hsl(', 'hsla(').replace(')', `, ${alpha})`);
};

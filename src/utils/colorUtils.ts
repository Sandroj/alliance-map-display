export const getContrastTextColor = (hslColor: string): string => {
  const match = hslColor.match(/hsl\(\s*[\d.]+\s*,\s*[\d.]+%\s*,\s*([\d.]+)%\s*\)/);
  const lightness = match ? parseFloat(match[1]) : 50;
  return lightness > 58 ? '#0a0a0a' : '#ffffff';
};

export const withAlpha = (hslColor: string, alpha: number): string => {
  const hex = hslColor.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (hex) {
    const [, r, g, b] = hex;
    return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${alpha})`;
  }

  return hslColor.replace('hsl(', 'hsla(').replace(')', `, ${alpha})`);
};

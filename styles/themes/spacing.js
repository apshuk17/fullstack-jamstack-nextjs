import { BASE_FONT_SIZE as baseFontSize } from './theme.constants';

export const gap = (value, unit = 'rem', multiplier = 0.25) => {
  return `${value * multiplier}${unit}`;
};

export const spacing = factor => `${[8, 16, 24, 32, 40, 56, 80][factor] / baseFontSize}rem`;
// theme.spacing(n)       n: 0  1   2   3   4   5   6

export default spacing;

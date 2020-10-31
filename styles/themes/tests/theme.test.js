import theme from '../test.theme';
import { fonts } from '../typography';
import { BASE_FONT_SIZE as baseFontSize } from '../theme.constants';

describe('Theme props', () => {
  it('Sets spacing', () => {
    expect(theme).toHaveProperty('spacing');
  });
  it('Sets breakpoints', () => {
    expect(theme).toHaveProperty('breakpoints');
  });
  it('Sets typography', () => {
    expect(theme).toHaveProperty('typography');
  });
  it('Sets the base font size', () => {
    expect(theme.typography).toHaveProperty('htmlFontSize');
    expect(theme.typography.fontFamily).toBe(fonts.defaultFontStack);
    expect(baseFontSize).toBe(16); // Setting this explicitly as it should not be changed.
  });
  it('Sets the palette (color map)', () => {
    expect(theme).toHaveProperty('palette');
  });
  it('Sets the zIndexes', () => {
    expect(theme).toHaveProperty('zIndex');
  });
});

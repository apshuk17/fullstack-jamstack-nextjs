import { BASE_FONT_SIZE as baseFontSize } from './theme.constants';
import { pxToRem } from './theme.functions';
import breakpoints from './breakpoints';

const defaultFontStack = '"Helvetica Neue", "Helvetica", "Arial", sans-serif';
const primaryFontStack = `'Futura', ${defaultFontStack}`;
const secondaryBoldFontStack = `'Challenge', ${primaryFontStack}`;

export const fonts = {
  defaultFontStack,
  primaryFontStack,
  secondaryBoldFontStack,
};

/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

const typography = {
  htmlFontSize: baseFontSize, // This is the name of the property expected by Material-UI - it should be the same as baseFontSize, however should not replace baseFontSize because this is used as the base to calculate rem values
  // -- Default font styles --
  fontFamily: defaultFontStack,
  fontSize: 14,
  fontStyle: 'normal',
  fontWeightRegular: 'normal',
  lineHeight: 20 / baseFontSize,
  letterSpacing: '0.0125em',
  // -- END Default font styles --
  h1: {
    fontFamily: primaryFontStack,
    fontSize: `${pxToRem(30)}`,
    fontWeight: 800,
    lineHeight: 40 / 30,
    [breakpoints.up('sm')]: {
      fontSize: `${pxToRem(38)}`,
      lineHeight: 52 / 38,
    },
  },
  h2: {
    fontFamily: primaryFontStack,
    fontSize: `${pxToRem(26)}`,
    fontWeight: 800,
    lineHeight: 36 / 26,
    [breakpoints.up('sm')]: {
      fontSize: `${pxToRem(32)}`,
      lineHeight: 44 / 32,
    },
  },
  h3: {
    fontFamily: primaryFontStack,
    fontSize: `${pxToRem(22)}`,
    fontWeight: 800,
    lineHeight: 28 / 22,
    [breakpoints.up('sm')]: {
      fontSize: `${pxToRem(26)}`,
      lineHeight: 36 / 26,
    },
  },
  h4: {
    fontFamily: primaryFontStack,
    fontSize: `${pxToRem(18)}`,
    fontWeight: 800,
    lineHeight: 24 / 18,
    [breakpoints.up('sm')]: {
      fontSize: `${pxToRem(20)}`,
      lineHeight: 28 / 20,
    },
  },
  // -- h5 and h6 are not used in the Bunnings AU theme --
  h5: {
    fontFamily: primaryFontStack,
    fontSize: `${pxToRem(18)}`,
    fontWeight: 800,
    lineHeight: 24 / 18,
  },
  h6: {},
  // --
  subtitle1: { fontSize: `${pxToRem(16)}`, lineHeight: 24 / 16 },
  subtitle2: {},
  body1: {
    fontSize: `${pxToRem(14)}`,
    lineHeight: 20 / 14,
    [breakpoints.up('sm')]: {
      fontSize: `${16 / baseFontSize}rem`,
      lineHeight: 24 / 16,
    },
  },
  body2: {
    fontSize: `${pxToRem(12)}`,
    lineHeight: 18 / 12,
    [breakpoints.up('sm')]: {
      fontSize: `${12 / baseFontSize}rem`,
      lineHeight: 18 / 12,
    },
  },
  body3: {
    fontSize: `${pxToRem(14)}`,
    lineHeight: 20 / 14,
  },
  body4: {
    fontFamily: secondaryBoldFontStack,
    fontSize: `${pxToRem(32)}`,
    lineHeight: 36 / 32,
  },
  body5: {
    fontFamily: secondaryBoldFontStack,
    fontSize: `${pxToRem(40)}`,
    lineHeight: 36 / 40,
  },
  button: {
    fontSize: `${pxToRem(14)}`,
    lineHeight: 20 / 14,
  },
  price: {
    fontFamily: secondaryBoldFontStack,
    fontSize: `${pxToRem(44)}`,
    lineHeight: 48 / 44,
  },
  itemPrice: {
    fontFamily: secondaryBoldFontStack,
    fontSize: `${pxToRem(22)}`,
    lineHeight: 32 / 44,
  },
  caption: {
    fontSize: `${pxToRem(12)}`,
    lineHeight: 18 / 12,
  },
  overline: {},
};
export default typography;

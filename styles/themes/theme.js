import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import breakpoints from './breakpoints';
import spacing, { gap } from './spacing';
import transitions from './transitions';
import typography, { fonts } from './typography';
import opacity from './opacity';
import zIndex from './zIndex';
import { BUNNINGS_AU } from './themes.constants';

const easing = (ease, prop = 'all') => {
  const easingArr = {
    in: `${prop} 0.3s cubic-bezier(0.755, 0.050, 0.855, 0.060)`,
    out: `${prop} 0.3s cubic-bezier(0.230, 1.000, 0.320, 1.000)`,
    inOut: `${prop} 0.3s cubic-bezier(0.860, 0.000, 0.070, 1.000)`,
  };
  return easingArr[ease];
};

const theme = ({ colors }) =>
  createMuiTheme({
    brand: BUNNINGS_AU,
    fonts,
    palette: palette(colors),
    breakpoints,
    typography,
    transitions,
    easing,
    zIndex,
    opacity,
    spacing,
    gap,
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
    overrides: {
      MuiDialogActions: {
        root: {
          display: 'none',
        },
      },
      MuiPickersDay: {
        daySelected: {
          backgroundColor: '#08454A !important',
          color: 'white !important',
          borderRadius: '2px !important',
        },
        dayDisabled: {
          color: '#BFBFBF !important',
        },
        current: {
          color: '#333333 !important',
        },
      },
    },
  });

export default theme;

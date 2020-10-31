import { BUNNINGS_AU, BUNNINGS_NZ } from "./themes.constants";
import nzTheme from "./bunnings-nz";
import auTheme from "./bunnings-au";
import theme from "./theme";

// const getTheme = siteName => {
//   switch (siteName) {
//     case BUNNINGS_NZ:
//       return theme(nzTheme);
//     case BUNNINGS_AU:
//       return theme(auTheme);
//     default:
//       return theme(auTheme);
//   }
// };

const getTheme = () => {
  return theme(auTheme);
};

export default getTheme;

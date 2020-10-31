import { css } from "styled-components";

const getStyles = (theme) => css`
  body {
    position: relative;
    font-family: ${theme.typography.fontFamily};
    font-size: ${theme.typography.htmlFontSize}px;
    color: ${theme.palette.primary};
    width: 100%;
    box-sizing: border-box;
    overflow-x: hidden;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default css`
  ${({ theme }) => getStyles(theme)}
`;

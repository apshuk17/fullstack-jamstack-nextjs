import styled, { css } from "styled-components";
import Link from "next/link";
import Button from "@material-ui/core/Button";

export const NavBarContainer = styled.div`
  ${() => css`
    flex-grow: 1;
  `};
`;

export const LinkContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-grow: 1;
    a {
      margin-right: ${theme.spacing(2)};
      color: ${theme.palette.interactivePrimary.contrastText};
      text-decoration: none;
    }
  `}
`;

export const ButtonWrapper = styled(Button)`
  ${({ theme }) => css`
    background-color: ${theme.palette.background.dark};
  `}
`;

export const LinkWrapper = styled(Link)``;

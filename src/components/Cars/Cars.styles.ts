import styled, { css } from "styled-components";

export const Heading = styled.h1`
  ${({ theme }) => css`
    ${theme.typography.h4}
  `}
`;

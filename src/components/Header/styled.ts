import { Link as RouterLink } from "react-router-dom";

import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${(p) => p.theme.md}) {
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 1rem;
  }
`;

export const Link = styled(RouterLink)`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

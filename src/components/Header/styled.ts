import { Link as RouterLink } from "react-router-dom";

import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 0.3rem solid ${(p) => p.theme.text};
  margin-bottom: 1rem;
  padding: 1rem 0.5rem;

  @media only screen and (min-width: ${(p) => p.theme.md}) {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 5rem;
    padding: 1.5rem 0;
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

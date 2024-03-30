import styled from "styled-components";

export const Main = styled.main`
  padding: 0;

  @media only screen and (min-width: ${(p) => p.theme.md}) {
    padding: 0 10rem;
  }
`;

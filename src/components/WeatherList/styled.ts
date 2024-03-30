import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media only screen and (min-width: ${(p) => p.theme.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media only screen and (min-width: ${(p) => p.theme.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
`;

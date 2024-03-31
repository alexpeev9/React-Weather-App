import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  ${(p) => p.theme.media.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  ${(p) => p.theme.media.lg} {
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
  }
`;

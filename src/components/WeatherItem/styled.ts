import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  border-radius: 0;

  @media only screen and (min-width: ${(p) => p.theme.md}) {
    border-radius: 1rem;
  }
`;

export const Image = styled.img`
  width: 6rem;
  height: 6rem;
`;

export const WeatherText = styled.p`
  text-align: center;
`;

export const Span = styled.span`
  font-weight: 800;
`;

export const P = styled.p``;

export const H3 = styled.h3`
  text-align: center;
`;

export const ImageSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0.3rem;
`;

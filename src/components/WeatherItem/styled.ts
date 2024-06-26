import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  border-radius: 0;

  ${(p) => p.theme.media.md} {
    border-radius: 1rem;
    flex-direction: row;
  }
`;

export const WeatherText = styled.p`
  text-align: center;
`;

export const Span = styled.span`
  font-weight: 800;
`;

export const P = styled.p`
  text-align: center;

  ${(p) => p.theme.media.md} {
    text-align: left;
  }
`;

export const TextLink = styled.p`
  font-weight: 800;
  text-decoration: underline;
  text-align: right;
  margin-right: 3rem;

  &:hover {
    text-decoration: none;
  }

  ${(p) => p.theme.media.md} {
    margin: 0;
  }
`;

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

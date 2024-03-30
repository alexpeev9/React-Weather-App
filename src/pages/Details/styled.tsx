import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Heading = styled.h2`
  text-align: center;

  @media only screen and (min-width: ${(p) => p.theme.md}) {
    text-align: left;
  }
`;

export const Span = styled.span`
  text-decoration: underline;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1.5rem;
`;

export const Link = styled(RouterLink)`
  font-size: 1.5rem;
  text-decoration: underline;
  margin-bottom: 1.5rem;

  &:hover {
    text-decoration: none;
  }
`;

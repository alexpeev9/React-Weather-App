import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Heading = styled.h2`
  text-align: center;

  ${(p) => p.theme.media.md} {
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
  font-size: ${(p) => p.theme.fontSize.sm};
  text-decoration: underline;
  margin-bottom: 1.5rem;

  &:hover {
    text-decoration: none;
  }
`;

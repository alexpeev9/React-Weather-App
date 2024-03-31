import styled from "styled-components";

export const Svg = styled.svg`
  animation: bounce 1s infinite ease-in-out;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(0.5rem);
    }
  }
`;

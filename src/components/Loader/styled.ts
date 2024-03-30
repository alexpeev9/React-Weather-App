import styled from "styled-components";

export const LoaderContainer = styled.div`
  background-color: ${(p) => p.theme.primary};
  cursor: wait;
  overflow: hidden;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 !important;
  font-weight: 800;
  font-size: 2.5rem;

  @media only screen and (min-width: ${(p) => p.theme.sm}) {
    font-size: 4rem;
  }
`;

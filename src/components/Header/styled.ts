import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 0.3rem solid ${(p) => p.theme.secondary};
  margin-bottom: 1rem;
  padding: 1rem 0.5rem;

  @media only screen and (min-width: ${(p) => p.theme.md}) {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 2rem;
    padding: 1rem 0;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;

  @media only screen and (min-width: ${(p) => p.theme.md}) {
    font-size: 3rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

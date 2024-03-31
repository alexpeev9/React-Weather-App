import styled from "styled-components";

export const Main = styled.main`
  padding: 0;

  ${(p) => p.theme.media.md} {
    padding: 0 10rem;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 0.3rem solid ${(p) => p.theme.color.secondary};
  margin-bottom: 1rem;
  padding: 1rem 0.5rem;

  ${(p) => p.theme.media.md} {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 2rem;
    padding: 1rem 0;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: ${(p) => p.theme.fontSize.md};
  font-weight: 800;
  text-align: center;

  ${(p) => p.theme.media.md} {
    font-size: ${(p) => p.theme.fontSize.lg};
  }

  &:hover {
    text-decoration: underline;
  }
`;

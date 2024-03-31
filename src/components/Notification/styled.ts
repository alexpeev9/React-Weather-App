import styled from "styled-components";

export const NotificationContainer = styled.div`
  background-color: ${(p) => p.theme.color.primary};
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

  ${(p) => p.theme.media.md} {
    align-items: center;
  }
`;

export const NotificationText = styled.p`
  margin: 0;
  padding: 3rem 1rem;
  text-align: center;
  font-weight: 800;
  font-size: ${(p) => p.theme.fontSize.md};

  ${(p) => p.theme.media.md} {
    padding: 0 5rem;
  }
`;

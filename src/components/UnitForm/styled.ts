import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(p) => p.theme.media.sm} {
    flex-direction: row;
  }

  &:hover,
  input:hover,
  label:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
`;

export const Label = styled.label`
  font-size: ${(p) => p.theme.fontSize.sm};
  padding-right: 0;
  margin-bottom: 1.5rem;

  ${(p) => p.theme.media.sm} {
    padding-right: 2rem;
    margin-bottom: 0;
  }
`;

import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${(p) => p.theme.sm}) {
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
  font-size: 2rem;
  padding-right: 0;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: ${(p) => p.theme.sm}) {
    padding-right: 2rem;
    margin-bottom: 0;
  }
`;

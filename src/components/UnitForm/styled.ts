import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: ${(p) => p.theme.sm}) {
    flex-direction: row;
  }

  /* Hide the default radio button */
  input[type="radio"] {
    appearance: none; /* Remove default appearance */
    -webkit-appearance: none; /* For Safari/Chrome */
    -moz-appearance: none; /* For Firefox */
    width: 16px; /* Size of the radio button */
    height: 16px; /* Size of the radio button */
    border: 2px solid black; /* Border color of the radio button */
    border-radius: 50%; /* Makes it a circle */
    outline: none; /* Remove outline */
  }

  /* Style the radio button when it's checked */
  input[type="radio"]:checked {
    background-color: black; /* Color when checked */
  }

  &l:hover,
  input:hover,
  label:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 3rem;
  height: 3rem;
  margin-right: 0.5rem;
`;

export const Label = styled.label`
  font-size: 2rem;
  font-weight: 400;
  padding-right: 0;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: ${(p) => p.theme.sm}) {
    padding-right: 2rem;
    margin-bottom: 0;
  }
`;

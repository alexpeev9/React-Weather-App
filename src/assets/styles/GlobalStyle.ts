import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: ${(p) => p.theme.primary};

  }

  a {
    text-decoration: none;
    color: ${(p) => p.theme.text};
  }
`;

export default GlobalStyle;

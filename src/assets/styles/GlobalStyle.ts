import { createGlobalStyle } from "styled-components";
import { StyleConstants } from "./StyleConstants";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    margin: 0;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: ${(p) => p.theme.primary};
    padding: 1rem;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${(p) => p.theme.text};
    padding-bottom: ${StyleConstants.BASE_PADDING};
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";
import { StyleConstants } from "./StyleConstants";

const GlobalStyle = createGlobalStyle`
  
  html,body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }
  
  a {
    text-decoration: none;
    color: ${(p) => p.theme.text};
    padding-bottom: ${StyleConstants.BASE_PADDING};
  }
`;

export default GlobalStyle;

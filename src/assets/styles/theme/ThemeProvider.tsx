import { ThemeProvider as OriginalThemeProvider } from "styled-components";

import theme from "./theme";
import { Props } from "../../../utils/types";

const ThemeProvider = ({ children }: Props) => {
  return (
    <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
  );
};

export default ThemeProvider;

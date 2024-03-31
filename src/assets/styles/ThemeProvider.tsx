import { ThemeProvider as OriginalThemeProvider } from "styled-components";
import { Props } from "../../utils/types";
import { theme } from "./theme";

const ThemeProvider = ({ children }: Props) => {
  // Returning ThemeProvider with custom theme
  return (
    <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
  );
};

export default ThemeProvider;

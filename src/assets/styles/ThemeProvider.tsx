import { ThemeProvider as OriginalThemeProvider } from "styled-components";
import { Props } from "../../utils/types";

const ThemeProvider = ({ children }: Props) => {
  // Defining theme object with color and size variables
  const theme = {
    primary: "#f2b524", // Primary color (orange)
    secondary: "#000000", // Secondary color (black)
    sm: "300px", // Small breakpoint
    md: "900px", // Medium breakpoint
    lg: "1200px", // Large breakpoint
  };

  // Returning ThemeProvider with custom theme
  return (
    <OriginalThemeProvider theme={theme}>{children}</OriginalThemeProvider>
  );
};

export default ThemeProvider;

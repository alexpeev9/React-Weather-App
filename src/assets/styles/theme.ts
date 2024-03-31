// Define a function to generate custom media queries
const customMediaQuery = (minWidth: number): string =>
  `@media only screen and (min-width: ${minWidth}px)`;

// Define theme object with color variables
export const theme = {
  color: {
    primary: "#f2b524", // Primary color (orange)
    secondary: "#000000", // Secondary color (black)
  },
  fontSize: {
    lg: "3rem",
    md: "2.5rem",
    sm: "1.5rem",
  },
  media: {
    lg: customMediaQuery(1200), // Desktop screen
    md: customMediaQuery(900), // Tablet screen
    sm: customMediaQuery(300), // Small screen
  },
};

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MeasurementProvider } from "./contexts/MeasurementContext";
import { WeatherProvider } from "./contexts/WeatherContext";

import Home from "./pages/Home";
import Details from "./pages/Details";

import ThemeProvider from "../src/assets/styles/theme/ThemeProvider";
import { GlobalStyle } from "./assets/styles";

export default function App() {
  return (
    <ThemeProvider>
      <MeasurementProvider>
        <WeatherProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/day/:date" element={<Details />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Router>
        </WeatherProvider>
      </MeasurementProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

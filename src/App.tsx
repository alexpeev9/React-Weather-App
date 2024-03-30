import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { UnitProvider } from "./contexts/UnitContext";
import { WeatherProvider } from "./contexts/WeatherContext";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Layout from "./components/Layout";

import ThemeProvider from "../src/assets/styles/theme/ThemeProvider";
import { GlobalStyle } from "./assets/styles";

export default function App() {
  return (
    <ThemeProvider>
      <UnitProvider>
        <WeatherProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="/day/:date" element={<Details />} />
              </Route>
            </Routes>
          </Router>
        </WeatherProvider>
      </UnitProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

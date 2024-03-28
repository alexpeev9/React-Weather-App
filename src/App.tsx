import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MeasurementProvider } from "./contexts/MeasurementContext";
import { WeatherProvider } from "./contexts/WeatherContext";

import Home from "./pages/Home";
import Details from "./pages/Details";

export default function App() {
  return (
    <MeasurementProvider>
      <WeatherProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/day/:number" element={<Details />} />
          </Routes>
        </Router>
      </WeatherProvider>
    </MeasurementProvider>
  );
}

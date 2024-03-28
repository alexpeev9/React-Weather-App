import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MeasurementProvider } from "./contexts/MeasurementContext";

import Home from "./pages/Home";
import Layout from "./components/commons/Layout";
import { WeatherProvider } from "./contexts/WeatherContext";

export default function App() {
  return (
    <MeasurementProvider>
      <WeatherProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </WeatherProvider>
    </MeasurementProvider>
  );
}

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/commons/Layout";
import Home from "./pages/Home";
import { MeasurementProvider } from "./contexts/MeasurementContext";

export default function App() {
  return (
    <MeasurementProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </MeasurementProvider>
  );
}

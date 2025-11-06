import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components Imports
import Header from "./Header.jsx";
import Intelligent from "./Intelligent.jsx";
import Footprint from "./Footprint.jsx";
import AboutZoei from "./AboutZOEI.jsx";
import ZoeiUnique from "./ZoeiUnique.jsx";
import SustainabilityManagement from "./SustainabilityManagement.jsx";
import ESGGoals from "./ESGGoals.jsx";
import ESGFrameworks from "./ESGFrameworks.jsx";
import IndustriesSection from "./IndustriesSection.jsx";
import ESGCTA from "./ESGCTA.jsx";
import Footer from "./Footer.jsx";
import CO2Calculator from "./CO2Calculator.jsx"; // 👈 import your calculator

function App() {
  return (
    <Router>
      {/* Header sab page par common rahega */}
      <Header />

      <Routes>
        {/* Home Page Routes */}
        <Route
          path="/"
          element={
            <>
              <Intelligent />
              <Footprint />
              <AboutZoei />
              <ZoeiUnique />
              <SustainabilityManagement />
              <ESGGoals />
              <ESGFrameworks />
              <IndustriesSection />
              <ESGCTA />
              <Footer />
            </>
          }
        />

        {/* CO₂ Calculator Page */}
        <Route path="/calculator" element={<CO2Calculator />} />
      </Routes>
    </Router>
  );
}

export default App;

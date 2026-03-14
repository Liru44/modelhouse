import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Intro from "./pages/overview/Intro";
import Location from "./pages/overview/Location";
import Company from "./pages/overview/Company";
import FloorPlan from "./pages/unit/FloorPlan";
import Facilities from "./pages/complex/Facilities";
import Nearby from "./pages/complex/Nearby";
import SitePlan from "./pages/complex/SitePlan";
import Schedule from "./pages/sale/Schedule";
import Subscription from "./pages/sale/Subscription";
import Notice from "./pages/customer/Notice";
import Faq from "./pages/customer/Faq";

function App() {
  return (
    <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/location" element={<Location />} />
                <Route path="/company" element={<Company />} />
                <Route path="/floor-plan" element={<FloorPlan />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/nearby" element={<Nearby />} />
                <Route path="/site-plan" element={<SitePlan />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/faq" element={<Faq />} />
            </Routes>
            <Footer />
    </Router>
    );
}

export default App;

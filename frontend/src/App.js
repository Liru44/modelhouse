import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

/*import Location from "./pages/Location";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";*/

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/location" element={<Location />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />*/}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

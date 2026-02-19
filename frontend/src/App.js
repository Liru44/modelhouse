import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
/*import Location from "./pages/Location";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";*/

function App() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            {/*<Route path="/location" element={<Location />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

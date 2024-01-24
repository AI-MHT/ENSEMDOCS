import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Departement from "./pages/Departement";
import ContactUs from "./pages/ContactUs";
import Gld from "./pages/Gld";
import Mec from "./pages/Mec";
import Ge from "./pages/Ge";
import Error from "./pages/Error";
import CVs from "./pages/CVs";
import { Route, Routes } from "react-router";
import React, { useEffect } from 'react';
import { initGA, logPageView } from './analytics';


function App() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gld" element={<Gld />} />
        <Route path="/Mec" element={<Mec />} />
        <Route path="/Ge" element={<Ge />} />
        <Route path="/Departement" element={<Departement />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/CVs" element={<CVs />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

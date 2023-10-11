import CVs from "./pages/CVs";
import ReactGA from 'react-ga';  // Added this import
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Departement from "./pages/Departement";
import ContactUs from "./pages/ContactUs";
import Gld from "./pages/Gld";
import Error from "./pages/Error";

function App() {
  ReactGA.initialize('G-32QL9DC11C');
  ReactGA.pageview(window.location.pathname + window.location.search);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gld" element={<Gld />} />
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

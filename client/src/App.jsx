import HomePage from "./components/homePage/mainPage";
import Navbar from "./components/Navbar/Navbar";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./components/aboutUsPage/AboutUs";
import ContactUS from "./components/Contact_Us/ContactUS";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUS />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

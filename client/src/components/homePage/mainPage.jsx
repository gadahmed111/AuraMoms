/* eslint-disable no-unused-vars */
import Navbar from "../Navbar/Navbar";
import TheCenterPatInHeroSection from '../hero section center/TheCenterPart'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function HomePage() {
  return (
    <>
      <Router>
        <Navbar />
        <TheCenterPatInHeroSection></TheCenterPatInHeroSection>
        <Routes>
          <Route />
          <Route />
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default HomePage;

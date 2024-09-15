/* eslint-disable no-unused-vars */
import Divider1 from "../DeviderSections/Divider1";
import PopularProducts from "../MostProduct/PopularProducts";
import Navbar from "../Navbar/Navbar";
import ParallaxSection from "../ParallexSection/ParallexSection";
import TheCenterPatInHeroSection from "../hero section center/TheCenterPart";
// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function HomePage() {
  return (
    <>
      <Navbar />
      <TheCenterPatInHeroSection></TheCenterPatInHeroSection>
      <PopularProducts />
      <ParallaxSection />
      <Divider1 />
    </>
  );
}

export default HomePage;

/* eslint-disable no-unused-vars */
import Divider1 from "../DeviderSections/Divider1";
import PopularProducts from "../MostProduct/PopularProducts";
import Navbar from "../Navbar/Navbar";
import ParallaxSection from "../ParallexSection/ParallexSection";
import TheCenterPatInHeroSection from "../hero section center/TheCenterPart";
import WhoWeAre from "../WhoWeAre/Who we are";
import TheGreenMan from "../TheGreenManPart/TheGreenMan";
import Benefit from "../benefitYouWillGet/BenefitYouWillGet";
import TestData from "../../CradData.jsx";
import About from "../AboutUs/AboutUs.jsx";
// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function HomePage() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar />
        <TheCenterPatInHeroSection></TheCenterPatInHeroSection>
        <WhoWeAre></WhoWeAre>
        <TheGreenMan></TheGreenMan>
        <br />
        <Divider1 />
        <PopularProducts />
        <Benefit></Benefit>
        <br />
        <About />
        {/* <TestData /> */}
        {/* Make Contact us HERE */}
        {/* Wait The Footer From Omar Farouk */}
        {/* <ParallaxSection /> */}
      </main>
    </>
  );
}

export default HomePage;

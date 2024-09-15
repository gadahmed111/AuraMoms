/* eslint-disable no-unused-vars */
import Navbar from "../Navbar/Navbar";
import TheCenterPatInHeroSection from '../hero section center/TheCenterPart'
import WhoWeAre from "../WhoWeAre/Who we are";
import BenefitYouWillGet from '../benefitYouWillGet/BenefitYouWillGet'
import TheGreenMan from '../TheGreenManPart/TheGreenMan'
// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function HomePage() {
  return (
    <>
    
        <Navbar />
        <TheCenterPatInHeroSection></TheCenterPatInHeroSection>
        <WhoWeAre></WhoWeAre>
        <TheGreenMan></TheGreenMan>
        <BenefitYouWillGet></BenefitYouWillGet>
    </>
  );
}

export default HomePage;

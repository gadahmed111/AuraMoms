/* eslint-disable no-unused-vars */
import Divider1 from "../DeviderSections/Divider1";
import PopularProducts from "../MostProduct/PopularProducts";
import Navbar from "../Navbar/Navbar";
import TheCenterPatInHeroSection from "../hero section center/TheCenterPart";
import WhoWeAre from "../WhoWeAre/Who we are";
import TheGreenMan from "../TheGreenManPart/TheGreenMan";
import Benefit from "../benefitYouWillGet/BenefitYouWillGet";
// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function HomePage() {
  return (
    <div className="dark:bg-DarkBackground">
      <TheCenterPatInHeroSection></TheCenterPatInHeroSection>
      <WhoWeAre></WhoWeAre>
      <TheGreenMan></TheGreenMan>
      <PopularProducts />
      <Benefit></Benefit>
    </div>
  );
}
export default HomePage;

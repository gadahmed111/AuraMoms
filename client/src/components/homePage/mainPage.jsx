/* eslint-disable no-unused-vars */
import Divider1 from "../DeviderSections/Divider1";
import PopularProducts from "../MostProduct/PopularProducts";
import Navbar from "../Navbar/Navbar";
import ParallaxSection from "../ParallexSection/ParallexSection";
import TheCenterPatInHeroSection from "../hero section center/TheCenterPart";
import WhoWeAre from '../WhoWeAre/Who we are';
import TheGreenMan from '../TheGreenManPart/TheGreenMan';
import Benefit from '../benefitYouWillGet/BenefitYouWillGet'
import TheAllAboutUsPAge from "../aboutUsPage/aboutus.jsx";
import TheFAQ from '../FAQPage/FAQPage.jsx';
import ContactUs from '../ContactUsPart/ContactUs.jsx'
// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function HomePage() {
  return (
    <div className="dark:bg-DarkBackground">
      {/* -------------------- The Nav */}
      {/* -------------------- The Home Page Part*/}
      <Navbar></Navbar>
      <TheCenterPatInHeroSection></TheCenterPatInHeroSection>
      <WhoWeAre></WhoWeAre>
      <TheGreenMan></TheGreenMan>
      <PopularProducts />
      <br />  
      <Benefit></Benefit>
      <br />
      {/* -------------------- Tha About us Page  */}
      {/* <TheAllAboutUsPAge></TheAllAboutUsPAge> */}
      {/*  -------------------- Make Contact us HERE */}
      <ContactUs></ContactUs>
       {/* -------------------- The FAQ PAge  */}
      {/* <TheFAQ></TheFAQ> */}
    </div>
  )
}
export default HomePage;

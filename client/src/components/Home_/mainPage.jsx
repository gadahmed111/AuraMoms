/* eslint-disable no-unused-vars */
import Divider1 from "./Divider1";
import PopularProducts from "./MostProduct/PopularProducts";
import TheCenterPatInHeroSection from "./TheCenterPart";
import WhoWeAre from "../About_US/WhoWeAre/Who we are";
import TheGreenMan from "./TheGreenMan";
import Benefit from "./BenefitYouWillGet";
function HomePage() {
  return (
    <div className="dark:bg-DarkBackground">
      <TheCenterPatInHeroSection />
      <WhoWeAre />
      <TheGreenMan />
      <PopularProducts />
      <Benefit />
    </div>
  );
}
export default HomePage;

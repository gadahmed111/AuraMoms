import BalanceSection from "../SideBar/BalanceSection";
import SideBar from "../SideBar/SideBar";
import MainContent from "../SideBar/mainContent";
function HomePage() {
  return (
    <>
      <main>
        <MainContent />
        <BalanceSection />
        <SideBar />
      </main>
    </>
  );
}

export default HomePage;

import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <main className="h-[500vh]">
        <Router>
          <Navbar />
          <Routes>
            <Route />
            <Route />
            <Route />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;

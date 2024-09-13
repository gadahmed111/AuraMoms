import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route />
          <Route />
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;

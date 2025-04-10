import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
//import JobSwipePage from "./pages/JobSwipePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/jobs" element={<JobSwipePage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

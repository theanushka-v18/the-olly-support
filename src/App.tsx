import Home from "./components/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Support from "./components/Support";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

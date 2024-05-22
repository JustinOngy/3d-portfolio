import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About, Home, Contact, Projects } from "./pages";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleNightMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main
      className={isDarkMode ? "bg-black-500 h-full" : "bg-slate-300/20 h-full"}>
      <Router>
        <Navbar isDarkMode={isDarkMode} toggleNightMode={toggleNightMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
          <Route
            path="/projects"
            element={<Projects isDarkMode={isDarkMode} />}
          />
          <Route
            path="/contact"
            element={<Contact isDarkMode={isDarkMode} />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

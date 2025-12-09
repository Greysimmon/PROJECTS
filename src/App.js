import React from "react";
import Navbar from "./Components/NavBar.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes here like /projects, /contact */}
      </Routes>
    </Router>
  );
}

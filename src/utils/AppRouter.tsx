import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/Pages/About";
import Contact from "../components/Pages/Contact";
import Projects from "../components/Pages/Projects";
import Navbar from "../components/common/Navbar";

const AppRouter: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default AppRouter;

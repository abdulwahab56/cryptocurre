import React from "react";
import "../header/Header.css";
import Hero from "../hero/Hero";
import Navbar from "../nav/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;

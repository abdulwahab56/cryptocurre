import React, { useEffect, useState } from "react";
import logoImg from "../img/logo.svg";
import "../nav/Navbar.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { FaBars } from "react-icons/fa";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const openClose = () => {
    setNav(!nav);
  };
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  useEffect(() => {
    console.log("view point :", inView);
    if (inView) {
      animation.start({
        y: 0,
        transition: { type: "spring", duration: 2, bounce: 0.3 },
      });
    }
    if (!inView) {
      animation.start({
        y: "-300",
      });
    }
  }, [inView]);
  return (
    <motion.div
      ref={ref}
      animate={animation}
      // initial={{ y: "-300" }}
      // animate={{ y: 0 }}
      // transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      className="nav-bar"
    >
      <img className="logo-img" src={logoImg} alt="logo_img" />
      <ul className={nav ? "nav-list active" : "nav-list"}>
        <li>Products</li>
        <li>Feature</li>
        <li>About</li>
        <li>Contact</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
      <div onClick={openClose} className="humburger">
        {nav ? (
          <AiOutlineCloseSquare size={30} style={{ color: "#f8f8f8" }} />
        ) : (
          <FaBars size={30} style={{ color: "#f8f8f8" }} />
        )}
      </div>
    </motion.div>
  );
};

export default Navbar;

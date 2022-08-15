import React, { useEffect } from "react";
import "../hero/Hero.css";
import heroImg from "../img/hero-img.png";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { data } from "../../data/HeroData";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView();
  useEffect(() => {
    console.log("view point :", inView);
    // if (inView) {
    //   animation.start({
    //     y: 0,
    //     transition: { type: "spring", duration: 2, bounce: 0.3 },
    //   });
    // }
    // if (!inView) {
    //   animation.start({
    //     y: "-300",
    //   });
    // }
  }, [inView]);
  return (
    <div className="section">
      <motion.div
        initial={{ y: "300" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 2, bounce: 0.3 }}
        className="span-text"
      >
        <span className="off">75% SAVE </span>
        <span>For the Black Friday weekned</span>
      </motion.div>
      <div className="hero-section">
        <motion.div
          initial={{ x: "-300" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 2, bounce: 0.3 }}
          className="hero-left"
        >
          <h1>Fatest & secure plateform to invest in crypto.</h1>
          <p>
            Buy and Sell cryptocurrience.Trusted by 100M wallet with over $30
            billion in transitions.{" "}
          </p>
          <div className="hero-btn">
            <a href="#"> Try for FREE</a>
            <IoIosArrowDroprightCircle className="hero-icon" />
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "300" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 2, bounce: 0.3 }}
          className="hero-right"
        >
          <img src={heroImg} alt="hero-img" />
        </motion.div>
      </div>
      <motion.div
        initial={{ x: "300" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 2, bounce: 0.3 }}
        className="hero-botom"
      >
        {data.map((el, index) => {
          return (
            <div className="icon-hero-botm" key={index}>
              <div className="her0-icon">{el.img}</div>
              <div className="her0-detail">
                <span>{el.prics}</span>
                <span>{el.detail}</span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Hero;

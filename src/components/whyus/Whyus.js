import React from "react";
import "../whyus/Whyus.css";
import WhyusImg from "../img/why-img.png";
import { motion } from "framer-motion";

const Whyus = () => {
  return (
    <div className="whyus-section">
      <div className="whyus-container">
        <motion.div
          initial={{ x: "-300" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 2, bounce: 0.3 }}
        >
          <img src={WhyusImg} alt="whyus-img" className="whyus-img" />
        </motion.div>
        <motion.div
          initial={{ x: "300" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 2, bounce: 0.3 }}
          className="whyus-right"
        >
          <h2>
            Why you should Choose <span className="whyus-title">CRAPPO</span>
          </h2>
          <span className="whyus-detail">
            Experience the next generation cryptocurrience plateform. No finical
            border,extra fee and fake news
          </span>
          <div>
            <button className="btn">Learn More</button>
          </div>
        </motion.div>
      </div>
      <div className="earning">
        <h2>Check How much you can earn</h2>
        <span className="whyus-detail">
          let's check your hash rate to see how much today{" "}
        </span>
      </div>
      <form className="form-whyus">
        <div className="inp">
          <input type="number" placeholder="Enter your hash rate" />
          <input type="text" placeholder="Enter value" />
          <button className="btn">Calculate</button>
        </div>
        <div>
          <div className="calcul">
            <span>Estimated 24 hour reveneu:</span>
            <span>0.0055 130 59 ETH</span>
            <span>Reveneu will change base of mining</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Whyus;

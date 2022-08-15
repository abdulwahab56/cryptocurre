import React from "react";
import "../footer/Footer.css";
import img from "../img/logo.svg";
import pay1 from "../img/visa.png";
import pay2 from "../img/mastercard.png";
import pay3 from "../img/bitcoin.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4>Quick Link</h4>
        <ul className="foot-list">
          <li>Home</li>
          <li>Product</li>
          <li>About</li>
          <li>Feature</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h4>Resource</h4>
        <ul className="foot-list">
          <li>Download Whitepaper</li>
          <li>Smart token</li>
          <li>Blockchain Explor</li>
          <li>Crpto API</li>
          <li>Interset</li>
        </ul>
      </div>
      <div className="foot-pay">
        <span>We accept following payment system</span>
        <div className="pay-card">
          <img src={pay1} alt="" />
          <img src={pay2} alt="" />
          <img src={pay3} alt="" />
        </div>
      </div>
      <span className="copyright"> &copy; CRAPPO.All right reserved</span>
    </div>
  );
};

export default Footer;

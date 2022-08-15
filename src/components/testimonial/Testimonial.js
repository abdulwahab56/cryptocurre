import React, { useEffect, useState } from "react";
import "../testimonial/Testimonial.css";
import Img1 from "../img/bitcon.png";
import Img2 from "../img/ethereum.png";
import Img3 from "../img/litecoin.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Testimonial = () => {
  const [clr, setClr] = useState(true);
  const [clr2, setClr2] = useState(true);
  const [clr3, setClr3] = useState(true);
  const [show, setShow] = useState(true);
  const [btnshow, setBtnshow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [btnshow2, setBtnshow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [btnshow3, setBtnshow3] = useState(false);

  useEffect(() => {
    setShow(!show);
    setBtnshow(!btnshow);
  }, [clr]);
  useEffect(() => {
    setShow2(show);
    setBtnshow2(btnshow);
  }, [clr2]);
  useEffect(() => {
    setShow3(show);
    setBtnshow3(btnshow);
  }, [clr3]);

  return (
    <div className="testimonial-section">
      <h1 className="testimonail-text">
        Trade securely and market the high groweth cryptocurrencies{" "}
      </h1>
      <div className="testimonial-feature">
        <div
          onClick={() => {
            setClr(!clr);
            setClr2(true);
            setClr3(true);
          }}
          className={`textimon ${clr === true ? "clrchange" : ""}`}
        >
          <img src={Img1} alt="bit-con" className="testimonial-img" />
          <h2 className="bit-coin">Bitcoin</h2>
          <span className="text-detail">
            Digital currency in which a record of transation is maintain
          </span>
          <div>
            {show && <MdKeyboardArrowRight className="text-icon" />}
            {btnshow && <button className="btn">Start mining &rarr;</button>}
          </div>
        </div>
        <div
          onClick={() => {
            setClr2(!clr2);
            setClr(false);
            setClr3(true);
          }}
          className={`textimon ${!clr2 === true ? "clrchange" : ""}`}
        >
          <img src={Img2} alt="bit-con" className="testimonial-img" />
          <h2 className="bit-coin">Ethereum</h2>
          <span className="text-detail">
            Digital currency in which a record of transation is maintain
          </span>
          <div>
            {show2 && <MdKeyboardArrowRight className="text-icon" />}
            {btnshow2 && <button className="btn">Start mining &rarr;</button>}
          </div>
        </div>
        <div
          onClick={() => {
            setClr3(!clr3);
            setClr(false);
            setClr2(true);
          }}
          className={`textimon ${!clr3 === true ? "clrchange" : ""}`}
        >
          <img src={Img3} alt="bit-con" className="testimonial-img" />
          <h2 className="bit-coin">Litecoin</h2>
          <span className="text-detail">
            Digital currency in which a record of transation is maintain
          </span>
          <div className="btn-clas">
            {show3 && <MdKeyboardArrowRight className="text-icon" />}
            {btnshow3 && <button className="btn">Start mining &rarr;</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

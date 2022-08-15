import React from "react";
import { feature } from "../../data/Feature";
import "../feature/Feature.css";

const Feature = () => {
  return (
    <div className="feature-section">
      <h1 className="featur-text">
        Market sentiments,portfolio,and run the infrstructure of your choice
      </h1>
      <div>
        {feature.map((el, index) => {
          return (
            <div
              className={`feature-content ${!el.reverse ? "rever-colume" : ""}`}
              key={index}
            >
              <div className="feature-left">
                <span className="feature-title">{el.title}</span>
                <br />
                <span className="feature-detail">{el.detail}</span>
                <div className="feature-btn">
                  <span className="btn">{el.Button}</span>
                </div>
              </div>

              <div>
                <img className="feature-img" src={el.image} alt=" " />
              </div>
            </div>
          );
        })}
      </div>
      <div className="news-feature">
        <div className="news-text">
          <span className="news-title">Starting mining now</span>
          <p>Join now with CRAPPO to get the latest news and mining now</p>
        </div>

        <form>
          <input className="input" type="email" placeholder="Enter you email" />

          <button className="btn">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Feature;

import React from "react";
import { Outlet, Link } from "react-router-dom";
import StylePortfolio from "./Portfolio.module.css";
import classNames from "classnames";
import StyleAbout from "./../About/About.module.css";
import Port1 from "./../assets/images/poert1.png";
import Port2 from "./../assets/images/port2.png";
import Port3 from "./../assets/images/port3.png";
export default function Portfolio() {
  return (
    <div className="container mb-2">
      <div
        className={`portflio-title ${StylePortfolio.textColor}, text-uppercase , text-center`}>
        <h1 className="pt-4">portfolio component</h1>
        <div className="d-flex justify-content-center align-items-center my-3">
          <div
            className={classNames(StyleAbout.line, StylePortfolio.color, "me-3")}
          ></div>
          <i className="fa-solid fa-star"></i>
          <div
            className={classNames(StyleAbout.line, StylePortfolio.color, "ms-3")}
          ></div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 p-3">
          <img className="img-fluid rounded-3" src={Port1} alt="firstImg" />
        </div>

        <div className="col-md-4  p-3">
          <img className="img-fluid rounded-3" src={Port2} alt="SecondImg" />
        </div>
        <div className="col-md-4  p-3">
          <img className="img-fluid rounded-3" src={Port3} alt="ThirdImg" />
        </div>
        <div className="col-md-4 p-3">
          <img className="img-fluid rounded-3" src={Port1} alt="firstImg" />
        </div>

        <div className="col-md-4  p-3">
          <img className="img-fluid rounded-3" src={Port2} alt="SecondImg" />
        </div>
        <div className="col-md-4  p-3">
          <img className="img-fluid rounded-3" src={Port3} alt="ThirdImg" />
        </div>
      </div>
    </div>
  );
}

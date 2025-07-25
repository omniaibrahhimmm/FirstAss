import React from "react";
import classNames from "classnames";
import StyleAbout from "./../About/About.module.css";
import StylePortfolio from "./../Portfolio/Portfolio.module.css";
import StyleContact from "./Contacts.module.css";
import Style from './../Navbar/Navbar.module.css';

export default function Contacts() {
  return (
    <div className="container">
      <div
        className={` ${StylePortfolio.textColor}, text-uppercase , text-center`}
      >
        <h1 className="pt-4">conatct section</h1>
        <div className="d-flex justify-content-center align-items-center my-3">
          <div
            className={classNames(
              StyleAbout.line,
              StylePortfolio.color,
              "me-3"
            )}
          ></div>
          <i className="fa-solid fa-star"></i>
          <div
            className={classNames(
              StyleAbout.line,
              StylePortfolio.color,
              "ms-3"
            )}
          ></div>
        </div>
      </div>

      <div className="forms w-50  m-auto my-5">
        <div className="mb-3 my-3 ">
          <input
            type="text"
            class={`form-control border-0 border-bottom py-3 position-relative  ${StyleContact.inputCustom}`}
            placeholder="userName"
            required
          />
        </div>
           <div className="my-3">
          <input
            type="text"
            class={`form-control border-0 border-bottom py-3 position-relative  ${StyleContact.inputCustom}`}
            placeholder="userAge"
            required
          />
        </div>
         <div className="my-3">
          <input
            type="text"
            class={`form-control border-0 border-bottom py-3 position-relative  ${StyleContact.inputCustom}`}
            placeholder="userEmail"
            required
          />
        </div>
         <div className="my-3">
          <input
            type="text"
            class={`form-control border-0 border-bottom py-3 position-relative  ${StyleContact.inputCustom}`}
            placeholder="userPAssword"
            required
          />
        </div>
        <button className={classNames('btn', Style.active , 'text-center', 'my-3')} > Send message </button>

      </div>
    </div>
  );
}

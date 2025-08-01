import React from "react";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import StylePortfolio from "./Portfolio.module.css";
import StyleAbout from "./../About/About.module.css";
import Port1 from "./../assets/images/poert1.png";
import Port2 from "./../assets/images/port2.png";
import Port3 from "./../assets/images/port3.png";
export default function Portfolio() {
  useEffect(() => {
    document.title = "portfolio";
  }, []);
  return (
    <div className="container mx-auto px-12  mb-2">
      <div className=" mt-3  text-[#2C3E50] text-center">
        <h1 className="pt-4 font-bold uppercase text-4xl">
          portfolio component
        </h1>
        <div className="flex justify-center my-3 items-center">
          <div className=" w-[50px] h-[4px] bg-[#2C3E50] me-3"></div>
          <i className="fa-solid fa-star"></i>
          <div className="w-[50px] h-[4px] bg-[#2C3E50] ms-3"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-7">
        <div className="relative group w-full">
          <img
            className="w-full h-auto rounded-sm"
            src={Port1}
            alt="firstImg"/>

          <div
            className="absolute inset-0 bg-[#18bc9c] bg-opacity-50 flex items-center justify-center 
                  opacity-0 invisible group-hover:opacity-80 group-hover:visible 
                  transition duration-400 rounded-sm"
          >
            <span className="text-5xl text-white">
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
        </div>
        <div className="relative group w-full">
          <img
            className="w-full h-auto rounded-sm"
            src={Port2}
            alt="firstImg"/>

          <div
            className="absolute inset-0 bg-[#18bc9c] bg-opacity-50 flex items-center justify-center 
                  opacity-0 invisible group-hover:opacity-80 group-hover:visible 
                  transition duration-400 rounded-sm"
          >
            <span className="text-5xl text-white">
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
        </div>
         <div className="relative group w-full">
          <img
            className="w-full h-auto rounded-sm"
            src={Port3}
            alt="firstImg"/>

          <div
            className="absolute inset-0 bg-[#18bc9c] bg-opacity-50 flex items-center justify-center 
                  opacity-0 invisible group-hover:opacity-80 group-hover:visible 
                  transition duration-400 rounded-sm"
          >
            <span className="text-5xl text-white">
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
        </div>
            <div className="relative group w-full">
          <img
            className="w-full h-auto rounded-sm"
            src={Port1}
            alt="firstImg"/>

          <div
            className="absolute inset-0 bg-[#18bc9c] bg-opacity-50 flex items-center justify-center 
                  opacity-0 invisible group-hover:opacity-80 group-hover:visible 
                  transition duration-400 rounded-sm"
          >
            <span className="text-5xl text-white">
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
        </div>
        <div className="relative group w-full">
          <img
            className="w-full h-auto rounded-sm"
            src={Port2}
            alt="firstImg"/>

          <div
            className="absolute inset-0 bg-[#18bc9c] bg-opacity-50 flex items-center justify-center 
                  opacity-0 invisible group-hover:opacity-80 group-hover:visible 
                  transition duration-400 rounded-sm"
          >
            <span className="text-5xl text-white">
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
        </div>
         <div className="relative group w-full">
          <img
            className="w-full h-auto rounded-sm"
            src={Port3}
            alt="firstImg"/>

          <div
            className="absolute inset-0 bg-[#18bc9c] bg-opacity-50 flex items-center justify-center 
                  opacity-0 invisible group-hover:opacity-80 group-hover:visible 
                  transition duration-400 rounded-sm">
            <span className="text-5xl text-white">
              <i className="fa-solid fa-plus"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

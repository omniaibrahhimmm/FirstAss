import React from "react";
import { useEffect } from "react";
import StyleAbout from "./About.module.css";
export default function About() {
  useEffect(() => {
    document.title = "About Us"; // ← العنوان الجديد للصفحة
  }, []);

  return (
    <>
      <div className="bg-[#1ABC9C] py-30 text-white">
        <div className="text-center pt-5 ">
          <h2 className="font-bold text-4xl uppercase">About Component</h2>

          <div className="flex justify-center my-3 items-center">
            <div className=" w-[50px] h-[4px] bg-white me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="w-[50px] h-[4px] bg-white ms-3"></div>
          </div>
        </div>

        <div className="container home-paragraphs text-center pb-5  mt-7">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" px-20 ">
              <p className="text-justify">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className=" px-20">
              <p className="text-justify">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

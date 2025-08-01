import React from 'react'
import Style from "./ContactInfo.module.css";

export default function ContactInfo() {
  return (
  <>
  <div className="bg-[#2C3E50]  text-white">
  <div className="container px-4 max-w-6xl mx-auto py-30 text-center">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div>
        <h2 className="text-3xl font-semibold mb-2">LOCATION</h2>
        <p className='mb-3'>2215 John Daniel Drive</p>
        <span>Clark, MO 65243</span>
      </div>

      <div>
        <h2 className="text-3xl uppercase font-semibold mb-4">AROUND THE WEB</h2>
        <div className="flex justify-center gap-3">
          <a href="https://www.facebook.com" className="border border-white rounded-full w-10 h-10  flex items-center justify-center p-3 hover:bg-white hover:text-[#2C3E50] transition">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" className="border border-white  w-10 h-10  flex items-center justify-center  rounded-full p-3 hover:bg-white hover:text-[#2C3E50] transition">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com" className="border border-white  w-10 h-10  flex items-center justify-center  rounded-full p-3 hover:bg-white hover:text-[#2C3E50] transition">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.web.com" className="border border-white  w-10 h-10  flex items-center justify-center  rounded-full p-3 hover:bg-white hover:text-[#2C3E50] transition">
            <i className="fa-solid fa-earth-americas"></i>
          </a>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-2">ABOUT FREELANCER</h2>
        <p>
          Freelance is a free to use, licensed Bootstrap theme created by Route
        </p>
      </div>

    </div>
  </div>
</div>

  </>
);}


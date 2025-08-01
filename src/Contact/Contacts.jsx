import React, { useEffect } from "react";

export default function Contacts() {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="uppercase text-center text-[#2C3E50] mb-20">
          <h1 className="pt-7 font-bold text-4xl">Contact Section</h1>
          <div className="flex justify-center my-3 items-center">
            <div className="w-[70px] h-[4px] bg-[#2C3E50] me-3"></div>
            <i className="fa-solid fa-star"></i>
            <div className="w-[70px] h-[4px] bg-[#2C3E50] ms-3"></div>
          </div>
        </div>

        <div className="w-[50%] mx-auto my-5">
          <div className="my-5">
            <input
              type="text"
              placeholder="User Name"
              required
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#18bc9c] transition-all"
            />
          </div>

          <div className="mb-5">
            <input
              type="text"
              placeholder="User Age"
              required
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#18bc9c] transition-all"
            />
          </div>

          <div className="mb-5">
            <input
              type="email"
              placeholder="User Email"
              required
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#18bc9c] transition-all"
            />
          </div>

          <div className="mb-5">
            <input
              type="password"
              placeholder="User Password"
              required
              className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-[#18bc9c] transition-all"
            />
          </div>

          <button type="button" className="bg-[#18bc9c] text-white px-5 py-2 rounded transition-all block cursor-pointer  active:scale-95 ">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
}

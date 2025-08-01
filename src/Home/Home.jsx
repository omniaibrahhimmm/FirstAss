import React from 'react';
import { useEffect } from 'react';
import Style from './Home.module.css';
import avatar from './../assets/images/avataaars.svg';

export default function Home() {
   useEffect(() => {
    document.title = "Home | My Website";
  }, []);
  return (
    <>
      <div className="bg-[#1abc9c]">
        <div className="container text-center p-7 text-white">
           <img src={avatar} className='w-60 mx-auto' alt="avatar" />
                        <h1 className='uppercase font-bold pt-7 text-4xl'>start Framework</h1>       
            <div className="flex justify-center my-3 items-center">
                     <div className= ' w-[50px] h-[4px] bg-white me-3'></div>
                     <i className="fa-solid fa-star"></i>
                     <div className= 'w-[50px] h-[4px] bg-white ms-3'></div>
                   </div>

           <p className='m-0 pb-2'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}

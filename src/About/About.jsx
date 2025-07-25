
import React from 'react'
import { useEffect } from 'react';
import classNames from 'classnames'
import StyleAbout from './About.module.css';
export default function About() {

    useEffect(() => {
    document.title = 'About Us'; // ← العنوان الجديد للصفحة
  }, []);

  return (
 <>

    <div className={` ${StyleAbout.bgColor} py-5 text-white`}>

 <div className="text-center pt-5">
        <h2 className="text-uppercase fw-bold pt-5">About Component</h2>

        <div className="d-flex justify-content-center align-items-center my-4">
          <div className={classNames(StyleAbout.line, 'bg-white', 'me-3')}></div>
          <i className="fa-solid fa-star"></i>
          <div className={classNames(StyleAbout.line, 'bg-white', 'ms-3')}></div>
        </div>
 </div>


    
      <div className="container home-paragraphs text-center pb-5">
        <div className="row">
          <div className="col-md-6 px-5 ">
            <p style={{ textAlign: 'justify' }}>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-6">
            <p style={{ textAlign: 'justify' }}>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </div>
 </>
  )
}


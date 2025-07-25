import React from 'react';
import classNames from 'classnames';
import Style from './Home.module.css';
import avatar from './../assets/images/avataaars.svg';

export default function Home() {
  return (
    <>
      <div className={classNames(Style.bgColor)}>
        <div className="container text-center p4-5 text-white">
           <img src={avatar} className='w-25 px-4' alt="avatar" />
                        <h1 className='text-uppercase fw-bold pt-5'>start Framework</h1>       
            <div className="d-flex justify-content-center align-items-center my-3">
                     <div className={classNames(Style.line, 'bg-white', 'me-3')}></div>
                     <i className="fa-solid fa-star"></i>
                     <div className={classNames(Style.line, 'bg-white', 'ms-3')}></div>
                   </div>

           <p className='m-0 pb-2'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}

import React from 'react'
import  Styles  from "./Loader.module.css";

export default function Loader() {
  return (
    <div className='position-fixed top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-content-center align-items-center '>
        <span className={Styles.loader}></span>

    </div>
  )
}

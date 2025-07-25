import classNames from 'classnames'
import React from 'react'
import Style from './Footer.module.css'
export default function Footer() {
  return (
    <div className={
      classNames(Style.bgFooter, 'py-4')} >
      <span className='text-white text-center d-block'>Copyright © Your Website 2021</span>
      </div>
  )
}

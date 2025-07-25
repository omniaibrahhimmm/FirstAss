import classNames from 'classnames'
import React from 'react'
import Style from "./ContactInfo.module.css";

export default function ContactInfo() {
  return (
  <>
    <div className={classNames(Style.bgColor , 'p-5' )}>
      <div className="container text-white  p-5 text-center">
        <div className="row">
          <div className="col-md-4">
            <div className="contactInfo ">
                <h2>LOCATION</h2>
                <p>2215 John Daniel Drive</p>
                <span>Clark, MO 65243</span>
            </div>
          </div>
             <div className="col-md-4">
              <h2>AROUND THE WEB</h2>
   <div className="socialMediaLink d-flex justify-content-center gap-3">
<a href="www.facebook.com" className='btn btn-outline-light rounded-circle'><i class="fa-brands fa-facebook"></i>
</a>  
<a href="www.twiiter.com" className='btn btn-outline-light rounded-circle'><i class="fa-brands fa-twitter"></i>
</a>  
<a href="www.linkedin.com" className='btn btn-outline-light rounded-circle'><i class="fa-brands fa-linkedin"></i>
</a>  
<a href="www.web.com" className='btn btn-outline-light rounded-circle'><i class="fa-solid fa-earth-americas"></i>
</a>  

 </div>
             </div>
 <div className="col-md-4">
            <div className="Freelancer ">
                <h2>ABOUT FREELANCER</h2>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route
</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>
);}


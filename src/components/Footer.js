import React from 'react'
import './style/Footer.css';
import image_footer from './images/footerimg.png';

const Footer = (props) => {
  return(
    <div className="container-fluid">
        <div className="row background">
            <div className="col-lg-6 col-5 mx-auto">
                <div className="my-5 mx-lg-0">
                    <h2 style={{color:"#ffffff"}}>Follow <span style={{color:"#20C20E"}}> Us</span></h2>
                    
                </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
                <div className="my-5 text-end m" >
                    <img className="img-responsive" src={image_footer} alt="footer"></img>
                </div>
            </div>
            <div className="col-lg-1"></div>
        </div>
    </div>
   )

 }

export default Footer
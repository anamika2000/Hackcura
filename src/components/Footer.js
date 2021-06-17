import React from 'react'
import './style/Footer.css';
import image_footer from './images/footerimg.png';

const Footer = (props) => {
  return(
    <div className="container-fluid background">
        <div className="row ">
            <div className="col-lg-6 col-5 mx-auto">
                <div className="my-5 mx-lg-0">
                    <h2 style={{color:"#ffffff"}}>Follow <span style={{color:"#20C20E"}}> Us</span></h2>
                    <p style={{color:'white'}}>Hackcura Private limited<br/>New Delhi, 110005</p>
                </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
                <div className="my-5 text-end m" >
                    <img className="img-responsive" src={image_footer} alt="footer"></img>
                </div>
            </div>
            <div className="col-lg-1"></div>
        </div>
        <div className ='row justify-content-center'>
            <p className ="copyr">© Copyright 2021, Hackcura Pvt ltd.</p>
        </div>
    </div>
   )

 }

export default Footer
import React from 'react'
import './style/Footer.css';

import { NavLink } from 'react-router-dom';
import image_footer from './images/footerimg.png';
import { FaInstagram,FaRegEnvelope,FaRegCopyright } from "react-icons/fa";
import { AiOutlineLinkedin,AiOutlineFacebook } from "react-icons/ai";
const Footer = () => {
  return(
    <div className="container-fluid background">
        <div className="row ">
            <div className="col-lg-6 col-12 mx-auto text-lg-start text-center">
                <div className="my-5 mx-lg-0">
                    <h2 style={{color:"#ffffff"}}>Follow <span style={{color:"#20C20E"}}> Us</span></h2>
                    <p style={{color:'white'}}>Hackcura Private limited<br/>New Delhi, 110005 </p>
                    <h4 >
                        <NavLink className="ms-0 icons" to="#"><AiOutlineFacebook/></NavLink>
                        <NavLink className="ms-3 icons" to="#"><AiOutlineLinkedin/></NavLink>
                        <NavLink className="ms-3 icons" to="#"><FaRegEnvelope/></NavLink>
                        <NavLink className="ms-3 icons" to="#"><FaInstagram/></NavLink>
                    </h4>

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
            <p className ="copyr"><FaRegCopyright/> Copyright 2021, Hackcura Pvt ltd.</p>
        </div>
    </div>
   )

 }

export default Footer
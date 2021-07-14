import React from 'react';
import './style/Career.css';
import { BiSearchAlt } from "react-icons/bi";
import { VscSymbolKeyword } from "react-icons/vsc";
import { GoLocation } from "react-icons/go";



const Career = () => {
  return(
    <section className="container" style={{marginTop:"100px"}}>
        <div className="row">
            <div className="col-lg-5">
                <h1>WE'RE <span style={{color:"#20C20E"}}>HIRING</span></h1>
            </div>
        </div>
        <div className="row my-4">
            <form className="d-lg-flex text-center">
                <div class="input-group">
                    <span class="input-group-text">Keyword<VscSymbolKeyword className="ms-1" style={{color:"#20C20E"}}/></span>
                    <input type="text" aria-label="First name" class="form-control text-center" placeholder="Intern, Content writer etc"/>
                </div>
                <div class="input-group ms-lg-5 mt-lg-0 mt-3">
                    <span class="input-group-text">Location <GoLocation className="ms-1" style={{color:"#20C20E"}}/></span>
                    <input type="text" aria-label="First name" class="form-control text-center" placeholder="Remote, New Delhi, Noida etc"/>
                </div> 
                <button class="btn btn-success ms-lg-2 mt-2 mt-lg-0 ps-4 pe-4"><BiSearchAlt/></button>
            </form>
        </div>
        
    </section>
   )

 }

export default Career;
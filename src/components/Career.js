import React from 'react';
import './style/Career.css';
import { BiSearchAlt } from "react-icons/bi";
import { VscSymbolKeyword } from "react-icons/vsc";
import { GoLocation } from "react-icons/go";
import { NavLink } from 'react-router-dom';


// sample data for jobs:



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
                <div className="input-group">
                    <span className="input-group-text">Keyword<VscSymbolKeyword className="ms-1" style={{color:"#20C20E"}}/></span>
                    <input type="text" aria-label="First name" className="form-control text-center" placeholder="Intern, Content writer etc"/>
                </div>
                <div className="input-group ms-lg-5 mt-lg-0 mt-3">
                    <span className="input-group-text">Location <GoLocation className="ms-1" style={{color:"#20C20E"}}/></span>
                    <input type="text" aria-label="First name" className="form-control text-center" placeholder="Remote, New Delhi, Noida etc"/>
                </div> 
                <button className="btn btn-success ms-lg-2 mt-2 mt-lg-0 ps-4 pe-4"><BiSearchAlt/></button>
            </form>
        </div>
        <div className="row">
            <div className="col-lg-3 col-10 mx-auto my-lg-4 my-3">
                <div className="card text-center">
                    <div className="card-header">
                        Internship
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">ReactJs Developer</h5>
                        <div className="card-text my-4">
                            <p>5+ years of experience</p>
                            <p>Smart working</p>
                            <p>comfortable with 10 to 7 job</p>  
                        </div>
                        <NavLink to="/contactus" className="btn btn-success">Go somewhere</NavLink>
                    </div>
                    <div className="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
                
            </div>
            <div className="col-lg-3 col-10 mx-auto my-lg-4 my-3">
                <div className="card text-center">
                    <div className="card-header">
                        FTE
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">CyberSecurity Expert</h5>
                        <div className="card-text my-4">
                            <p>5+ years of experience</p>
                            <p>Smart working</p>
                            <p>comfortable with 10 to 7 job</p>  
                        </div>
                        <NavLink to="/contactus" className="btn btn-success">Go somewhere</NavLink>
                    </div>
                    <div className="card-footer text-muted">
                        11 days ago
                    </div>
                </div>
                
            </div>
            <div className="col-lg-3 col-10 mx-auto my-lg-4 my-3">
                <div className="card text-center">
                    <div className="card-header">
                        Internship
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Data Science</h5>
                        <div className="card-text my-4">
                            <p>5+ years of experience</p>
                            <p>Smart working</p>
                            <p>comfortable with 10 to 7 job</p>  
                        </div>
                        <NavLink to="/contactus" className="btn btn-success">Go somewhere</NavLink>
                    </div>
                    <div className="card-footer text-muted">
                        16 days ago
                    </div>
                </div>
                
            </div>
            <div className="col-lg-3 col-10 mx-auto my-lg-4 my-3">
                <div className="card text-center">
                    <div className="card-header">
                        FTE
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Backend Developer</h5>
                        <div className="card-text my-4">
                            <p>5+ years of experience</p>
                            <p>Smart working</p>
                            <p>comfortable with 10 to 7 job</p>  
                        </div>
                        <NavLink to="/contactus" className="btn btn-success">Go somewhere</NavLink>
                    </div>
                    <div className="card-footer text-muted">
                        19 days ago
                    </div>
                </div>
                
            </div>
        </div>
    
        
    </section>
   )

 }

export default Career;
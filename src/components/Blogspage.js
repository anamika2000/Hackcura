import React from 'react';
import './style/Blogspage.css';

import userimage from './images/user.jpg';

// A static JSON for information required for this component
const blogData = [{name:"UDIT BHADAURIA", jtitle:"Founder, Hackcura", DOBlog:"20 Jan, 2020",Btitle:"How all this started ?",sample_content:"What will it take to develop a hybrid learning model for Education, and what can we learn from India's Whisper moment back in the 1990's. Patterns are same. And now, all eyes on Educators.",link:"#"},
                  {name:"ABHISHEK CHAUHAN", jtitle:"Frontend Developer, Hackcura", DOBlog:"15 Aug, 2020",Btitle:"Where should we get started ?",sample_content:"What will it take to develop a hybrid learning model for Education, and what can we learn from India's Whisper moment back in the 1990's. Patterns are same. And now, all eyes on Educators.",link:"#"},
                  {name:"RAHUL RAO", jtitle:"Engineer, Hackcura", DOBlog:"09 Jan, 2021",Btitle:"How all this started ?",sample_content:"What will it take to develop a hybrid learning model for Education, and what can we learn from India's Whisper moment back in the 1990's. Patterns are same. And now, all eyes on Educators.",link:"#"}, ]

const Blogspage = (props) => {
  return(
    <div className="container">
      <div className="row my-lg-5 my-3 mt-5 ">
          <h2 className="text-center mt-5 main_heading"><span>The latest at </span><span style={{color:"#20C20E"}}>Hackcura</span></h2>
      </div>
      <div className = "row">
        <div className="col-lg-12 col-12">
        { blogData.map((value,index)=>{
          return(
            <div className="blog-container text-lg-start text-center my-5" key={index}>
            <div className="row">
              <div className="col-lg-3 d-lg-block d-none">
                <img className="img-fluid ms-5 mt-4" style = {{height:'250px'}} src={userimage} alt="user"/>
              </div>
              <div className="col-lg-9 col-12">
                <h3 className="mt-3">{value.name}</h3>
                <h5 style = {{color:"#20C20E"}}>{value.jtitle}</h5>
                <p className="text-lg-end text-center me-lg-5 me-0" style={{fontWeight:"600"}}>{value.DOBlog}</p>
                <h3>{value.Btitle}</h3>
                <p>{value.sample_content}</p>
                <button className ="btn btn-success mb-4" to={value.link}>Continue Reading</button>
              </div>
            </div>
          </div>
          )
        })}
          
        </div>
      </div>
    </div>
   )

 }

export default Blogspage
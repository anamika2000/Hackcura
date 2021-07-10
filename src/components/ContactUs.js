import React from 'react';
import "./style/contactus.css";
import GoogleMap from './GoogleMap.js';


const ContactUs = () => {
  return(
    <section className="container" style={{marginTop:"100px"}}>
      <div className="row">
        {/* FORM SECTION */}
        <div className="col-lg-6 col-12">
          <h1>CONTACT <span style={{color:"#20C20E"}}>US</span></h1>
          <form>
            <div className="form-floating mt-lg-5 mt-5">
              <input type="text" className="form-control input_boxes" id="floatingInput" placeholder="Name"/>
              <label htmlFor="floatingInput">Name*</label>
            </div>
            <div className="form-floating mt-lg-4 mt-3">
              <input type="email" className="form-control input_boxes" id="floatingInput" placeholder="name@example.com"/>
              <label htmlFor="floatingInput">Email address*</label>
            </div>
            <div className="form-floating mt-lg-4 mt-3">
              <input type="text" className="form-control input_boxes" id="floatingInput" placeholder="9140716702"/>
              <label htmlFor="floatingInput">Phone no. (with country code)</label>
            </div>
            <div className="form-floating mt-lg-4 mt-3">
              <textarea type="text" className="form-control input_boxes" id="floatingTextarea2" placeholder="text" style={{minHeight:"200px"}}/>
              <label htmlFor="floatingTextarea2">Query or Reason*</label>
            </div>
            <div className="text-lg-start text-center">
            <button className="btn btn-success my-lg-5 my-4">SUBMIT</button>
            </div>
          </form>
        </div>
        <div className="col-lg-2"></div>
        {/* ADDRESS SECTION */}
        <div className="col-lg-4 mt-5">
          <div className="Address_container text-center" style={{backgroundColor:"rgba(0,0,0,0.8)", height:"auto",borderRadius:"20px",color:"white"}}>
            <h3 className="pt-2 px-5">ADDRESS</h3>
            <p className="pt-2 px-5">B-803 Happiness Tower, Sikka karmic greens, Sector 78, NOIDA, 201305<br/>Ph : +91 120-496-5608</p>
            <h4>OR</h4>
            <p>Mail to : founder@hackcura.in</p>
            <p className="pb-2">Mail to : support@hackcura.in</p>
          </div>
          {/* MAP COMPONENT */}
            {/* <GoogleMap/> */}

        </div>
      </div>
      <div className="row my-4">
        <div className="col-lg-12 col-10 bg-danger text-white mx-auto" style={{borderRadius:"20px"}}>
          <h3 className="text-center py-4">HACKCURA VULNERABILITY DISCLOSURE PROGRAM</h3>
          <p className="text-center">If you come accross any security vulnerabilities (Critical, High, Medium or Low) in any of the asset of Hackcura, Please feel free to report it on<br/><span style={{fontWeight:'600'}}>Mail to : support@hackcura.in</span><br/>And claim Hackcura swag of Tshirt or sticker on every unique vulnerability reported.</p>
        </div>
      </div>
    </section>
   )

 }

export default ContactUs;
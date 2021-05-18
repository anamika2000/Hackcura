import React from 'react'
import { NavLink } from 'react-router-dom';
import './style/Navbar.css';


const Navbar = () => {
  return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" to="/">HACKCURA</NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="navbar-nav">
                            <NavLink exact activeClassName ="menu_active"  className="nav-link mx-1" to='/'>Home</NavLink>
                            <NavLink exact activeClassName ="menu_active"  className="nav-link mx-1" to ='/blogs'>Blogs</NavLink>
                            <NavLink exact activeClassName ="menu_active"  className="nav-link mx-1" to ='/about'>About Us</NavLink>
                    </div>
                    </div>
                </div>
                </nav>
        </>
   )

 }

export default Navbar
import React from 'react';
import { useLocation } from 'react-router-dom';

function NavBar()
{
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                <a href="index.html" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><i className="fas fa-star-of-life me-3"></i>Gulmohar</h1>
                    {/* <img src="img/logo.png" alt="Logo"> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                    <a href="/" className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`}>
                        Home
                    </a>
                    <a href="/about" className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`}>
                        About
                    </a>
                    <a href="/services" className={`nav-item nav-link ${isActive('/services') ? 'active' : ''}`}>
                        Services
                    </a>
                    <a href="/contact" className={`nav-item nav-link ${isActive('/contact') ? 'active' : ''}`}>
                        Contact Us
                    </a>
                    </div>
                    <a
                    href="/appointment"
                    className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0"
                    >
                    Book Appointment
                    </a>
                </div>
            </nav>
    )
}

export default NavBar
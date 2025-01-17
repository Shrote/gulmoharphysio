import { Link, useLocation } from 'react-router-dom';

function NavBar()
{
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                <Link to="/" className="navbar-brand">
                    <img src="/img/logo.png" height={80} alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                    <Link to="/" className={`nav-item nav-link ${isActive('/') ? 'active' : ''}`}>
                        Home
                    </Link>
                    <Link to="/about" className={`nav-item nav-link ${isActive('/about') ? 'active' : ''}`}>
                        About
                    </Link>
                    <Link to="/services" className={`nav-item nav-link ${isActive('/services') ? 'active' : ''}`}>
                        Services
                    </Link>
                    <Link to="/contact" className={`nav-item nav-link ${isActive('/contact') ? 'active' : ''}`}>
                        Contact Us
                    </Link>
                    </div>
                    <Link
                    to="/appointment"
                    className="btn btn-primary rounded-pill text-white py-2 px-4 flex-wrap flex-sm-shrink-0"
                    >
                    Book Appointment
                    </Link>
                </div>
            </nav>
    )
}

export default NavBar
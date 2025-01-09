function About()
{
 return(
    <div className="container-fluid about bg-light py-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
                    <div className="about-img pb-5 ps-5">
                        <img src="img/about-1.jpg" className="img-fluid rounded w-100" style={{objectFit: "cover"}} alt="Image" />
                        <div className="about-img-inner">
                            <img src="img/about-2.jpg" className="img-fluid rounded-circle w-100 h-100" alt="Image" />
                        </div>
                        <div className="about-experience">15 years experience</div>
                    </div>
                </div>
                <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
                    <div className="section-title text-start mb-5">
                        <h1 className="display-3 mb-0">Dr. Rajeev Ranjan</h1>
                        <h4 className="sub-title pe-3 mb-3">President, jscpt</h4>
                        
                        <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                        <div className="mb-4">
                            <p className="text-secondary"><i className="fa fa-check text-primary me-2"></i> Refresing to get such a personal touch.</p>
                            <p className="text-secondary"><i className="fa fa-check text-primary me-2"></i> Duis aute irure dolor in reprehenderit in voluptate.</p>
                            <p className="text-secondary"><i className="fa fa-check text-primary me-2"></i> Velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 )
}

export default About
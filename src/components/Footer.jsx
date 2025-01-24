function Footer()
{
    return(
        <>
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Gulmoharphysio</h4>
                            <p>
                                Health Care with Humanity
                            </p>
                            <div className="d-flex align-items-center">
                                <i className="fas fa-share fa-2x text-white me-2"></i>
                                <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                <a className="btn-square btn btn-primary text-white rounded-circle mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-4 text-white">Quick Links</h4>
                            <a href="/about"><i className="fas fa-angle-right me-2"></i> About Us</a>
                            <a href="/contact"><i className="fas fa-angle-right me-2"></i> Contact Us</a>
                            <a href="/privacy"><i className="fas fa-angle-right me-2"></i> Privacy Policy</a>
                            <a href="/blogs"><i className="fas fa-angle-right me-2"></i> Our Blog & News</a>
                            <a href="/gallery"><i className="fas fa-angle-right me-2"></i> Our Gallery</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-4 text-white">Our Services</h4>
                            <a href="/services"><i className="fas fa-angle-right me-2"></i> All Services</a>
                            <a><i className="fas fa-angle-right me-2"></i> Physiotherapy</a>
                            <a><i className="fas fa-angle-right me-2"></i> Neurological</a>
                            <a><i className="fas fa-angle-right me-2"></i> Pediatrics</a>
                            <a><i className="fas fa-angle-right me-2"></i> Knee pain</a>
                            <a><i className="fas fa-angle-right me-2"></i> Post fracture</a>
                            <a><i className="fas fa-angle-right me-2"></i> Back pain</a>
                            <a><i className="fas fa-angle-right me-2"></i> Neck Pain</a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="mb-4 text-white">Contact Info</h4>
                            <a href="https://maps.app.goo.gl/aKTaoP8qpXaasJg96"><i className="fa fa-map-marker-alt me-2"></i> Road, Dumar Dagga, Krishna Pura, Ohdar Village, Buti, Jharkhand 835217</a>
                            <a href="mailto:gulmoharphysio@gmail.com"><i className="fas fa-envelope me-2"></i> gulmoharphysio@gmail.com</a>
                            {/* <a href=""><i className="fas fa-envelope me-2"></i> info@example.com</a> */}
                            <a href="tel:9835131321"><i className="fas fa-phone me-2"></i> +91 98351 31321</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid copyright py-4">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-md-0">
                        <span className="text-white"><a href="/"><i className="fas fa-copyright text-light me-2"></i>GulmoharPhysio</a>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end text-white">
                       Designed By <a className="border-bottom" href="https://www.shrote.com">Shrote</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
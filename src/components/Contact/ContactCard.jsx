function ContactCard()
{
    return(
        <div className="container-fluid contact py-5">
            <div className="container py-5">
                <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="sub-style mb-4">
                        <h4 className="sub-title text-white px-3 mb-0">Contact Us</h4>
                    </div>
                </div>
                <div className="row g-4 align-items-center">
                    <div className="col-lg-5 col-xl-5 contact-form wow fadeInLeft" data-wow-delay="0.1s">
                        <h2 className="display-5 text-white mb-2">Get in Touch</h2>
                        <p className="mb-4 text-white">We would love to hear from you! Please fill in the required details and our team will get in touch with you.</p>
                        <form>
                            <div className="row g-3">
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control bg-transparent border border-white" id="name" placeholder="Your Name" />
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control bg-transparent border border-white" id="email" placeholder="Your Email" />
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="phone" className="form-control bg-transparent border border-white" id="phone" placeholder="Phone" />
                                        <label for="phone">Your Phone</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control bg-transparent border border-white" id="project" placeholder="Project" />
                                        <label for="project">Your Project</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" className="form-control bg-transparent border border-white" id="subject" placeholder="Subject" />
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control bg-transparent border border-white" placeholder="Leave a message here" id="message" style={{height: "160px"}}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-light text-primary w-100 py-3">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-2 col-xl-2 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="bg-transparent rounded">
                            <div className="d-flex flex-column align-items-center text-center mb-4">
                                <div className="bg-white d-flex align-items-center justify-content-center mb-3" style={{width: "90px", height: "90px", borderRadius: "50px"}}><i className="fa fa-map-marker-alt fa-2x text-primary"></i></div>
                                <h4 className="text-dark">Addresses</h4>
                                <p className="mb-0 text-white">Road, Dumar Dagga, Krishna Pura, Ohdar Village, Buti, Jharkhand 835217</p>
                            </div>
                            <div className="d-flex flex-column align-items-center text-center mb-4">
                                <div className="bg-white d-flex align-items-center justify-content-center mb-3" style={{width: "90px", height: "90px", borderRadius: "50px"}}><i className="fa fa-phone-alt fa-2x text-primary"></i></div>
                                <h4 className="text-dark">Mobile</h4>
                                <p className="mb-0 text-white"><a class="text-white" href="tel:9835131321">+91 98351 31321</a></p>
                            </div>
                           
                            <div className="d-flex flex-column align-items-center text-center">
                                <div className="bg-white d-flex align-items-center justify-content-center mb-3" style={{width: "90px", height: "90px", borderRadius: "50px"}}><i className="fa fa-envelope-open fa-2x text-primary"></i></div>
                                <h4 className="text-dark">Email</h4>
                                <p className="mb-0"><a href="mailto:gulmoharphysio@gmail.com" class="text-white">gulmoharphysio@gmail.com</a></p>
                                {/* <p className="mb-0 text-white">info@example.com</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xl-5 wow fadeInRight" data-wow-delay="0.3s">
                        <div className="d-flex justify-content-center mb-4">
                            <a className="btn btn-lg-square btn-light rounded-circle mx-2" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-lg-square btn-light rounded-circle mx-2" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-lg-square btn-light rounded-circle mx-2" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-lg-square btn-light rounded-circle mx-2" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <div className="rounded h-100">
                            <iframe className="rounded w-100" 
                            style={{height: "500px"}} src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Gulmohar Hospital in ranchi&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard


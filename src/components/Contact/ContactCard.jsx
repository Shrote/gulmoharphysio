import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactCard() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        project: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        const payload = {
            access_key: "5af88a7d-55cb-4eb6-9665-8e38867fd3d6", // Replace with your Web3Forms Access Key
            ...formData,
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                toast.success("Thanks for Contacting. We will reach you soon!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    project: "",
                    subject: "",
                    message: "",
                });
            } else {
                throw new Error("Failed to submit the form");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Unable to submit the form. Please try again.");
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="container-fluid contact py-5">
            <div className="container py-5">
                <div className="section-title mb-5">
                    <div className="sub-style mb-4">
                        <h4 className="sub-title text-white px-3 mb-0">Contact Us</h4>
                    </div>
                </div>
                <div className="row g-4 align-items-center">
                    <div className="col-lg-5 col-xl-5 contact-form">
                        <h2 className="display-5 text-white mb-2">Get in Touch</h2>
                        <p className="mb-4 text-white">
                            We would love to hear from you! Please fill in the required details and our team will get in touch with you.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control bg-transparent border border-white"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Name"
                                            required
                                        />
                                        <label htmlFor="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input
                                            type="email"
                                            className="form-control bg-transparent border border-white"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your Email"
                                            required
                                        />
                                        <label htmlFor="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control bg-transparent border border-white"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Your Phone"
                                            required
                                        />
                                        <label htmlFor="phone">Your Phone</label>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control bg-transparent border border-white"
                                            id="project"
                                            value={formData.project}
                                            onChange={handleChange}
                                            placeholder="Your Project"
                                            required
                                        />
                                        <label htmlFor="project">Your Project</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control bg-transparent border border-white"
                                            id="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Subject"
                                            required
                                        />
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea
                                            className="form-control bg-transparent border border-white"
                                            placeholder="Leave a message here"
                                            id="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            style={{ height: "160px" }}
                                            required
                                        ></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button
                                        type="submit"
                                        className="btn btn-light text-primary w-100 py-3"
                                        disabled={loading} // Disable when loading
                                    >
                                        {loading ? "Sending..." : "Send Message"}
                                    </button>
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
            <ToastContainer />
        </div>
    );
}

export default ContactCard;

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            access_key: "2645e937-b323-4193-b321-5314325a7916", // Replace with your Web3Forms Access Key
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
                toast.error("Something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Unable to submit the form. Please try again.");
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
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Rest of your layout */}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ContactCard;

import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Appointment() {
    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        phone: "",
        gender: "",
        date: "",
        department: "",
        comments: "",
    });

    const [loading, setLoading] = useState(false); // State to track loading

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Disable button when form starts submitting
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    access_key: "2645e937-b323-4193-b321-5314325a7916",
                    ...formData,
                }),
            });

            if (response.ok) {
                toast.success("Your appointment request has been submitted successfully!");
                setFormData({
                    firstName: "",
                    email: "",
                    phone: "",
                    gender: "",
                    date: "",
                    department: "",
                    comments: "",
                });
            } else {
                throw new Error("Failed to submit the form");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Something went wrong, please try again!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="container-fluid appointment py-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2">
                            <div className="section-title text-start">
                                <h4 className="sub-title pe-3 mb-0">Solutions To Your Pain</h4>
                                <h1 className="display-4 mb-4">
                                    Best Quality Services With Minimal Pain Rate
                                </h1>
                                <p className="mb-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quaerat deleniti amet at atque sequi quibusdam cumque itaque
                                    repudiandae temporibus, eius nam mollitia voluptas maxime
                                    veniam necessitatibus saepe in ab? Repellat!
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
                            <div className="appointment-form rounded p-5">
                                <p className="fs-4 text-uppercase text-primary">Get In Touch</p>
                                <h1 className="display-5 mb-4">Get Appointment</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="row gy-3 gx-4">
                                        <div className="col-xl-6">
                                            <input
                                                type="text"
                                                className="form-control py-3 border-primary bg-transparent text-white"
                                                id="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                placeholder="First Name"
                                                required
                                            />
                                        </div>
                                        <div className="col-xl-6">
                                            <input
                                                type="email"
                                                className="form-control py-3 border-primary bg-transparent text-white"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="Email"
                                                required
                                            />
                                        </div>
                                        <div className="col-xl-6">
                                            <input
                                                type="tel"
                                                className="form-control py-3 border-primary bg-transparent"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone"
                                                required
                                            />
                                        </div>
                                        <div className="col-xl-6">
                                            <select
                                                className="form-select py-3 border-primary bg-transparent"
                                                id="gender"
                                                value={formData.gender}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Your Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className="col-xl-6">
                                            <input
                                                type="date"
                                                className="form-control py-3 border-primary bg-transparent"
                                                id="date"
                                                value={formData.date}
                                                onChange={handleChange}
                                                required
                                                min={new Date().toISOString().split("T")[0]}
                                            />
                                        </div>
                                        <div className="col-xl-6">
                                            <select
                                                className="form-select py-3 border-primary bg-transparent"
                                                id="department"
                                                value={formData.department}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Department</option>
                                                <option value="Physiotherapy">Physiotherapy</option>
                                                <option value="Physical Health">Physical Health</option>
                                                <option value="Treatments">Treatments</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <textarea
                                                className="form-control border-primary bg-transparent text-white"
                                                id="comments"
                                                value={formData.comments}
                                                onChange={handleChange}
                                                cols="30"
                                                rows="5"
                                                placeholder="Write Comments"
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button
                                                type="submit"
                                                className="btn btn-primary text-white w-100 py-3 px-5"
                                                disabled={loading} // Disable button when loading
                                            >
                                                {loading ? "Submitting..." : "SUBMIT NOW"}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default Appointment;

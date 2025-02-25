// import ReviewCarousel from "./ReviewCarousel";
// import "../../../public/css/style.css";

import ReviewSlider from "./ReviewSlider";

function About() {
  return (
    <div className="container-fluid about bg-light py-5">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.2s">
            <div className="about-img pb-5 ps-5">
              <img
                src="img/about-1.jpg"
                className="img-fluid rounded w-100"
                style={{ objectFit: "cover" }}
                alt="Image"
              />
              <div className="about-img-inner">
                <img
                  src="img/about-2.jpg"
                  className="img-fluid rounded-circle w-100 h-100"
                  alt="Image"
                />
              </div>
              <div className="about-experience">15 years experience</div>
            </div>
          </div>
          <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.4s">
            <div className="section-title text-start mb-5">
              <h1 className="display-3 mb-0">Dr. Rajeev Ranjan</h1>
              <h4 className="sub-title pe-3 mb-3">President, jscpt</h4>

              <p className="mb-4">
                Over the years, I’ve been dedicated to helping people recover,
                regain their strength, and live healthier lives. At Gulmohar,
                our team focuses on treating sports injuries, post-surgery
                recovery, and other conditions with genuine care and attention.
                We’ve been fortunate to support thousands of patients on their
                healing journeys and extend a helping hand to the community
                through free health camps. Every success story motivates me,
                whether it’s seeing someone walk again or watching our team grow
                stronger together.
              </p>
              <div className="mb-4">
                <p className="text-primary">
                  <i className="fa fa-check text-primary me-2"></i> Personalized
                  Care
                </p>
                <p className="text-primary">
                  <i className="fa fa-check text-primary me-2"></i> Experienced
                  team specializing in a wide range of physiotherapy services.
                </p>
                <p className="text-primary">
                  <i className="fa fa-check text-primary me-2"></i> Bringing
                  physiotherapy services to everyone through free health camps.
                </p>
              </div>
              <div className="d-flex align-items-center">
                <a
                  className="btn-square btn btn-primary text-white rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn-square btn btn-primary text-white rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn-square btn btn-primary text-white rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn-square btn btn-primary text-white rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google map reviews */}

      <ReviewSlider />

      {/* <div className="container py-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14646.030410246525!2d85.38288563489914!3d23.40602396850925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e39f809eb7cb%3A0x145a8585be822eea!2sGulmohar%20Physiotherapy!5e0!3m2!1sen!2sin!4v1740462807202!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div> */}
    </div>
  );
}

export default About;

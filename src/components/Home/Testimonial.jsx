import React, { useEffect } from "react";

function Testimonial() {
  const testimonials = [
    {
      image: "img/testimonial-1.jpg",
      name: "Dr. Varun Kumar",
      designation: "Physio Therapist",
      comment:
        "At Gulmohar Physio, we focus on personalized care because every patient’s journey is unique. Helping people move better, feel stronger, and live pain-free is what drives us every day. There’s nothing more rewarding than seeing our patients regain their confidence and get back to doing what they love.",
      rating: 5,
    },
    {
      image: "img/testimonial-2.jpg",
      name: "Dr. Dharmendra Kr Singh",
      designation: "Physio Therapist",
      comment:
        "Healing is not just about treatment; it’s about care, trust, and personalized attention. At Gulmohar Physio, we strive to understand each patient’s needs and provide tailored therapies that bring real relief. Seeing our patients recover and regain their strength is the greatest satisfaction of our work.",
      rating: 5,
    },
    {
      image: "img/testimonial-3.jpg",
      name: "Dr. Supriya Kumari",
      designation: "Physio Therapist",
      comment:
        "Every patient’s recovery story is special to us. At Gulmohar Physio, we work together with you, using the right techniques and compassion, to help you overcome pain and achieve your wellness goals. It's incredibly fulfilling to be a part of our patients' healing journey and witness their transformation.",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<i key={i} className="fas fa-star text-secondary"></i>);
      } else {
        stars.push(<i key={i} className="fas fa-star text-muted"></i>);
      }
    }
    return stars;
  };

  useEffect(() => {
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      dots: true,
      loop: true,
      margin: 25,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>',
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        576: {
          items: 1,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });
  }, []);
  return (
    <div
      className="container-fluid testimonial py-3 wow zoomInDown"
      data-wow-delay="0.1s"
    >
      <div className="container py-3">
        <div className="section-title mb-5">
          <div className="sub-style">
            <h4 className="sub-title text-white px-3 mb-0">Testimonial</h4>
          </div>
          <h4 className="display-3 mb-4">Hear from Our Expert Physiotherapists</h4>
        </div>
        <div className="testimonial-carousel owl-carousel">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial-inner p-5">
                <div className="testimonial-inner-img mb-4">
                  <img
                    src={testimonial.image}
                    className="img-fluid rounded-circle"
                    alt=""
                  />
                </div>
                <p className="text-white fs-7">{testimonial.comment}</p>
                <div className="text-center">
                  <h5 className="mb-2">{testimonial.name}</h5>
                  <p className="mb-2 text-white-50">
                    {testimonial.designation}
                  </p>

                  <div className="d-flex justify-content-center">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

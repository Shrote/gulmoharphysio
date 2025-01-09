import React, { useEffect } from "react";

function Testimonial()
{
    useEffect(()=>{
        $(".testimonial-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1000,
          center: true,
          dots: true,
          loop: true,
          margin: 25,
          nav : true,
          navText : [
              '<i class="bi bi-arrow-left"></i>',
              '<i class="bi bi-arrow-right"></i>'
          ],
          responsiveClass: true,
          responsive: {
              0:{
                  items:1
              },
              576:{
                  items:1
              },
              768:{
                  items:1
              },
              992:{
                  items:1
              },
              1200:{
                  items:1
              }
          }
      });
      },[])
    return(
        <div className="container-fluid testimonial py-5 wow zoomInDown" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="section-title mb-5">
                    <div className="sub-style">
                        <h4 className="sub-title text-white px-3 mb-0">Testimonial</h4>
                    </div>
                    <h1 className="display-3 mb-4">What Clients are Say</h1>
                </div>
                <div className="testimonial-carousel owl-carousel">
                    <div className="testimonial-item">
                        <div className="testimonial-inner p-5">
                            <div className="testimonial-inner-img mb-4">
                                <img src="img/testimonial-img.jpg" className="img-fluid rounded-circle" alt="" />
                            </div>
                            <p className="text-white fs-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum. Totam aut quidem laudantium tempora. Minima, saepe earum!
                            </p>
                            <div className="text-center">
                                <h5 className="mb-2">John Abraham</h5>
                                <p className="mb-2 text-white-50">New York, USA</p>
                                <div className="d-flex justify-content-center">
                                    <i className="fas fa-star text-secondary"></i>
                                    <i className="fas fa-star text-secondary"></i>
                                    <i className="fas fa-star text-secondary"></i>
                                    <i className="fas fa-star text-secondary"></i>
                                    <i className="fas fa-star text-secondary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-inner p-5">
                            <div className="testimonial-inner-img mb-4">
                                <img src="img/testimonial-img.jpg" className="img-fluid rounded-circle" alt="" />
                            </div>
                            <p className="text-white fs-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum. Totam aut quidem laudantium tempora. Minima, saepe earum!
                            </p>
                            <div className="text-center">
                                <h5 className="mb-2">John Abraham</h5>
                                <p className="mb-2 text-white-50">New York, USA</p>
                                <div className="d-flex justify-content-center">
                                    <i className="fas fa-star text-secondary"></i>
                                    <i className="fas fa-star text-secondary"></i>
                                    <i className="fas fa-star text-secondary"></i>
                                    <i className="fas fa-star text-secondary"></i>
                                    <i className="fas fa-star text-secondary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-inner p-5">
                            <div className="testimonial-inner-img mb-4">
                                <img src="img/testimonial-img.jpg" className="img-fluid rounded-circle" alt="" />
                            </div>
                            <p className="text-white fs-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum. Totam aut quidem laudantium tempora. Minima, saepe earum!
                            </p>
                            <div className="text-center">
                                <h5 className="mb-2">John Abraham</h5>
                                <p className="mb-2 text-white-50">New York, USA</p>
                                <div className="d-flex justify-content-center">
                                    <i className="fas fa-star text-secondary"></i>
                                    <i className="fas fa-star text-secondary"></i>
                                    <i className="fas fa-star text-secondary"></i>
                                    <i className="fas fa-star text-secondary"></i>
                                    <i className="fas fa-star text-secondary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
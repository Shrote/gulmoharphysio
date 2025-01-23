import React, { useEffect } from "react";

function Testimonial()
{
    const testimonials = [
        {
            "image":"img/testimonial-img.jpg",
            "name":"Vishal kumar",
            "designation":"Therapist",
            "comment":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum. Totam aut quidem laudantium tempora. Minima, saepe earum!",
            "rating":5
        },
        {
            "image":"img/testimonial-img.jpg",
            "name":"Anmol Gupta",
            "designation":"Therapist",
            "comment":"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nemo facilis tempora esse explicabo sed! Dignissimos quia ullam pariatur blanditiis sed voluptatum. Totam aut quidem laudantium tempora. Minima, saepe earum!",
            "rating":4
        }
    ]

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
                    <h1 className="display-3 mb-4">What Our Physicians Say</h1>
                </div>
                <div className="testimonial-carousel owl-carousel">
                    {testimonials.map((testimonial,index)=>(
                        <div className="testimonial-item" key={index}>
                            <div className="testimonial-inner p-5">
                                <div className="testimonial-inner-img mb-4">
                                    <img src={testimonial.image} className="img-fluid rounded-circle" alt="" />
                                </div>
                                <p className="text-white fs-7">{testimonial.comment}
                                </p>
                                <div className="text-center">
                                    <h5 className="mb-2">{testimonial.name}</h5>
                                    <p className="mb-2 text-white-50">{testimonial.designation}</p>
                                    
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
    )
}

export default Testimonial
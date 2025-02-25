import React, { useEffect } from "react";

function Carousel()
{
    useEffect(() => {
        $(".header-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        });
    }, []);
   return(
   <div className="header-carousel owl-carousel">
        <div className="header-carousel-item">
            <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="Image" />
            <div className="carousel-caption">
                <div className="carousel-caption-content p-3">
                    <h1 className="display-1 text-capitalize text-white mb-4">Reclaim a Pain-Free Life with Gulmohar</h1>
                    <p className="mb-5 fs-5">Expert care, personalized treatments, and a compassionate approach to help you get back to what you love 
                    </p>
                    <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="/appointment">Book Appointment</a>
                </div>
            </div>
        </div>
        <div className="header-carousel-item">
            <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="Image" />
            <div className="carousel-caption">
                <div className="carousel-caption-content p-3">
                    <h1 className="display-1 text-capitalize text-white mb-4">Your Path to Wellness Starts Here</h1>
                    <p className="mb-5 fs-5 animated slideInDown">Our dedicated physiotherapists use advanced techniques to provide lasting relief and support your full recovery</p>
                    <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="/appointment">Book Appointment</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Carousel
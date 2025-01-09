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
                    <h5 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: "3px"}}>Physiotherapy Center</h5>
                    <h1 className="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
                    <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    </p>
                    <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Book Appointment</a>
                </div>
            </div>
        </div>
        <div className="header-carousel-item">
            <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="Image" />
            <div className="carousel-caption">
                <div className="carousel-caption-content p-3">
                    <h5 className="text-white text-uppercase fw-bold mb-4" style={{letterSpacing: "3px"}}>Physiotherapy Center</h5>
                    <h1 className="display-1 text-capitalize text-white mb-4">Best Solution For Painful Life</h1>
                    <p className="mb-5 fs-5 animated slideInDown">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    </p>
                    <a className="btn btn-primary rounded-pill text-white py-3 px-5" href="#">Book Appointment</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Carousel
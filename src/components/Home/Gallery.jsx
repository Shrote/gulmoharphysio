import { Link } from "react-router-dom";
import GalleryCard from "../../cards/GalleryCard";

function Gallery({ limit }) {
  const gallery = [
    {
      img: "img/gallery/1.JPG",
      delay: "0.1s",
    },
    {
      img: "img/gallery/2.JPG",
      delay: "0.3s",
    },
    {
      img: "img/gallery/3.JPG",
      delay: "0.5s",
    },
    {
      img: "img/gallery/4.JPG",
      delay: "0.7s",
    },
    {
      img: "img/gallery/5.JPG",
      delay: "0.1s",
    },
    {
      img: "img/gallery/6.JPG",
      delay: "0.3s",
    },
    {
      img: "img/gallery/7.JPG",
      delay: "0.5s",
    },
    {
      img: "img/gallery/8.JPG",
      delay: "0.7s",
    },
    {
      img: "img/gallery/9.JPG",
      delay: "0.1s",
    },
    {
      img: "img/gallery/10.JPG",
      delay: "0.3s",
    },
    {
      img: "img/gallery/11.JPG",
      delay: "0.5s",
    },
    {
      img: "img/gallery/12.JPG",
      delay: "0.7s",
    },
    {
      img: "img/gallery/13.JPG",
      delay: "0.1s",
    },
    {
      img: "img/gallery/14.JPG",
      delay: "0.3s",
    },
    {
      img: "img/gallery/15.JPG",
      delay: "0.5s",
    },
    {
      img: "img/gallery/16.JPG",
      delay: "0.7s",
    },
  ];

  // Determine how many Gallery to display
  const displayedGallery =
    limit === "all" ? gallery : gallery.slice(0, parseInt(limit, 10));

  return (
    <div className="container-fluid service py-5">
      <div className="container pt-5">
        <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.2s">
          <div className="sub-style">
            <h4 className="sub-title px-3 mb-0">Our Gallery</h4>
          </div>
          
        </div>

        <div className="row g-4 justify-content-center">
          {displayedGallery.map((service, index) => (
            <GalleryCard
              key={index}
              img={service.img}
              delay={service.delay}
            />
          ))}

          {limit !== "all" && (
            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
              <Link className="btn btn-primary rounded-pill text-white py-3 px-5" to="/gallery">
                Gallery More
              </Link>
            </div>
          )}
          
          
        </div>
      </div>
    </div>
  );
}

export default Gallery;

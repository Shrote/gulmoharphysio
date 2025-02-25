import { Link } from "react-router-dom";
import ImageCard from "../../cards/ImageCard";

function Services({ limit }) {
  const services = [
    {
      img: "img/service-1.jpg",
      title: "Neurological Physiotherapy",
      description: "Assists individuals with neurological conditions like stroke and Parkinson's disease to improve movement and coordination.",
      delay: "0.1s",
    },
    {
      img: "img/service-2.jpg",
      title: "Pediatric Physiotherapy",
      description: "Focuses on infants, children, and adolescents to address developmental, neuromuscular, or skeletal disorders.",
      delay: "0.3s",
    },
    {
      img: "img/service-3.jpg",
      title: "Geriatric Physiotherapy",
      description: "Caters to older adults, managing age-related issues such as arthritis and balance disorders to maintain mobility.",
      delay: "0.5s",
    },
    {
      img: "img/service-4.jpg",
      title: "Knee Pain Physiotherapy",
      description: "Treats knee injuries or conditions, including ligament strains and meniscus tears, to reduce pain and restore function.",
      delay: "0.7s",
    },
    {
      img: "img/service-5.jpg",
      title: "Post-Fracture Rehabilitation",
      description: "Supports recovery after bone fractures, promoting healing and preventing complications.",
      delay: "0.1s",
    },
    {
      img: "img/service-6.jpg",
      title: "Back Pain Physiotherapy",
      description: "Evaluation and treatment of back pain caused by muscle strain, spinal deformities, or herniated discs, focusing on pain relief and functional restoration.",
      delay: "0.3s",
    },
    {
      img: "img/service-7.jpg",
      title: "Neck Pain Physiotherapy",
      description: "Interventions for neck pain resulting from muscle strain, poor posture, or cervical spine issues, aimed at reducing pain and improving range of motion.",
      delay: "0.5s",
    },
    {
      img: "img/service-8.jpg",
      title: "Soft Tissue Injury Physiotherapy",
      description: "Treatment of injuries to muscles, ligaments, and tendons, such as sprains and strains, to promote healing and restore normal function.",
      delay: "0.7s",
    },
  ];

  // Determine how many services to display
  const displayedServices =
    limit === "all" ? services : services.slice(0, parseInt(limit, 10));

  return (
    <div className="container-fluid service py-5">
      <div className="container pt-5">
        <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.2s">
          <div className="sub-style">
            <h4 className="sub-title px-3 mb-0">What We Do</h4>
          </div>
          <h1 className="display-3 mb-4">Expert Physiotherapy Services</h1>
          <p className="mb-0">
            Our experienced therapists provide personalized care to help you regain strength and mobility, using advanced techniques and equipment to address various conditions.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {displayedServices.map((service, index) => (
            <ImageCard
              key={index}
              title={service.title}
              img={service.img}
              description={service.description}
              delay={service.delay}
            />
          ))}

          {limit !== "all" && (
            <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
              <Link className="btn btn-primary rounded-pill text-white py-3 px-5" to="/services">
                Services More
              </Link>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Services;

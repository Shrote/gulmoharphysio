import ImageCard from "../../cards/ImageCard"

function Services()
{
    const services = [
        {
          "img": "img/service-1.jpg",
          "title": "Neurological Physiotherapy",
          "description": "Assists individuals with neurological conditions like stroke and Parkinson's disease to improve movement and coordination."
        },
        {
          "img": "img/service-2.jpg",
          "title": "Pediatric Physiotherapy",
          "description": "Focuses on infants, children, and adolescents to address developmental, neuromuscular, or skeletal disorders."
        },
        {
          "img": "img/service-3.jpg",
          "title": "Geriatric Physiotherapy",
          "description": "Caters to older adults, managing age-related issues such as arthritis and balance disorders to maintain mobility."
        },
        {
          "img": "img/service-4.jpg",
          "title": "Knee Pain Physiotherapy",
          "description": "Treats knee injuries or conditions, including ligament strains and meniscus tears, to reduce pain and restore function."
        },
        {
          "img": "img/service-5.jpg",
          "title": "Post-Fracture Rehabilitation",
          "description": "Supports recovery after bone fractures, promoting healing and preventing complications."
        },
        {
          "img": "img/service-6.jpg",
          "title": "Back Pain Physiotherapy",
          "description": "Evaluation and treatment of back pain caused by muscle strain, spinal deformities, or herniated discs, focusing on pain relief and functional restoration."
        },
        {
          "img": "img/service-7.jpg",
          "title": "Neck Pain Physiotherapy",
          "description": "Interventions for neck pain resulting from muscle strain, poor posture, or cervical spine issues, aimed at reducing pain and improving range of motion."
        },
        {
          "img": "img/service-8.jpg",
          "title": "Soft Tissue Injury Physiotherapy",
          "description": "Treatment of injuries to muscles, ligaments, and tendons, such as sprains and strains, to promote healing and restore normal function."
        }
      ]
      
    return(
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
                {services.map((service, index) => (
                <ImageCard 
                    key={index} 
                    title={service.title} 
                    img={service.img} 
                    description={service.description} 
                />
                ))}
                </div>
            </div>
        </div>
    )

}

export default Services
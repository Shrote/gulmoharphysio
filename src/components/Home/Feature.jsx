import IconCard from "../../cards/IconCard";

function Feature()
{
    const features = [
        {
          icon: "fas fa-diagnoses fa-4x text-primary",
          title: "Licensed Therapist",
          description: "Our team of licensed therapists provides expert care to help you achieve optimal health and recovery.",
          delay: "0.1s"
        },
        {
          icon: "fas fa-briefcase-medical fa-4x text-primary",
          title: "Personalized Treatment",
          description: "We create treatment plans tailored to your specific needs for better healing.",
          delay: "0.3s"
        },
        {
          icon: "fas fa-hospital-user fa-4x text-primary",
          title: "Therapy Goals",
          description: "We set clear, achievable goals to track your recovery and progress.",
          delay: "0.5s"
        },
        {
          icon: "fas fa-users fa-4x text-primary",
          title: "Practitioners Network",
          description: "Our network of specialists works together to support your healing.",
          delay: "0.7s"
        },
        {
          icon: "fas fa-spa fa-4x text-primary",
          title: "Comfortable Center",
          description: "Our clinic offers a calming space to focus on your recovery.",
          delay: "0.1s"
        },
        {
          icon: "fas fa-heart fa-4x text-primary",
          title: "Experienced Stuff",
          description: "Our experienced staff ensures the highest standard of care for your recovery.",
          delay: "0.3s"
        },
        {
          icon: "fab fa-pied-piper fa-4x text-primary",
          title: "Therapy Goals",
          description: "We help you achieve your goals with steady progress toward better health.",
          delay: "0.5s"
        },
        {
          icon: "fas fa-user-md fa-4x text-primary",
          title: "Licensed Therapist",
          description: "Our licensed therapists are dedicated to your pain relief and mobility improvement.",
          delay: "0.7s"
        }
      ];

    return(
        <div className="container-fluid feature py-5">
            <div className="container py-5">
                <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="sub-style">
                        <h4 className="sub-title px-3 mb-0">Why Choose Us</h4>
                    </div>
                    <h1 className="display-3 mb-4">Regain Your Active Lifestyle with Our Expertise</h1>
                    <p className="mb-0">
                        Our experienced physiotherapists are dedicated to helping you recover and return to the activities you love. We offer personalized treatment plans, utilize advanced techniques, and provide a compassionate environment to support your healing journey.
                    </p>
                </div>
                
                <div className="row g-4 justify-content-center">
                    {features.map((feature,index)=>(
                        <IconCard
                        key={index} 
                        title={feature.title} 
                        icon={feature.icon} 
                        description={feature.description} 
                        delay = {feature.delay}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Feature
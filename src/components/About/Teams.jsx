import { FaUserDoctor } from "react-icons/fa6";
import TeamCard from "../../cards/TeamCard";
import { FaHandHoldingHeart } from "react-icons/fa";
import { RiUserCommunityFill } from "react-icons/ri";

function Teams() {
  const teams = [
    {
      delay: "0.1s",
      image: "img/team-1.jpg",
      socialLinks: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
      },
      name: "Dr. Varun Kumar",
      designation: "Physio Therapist",
    },
    {
      delay: "0.1s",
      image: "img/team-5.jpg",
      socialLinks: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
      },
      name: "Dr. Dharmendra Kr Singh",
      designation: "Physio Therapist",
    },
    {
      delay: "0.3s",
      image: "img/team-2.jpg",
      socialLinks: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
      },
      name: "Dr. Supriya Kumari",
      designation: "Physio Therapist",
    },
    {
      delay: "0.5s",
      image: "img/team-3.jpg",
      socialLinks: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
      },
      name: "Dhiraj Kumar",
      designation: "Physio Therapist",
    },
    {
      delay: "0.7s",
      image: "img/team-4.jpg",
      socialLinks: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
      },
      name: "Ajit Kumar",
      designation: "Physio Therapist",
    },
    {
      delay: "0.7s",
      image: "img/team-6.jpg",
      socialLinks: {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: "",
      },
      name: "Tripti Kumari",
      designation: "Receptionist",
    },
  ];

  return (
    <div className="container-fluid team py-5">
      <div className="container py-5">
        {/* About Us Section */}
        <div
          className="about-us-section mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="text-center mb-4">
            <img
              src="img/dr-rajeev-ranjan.jpg"
              alt="Dr. Rajeev Ranjan"
              className="img-fluid rounded-circle"
              style={{ width: "150px", height: "150px" }}
            />
            <h2 className="mt-3" style={{color: "#EFA28E"}}>Dr. Rajeev Ranjan</h2>
            <h4 className="text-muted">Head of Physiotherapy, Gulmohar</h4>
            <h4 className="text-muted">President, JSCPT</h4>
          </div>
          <p className="text-center mb-4">
            For years, I’ve dedicated myself to helping individuals recover,
            regain strength, and embrace healthier lives. At Gulmohar, we focus
            on treating sports injuries, post-surgery recovery, and other
            conditions with genuine care. It’s been incredibly fulfilling to
            support our patients’ healing journeys and contribute to the
            community through free health camps. Every success, whether it’s
            seeing someone walk again or watching our team grow, inspires me to
            continue making a positive impact
          </p>
          <div className="row g-4 justify-content-center" style={{textAlign:"center"}}>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h1 style={{color: "#428D71"}}>
                  <FaHandHoldingHeart />
                </h1>

                <h3 className="fw-bold mb-3">Personalized Care</h3>
                <p className="mb-0">
                  We provide tailored physiotherapy plans to meet the unique
                  needs of each patient.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4" style={{textAlign:"center"}}>
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h1 style={{color: "#428D71"}}>
                  <FaUserDoctor />
                </h1>

                <h3 className="fw-bold mb-3">Experienced Team</h3>
                <p className="mb-0">
                  Our team specializes in a wide range of physiotherapy
                  services, ensuring the best care for our patients.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4" style={{textAlign:"center"}}>
              <div className="p-4 bg-white rounded shadow-sm h-100">
                <h1 style={{color: "#428D71"}}>
                  <RiUserCommunityFill />
                </h1>

                <h3 className="fw-bold mb-3">Community Outreach</h3>
                <p className="mb-0">
                  We bring physiotherapy services to everyone through free
                  health camps and community programs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="sub-style">
            <h4 className="sub-title px-3 mb-0">Meet our team</h4>
          </div>
          <h1 className="display-3 mb-4">
            Physiotherapy Services from Professional Therapists
          </h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            deleniti amet at atque sequi quibusdam cumque itaque repudiandae
            temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
            saepe in ab? Repellat!
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {teams.map((team, index) => (
            <TeamCard
              key={index}
              image={team.image}
              name={team.name}
              designation={team.designation}
              socialLinks={team.socialLinks}
              delay={team.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Teams;

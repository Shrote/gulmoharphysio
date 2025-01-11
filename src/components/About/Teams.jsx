import TeamCard from "../../cards/TeamCard"

function Teams()
{
    const teams = [
        {
          "delay": "0.1s",
          "image": "img/team-1.jpg",
          "socialLinks": {
            "facebook": "",
            "twitter": "",
            "instagram": "",
            "linkedin": ""
          },
          "name": "Full Name",
          "designation": "Message Physio Therapist"
        },
        {
          "delay": "0.3s",
          "image": "img/team-2.jpg",
          "socialLinks": {
            "facebook": "",
            "twitter": "",
            "instagram": "",
            "linkedin": ""
          },
          "name": "Full Name",
          "designation": "Rehabilitation Therapist"
        },
        {
          "delay": "0.5s",
          "image": "img/team-3.jpg",
          "socialLinks": {
            "facebook": "",
            "twitter": "",
            "instagram": "",
            "linkedin": ""
          },
          "name": "Full Name",
          "designation": "Doctor of Physical therapy"
        },
        {
          "delay": "0.7s",
          "image": "img/team-4.jpg",
          "socialLinks": {
            "facebook": "",
            "twitter": "",
            "instagram": "",
            "linkedin": ""
          },
          "name": "Full Name",
          "designation": "Doctor of Physical therapy"
        }
      ]
      
    return(
        <div className="container-fluid team py-5">
            <div className="container py-5">
                <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="sub-style">
                        <h4 className="sub-title px-3 mb-0">Meet our team</h4>
                    </div>
                    <h1 className="display-3 mb-4">Physiotherapy Services from Professional Therapist</h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!</p>
                </div>
                <div className="row g-4 justify-content-center">
                    {teams.map((team,index)=>(
                        <TeamCard
                        key={index}
                        image = {team.image}
                        name = {team.name}
                        designation = {team.designation}
                        socialLinks = {team.socialLinks}
                        delay = {team.delay}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Teams
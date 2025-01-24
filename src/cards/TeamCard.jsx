function TeamCard(cardData)
{
    return(
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={cardData.delay}>
            <div className="team-item rounded">
                <div className="team-img rounded-top h-100">
                    <img src={cardData.image} className="img-fluid rounded-top w-100" alt={cardData.name} />
                    <div className="team-icon d-flex justify-content-center">
                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href={cardData.socialLinks.facebook}><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href={cardData.socialLinks.twitter}><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href={cardData.socialLinks.instagram}><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-square btn-primary text-white rounded-circle mx-1" href={cardData.socialLinks.linkedin}><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="team-content text-center border border-primary border-top-0 rounded-bottom p-4">
                    <h5>{cardData.name}</h5>
                    <p className="mb-0">{cardData.designation}</p>
                </div>
            </div>
        </div>
    )
}

export default TeamCard
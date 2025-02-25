function TeamCard(cardData)
{
    return(
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={cardData.delay}>
            <div className="team-item rounded">
                <div className="team-img rounded-top h-100">
                    <img src={cardData.image} className="img-fluid rounded-top w-100" alt={cardData.name} />
                   
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
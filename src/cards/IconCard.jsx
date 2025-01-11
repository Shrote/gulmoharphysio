function IconCard(cardData)
{
    return(
        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay={cardData.delay}>
            <div className="row-cols-1 feature-item p-4">
                <div className="col-12">
                    <div className="feature-icon mb-4">
                        <div className="p-3 d-inline-flex bg-white rounded">
                            <i className={cardData.icon}></i>
                        </div>
                    </div>
                    <div className="feature-content d-flex flex-column">
                        <h5 className="mb-4">{cardData.title}</h5>
                        <p className="mb-0">{cardData.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IconCard
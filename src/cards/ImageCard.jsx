function ImageCard(cardData)
{
    return(
        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay={cardData.delay}>
            <div className="service-item bg-light rounded">
                <div className="service-img rounded-top">
                    <img src={`/${cardData.img}`} className="img-fluid rounded-top w-100" alt={cardData.title} />
                </div>
                <div className="service-content rounded-bottom p-4">
                    <div className="service-content-inner">
                        <h5 className="mb-4">{cardData.title}</h5>
                        <p className="mb-4">{cardData.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageCard
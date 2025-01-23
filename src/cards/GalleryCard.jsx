function GalleryCard(cardData)
{
    return(
        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay={cardData.delay}>
            <div className="service-item bg-light rounded">
                <div className="service-img">
                    <img src={`/${cardData.img}`} className="img-fluid" alt="" height="350px"/>
                </div>
                
            </div>
        </div>
    )
}

export default GalleryCard
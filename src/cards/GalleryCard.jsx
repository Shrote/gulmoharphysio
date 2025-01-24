function GalleryCard(cardData)
{
    return(
        <div className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay={cardData.delay}>
            <div className="service-item bg-light rounded">
                <div className="service-img" style={{height:"100%"}}>
                    <img src={`/${cardData.img}`} className="img-fluid" alt={cardData.alt} style={{height:"100%", objectFit: "cover"}}/>
                </div>
                
            </div>
        </div>
    )
}

export default GalleryCard
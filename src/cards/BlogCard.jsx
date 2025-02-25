function BlogCard(cardData)
{
    return(
        <div className="col-md-6 col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay={cardData.delay}>
            <div className="blog-item rounded">
                <div className="blog-img">
                    <img src={cardData.image} className="img-fluid w-100" alt={cardData.title} />
                </div>
                <div className="blog-centent p-4">
                    <div className="d-flex justify-content-between mb-4">
                        <p className="mb-0 text-muted"><i className="fa fa-calendar-alt text-primary"></i> {cardData.date}</p>
                    </div>
                    <a href={cardData.link} className="h4">{cardData.title}</a>
                    <p className="my-4">{cardData.description}</p>
                </div>
            </div>
        </div>
    )

}

export default BlogCard
function Header(details)
{
    const bgBreadcrumb = {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../img/${details.img}')`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '160px 0 60px 0',
    };

    const breadcrumbItem = {
        color: 'var(--bs-white) !important',
    };
    
    return(
        <div className="container-fluid" style={bgBreadcrumb}>
            <div className="container text-center py-5" style={{maxWidth: "900px"}}>
                <h3 className="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">{details.title}</h3>
                <ol className="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item"><a href="/" style={breadcrumbItem}>Home</a></li>
                    <li className="breadcrumb-item" style={breadcrumbItem}>Pages</li>
                    <li className="breadcrumb-item active text-primary">{details.route}</li>
                </ol>    
            </div>
        </div>
    )
}

export default Header
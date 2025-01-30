import { Link } from "react-router-dom";
import BlogCard from "../../cards/BlogCard"

function Blog({ limit })
{
    const blogs = [
        {
          "image": "img/blog-1.jpg",
          "date": "01 Jan 2045",
          "title": "Remove back Pain While Working on o physio",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium hic consequatur beatae architecto.",
          "link": "#",
          "delay":"0.1s",
        },
        {
            "image": "img/blog-2.jpg",
            "date": "01 Jan 2045",
            "title": "Benefits of a weekly physiotherapy session",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium hic consequatur beatae architecto.",
            "link": "#",
            "delay":"0.3s",
        },
        {
            "image": "img/blog-3.jpg",
            "date": "01 Jan 2045",
            "title": "Regular excercise can slow ageing process",
            "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium hic consequatur beatae architecto.",
            "link": "#",
            "delay":"0.5s",
        }
    ]

    const displayedBlogs =
    limit === "all" ? blogs : blogs.slice(0, parseInt(limit, 10));

    return(
        <div className="container-fluid blog py-5">
            <div className="container py-5">
                <div className="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="sub-style">
                        <h4 className="sub-title px-3 mb-0">Our Blog</h4>
                    </div>
                    <h1 className="display-3 mb-4">Excellent Facility and High Quality Therapy</h1>
                    <p className="mb-0">Stay informed with our latest articles on physiotherapy, wellness tips, and recovery strategies. We share valuable insights to help you manage pain, improve mobility, and lead a healthier lifestyle.</p>
                </div>
                <div className="row g-4 justify-content-center">
                {displayedBlogs.map((blog,index)=>(
                    <BlogCard
                    key = {index}
                    title = {blog.title}
                    description = {blog.description}
                    date = {blog.date}
                    link = {blog.link}
                    image = {blog.image}
                    delay = {blog.delay}
                    />
                   ))
                }
                {limit !== "all" && (
                    <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                    <Link className="btn btn-primary rounded-pill text-white py-3 px-5" to="/blogs">
                        Blogs More
                    </Link>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}

export default Blog
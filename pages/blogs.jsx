import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import ToTop from "../src/utils/ToTop";
import Header from "../src/components/Header";
import Blog from "../src/components/Home/Blog";



function Blogs() {

  return (
    <>
        {/* <TopBar /> */}
        <div className="container-fluid position-relative p-0">
        <NavBar />
        </div>
        <Header route="Blogs" title="Physiotherapy Blog" img="carousel-2.jpg"/>
        <Blog limit="all" />
        <Footer/>
        <ToTop/>
    </>
  )
}

export default Blogs

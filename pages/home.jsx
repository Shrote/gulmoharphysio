import NavBar from "../src/components/NavBar";
import Carousel from "../src/components/Home/Carousel";
import About from "../src/components/Home/About";
import Services from "../src/components/Home/Sevices";
import Feature from "../src/components/Home/Feature";
import Appointment from "../src/components/Home/Appointment";
import Testimonial from "../src/components/Home/Testimonial";
import Blog from "../src/components/Home/Blog";
import Footer from "../src/components/Footer";
import ToTop from "../src/utils/ToTop";
import Gallery from "../src/components/Home/Gallery";
import Awards from "../src/components/Home/Awards";



function Home() {

  return (
    <>
        {/* <TopBar /> */}
        <div className="container-fluid position-relative p-0">
            <NavBar />
            <Carousel />
        </div>
        <About/>
        <Services limit="4"/>
        <Awards />
        <Feature/>
        <Appointment/>
        <Testimonial/>
        <Gallery limit="4"/>
        <Blog limit="3"/>
        <Footer/>
        <ToTop/>
    </>
  )
}

export default Home

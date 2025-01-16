import TopBar from "../src/components/Topbar";
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



function Home() {

  return (
    <>
        <TopBar />
        <div className="container-fluid position-relative p-0">
            <NavBar />
            <Carousel />
        </div>
        <About/>
        <Services limit="4"/>
        <Feature/>
        <Appointment/>
        <Testimonial/>
        <Blog/>
        <Footer/>
        <ToTop/>
    </>
  )
}

export default Home

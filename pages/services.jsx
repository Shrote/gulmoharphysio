import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import ToTop from "../src/utils/ToTop";
import Header from "../src/components/Header";
import Services from "../src/components/Home/Sevices";



function appointment() {

  return (
    <>
        {/* <TopBar /> */}
        <div className="container-fluid position-relative p-0">
        <NavBar />
        </div>
        <Header route="Services" title="Our Services" img="carousel-2.jpg"/>
        <Services limit="all" />
        <Footer/>
        <ToTop/>
    </>
  )
}

export default appointment

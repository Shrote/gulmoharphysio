import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import ToTop from "../src/utils/ToTop";
import Header from "../src/components/Header";
import Gallery from "../src/components/Home/Gallery";



function appointment() {

  return (
    <>
        {/* <TopBar /> */}
        <div className="container-fluid position-relative p-0">
        <NavBar />
        </div>
        <Header route="Gallery" title="Our Gallery" img="carousel-2.jpg"/>
        <Gallery limit="all" />
        <Footer/>
        <ToTop/>
    </>
  )
}

export default appointment

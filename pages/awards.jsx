import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import ToTop from "../src/utils/ToTop";
import Header from "../src/components/Header";
import Award from "../src/components/Home/awards";

function Awards() {

  return (
    <>
        <div className="container-fluid position-relative p-0">
        <NavBar />
        </div>
        <Header route="Awards" title="Physiotherapy Blog" img="carousel-2.jpg"/>
        <Award/>
        <Footer/>
        <ToTop/>
    </>
  )
}

export default Awards

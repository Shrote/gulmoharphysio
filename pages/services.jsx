import TopBar from "../src/components/Topbar";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import ToTop from "../src/utils/ToTop";
import Header from "../src/components/Header";
import Services from "../src/components/Home/Sevices";



function appointment() {

  return (
    <>
        <TopBar />
        <NavBar />
        <Header route="Services" title="Our Services" img="carousel-2.jpg"/>
        <Services limit="all" />
        <Footer/>
        <ToTop/>
    </>
  )
}

export default appointment
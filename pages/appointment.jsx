import TopBar from "../src/components/Topbar";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import ToTop from "../src/utils/ToTop";
import Header from "../src/components/Header";
import Appointment from "../src/components/Home/Appointment";



function appointment() {

  return (
    <>
        <TopBar />
        <NavBar />
        <Header route="Appointment" title="Book Appointment" img="carousel-2.jpg"/>
        <Appointment/>
        <Footer/>
        <ToTop/>
    </>
  )
}

export default appointment

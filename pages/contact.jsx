import TopBar from "../src/components/Topbar";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import ToTop from "../src/utils/ToTop";
import Header from "../src/components/Header";
import ContactCard from "../src/components/Contact/ContactCard";



function Contact() {

  return (
    <>
        <TopBar />
        <NavBar />
        <Header route="Contact" title="Contact Us" img="carousel-2.jpg"/>
        <ContactCard/>
        <Footer/>
        <ToTop/>
    </>
  )
}

export default Contact

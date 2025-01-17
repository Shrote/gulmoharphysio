import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import ToTop from "../src/utils/ToTop";
import Header from "../src/components/Header";
import ContactCard from "../src/components/Contact/ContactCard";



function Contact() {

  return (
    <>
        {/* <TopBar /> */}
        <div className="container-fluid position-relative p-0">
        <NavBar />
        </div>
        <Header route="Contact" title="Contact Us" img="carousel-2.jpg"/>
        <ContactCard/>
        <Footer/>
        <ToTop/>
    </>
  )
}

export default Contact

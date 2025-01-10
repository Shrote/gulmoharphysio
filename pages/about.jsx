import TopBar from "../src/components/Topbar";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import ToTop from "../src/utils/ToTop";
import Teams from "../src/components/About/Teams";
import Header from "../src/components/Header";



function Home() {

  return (
    <>
        <TopBar />
        <NavBar />
        <Header route="About" title="About Us" img="carousel-2.jpg"/>
        <Teams/>
        <Footer/>
        <ToTop/>
    </>
  )
}

export default Home

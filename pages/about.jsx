import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import ToTop from "../src/utils/ToTop";
import Teams from "../src/components/About/Teams";
import Header from "../src/components/Header";



function Home() {

  return (
    <>
        {/* <TopBar /> */}
        <div className="container-fluid position-relative p-0">
        <NavBar />
        </div>
        <Header route="About" title="About Us" img="carousel-2.jpg"/>
        <>
        </>
        <Teams/>
        <Footer/>
        <ToTop/>
    </>
  )
}

export default Home

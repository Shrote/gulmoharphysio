import React, { Suspense, lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import PreLoader from "./utils/PreLoader";
import ScrollToTop from "./utils/ScrollToTop"; // Import ScrollToTop component
import About from "../pages/about";
import Contact from "../pages/contact";
import Services from "../pages/services";
import Appointment from "../pages/appointment";
import Blogs from "../pages/blogs";
import Gallery from "../pages/gallery";
import Privacy from "../pages/privacy";

const Home = lazy(() => import("../pages/home"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;

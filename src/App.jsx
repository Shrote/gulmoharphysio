import React, { Suspense, lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PreLoader from "./utils/PreLoader";
import About from "../pages/about";
import Contact from "../pages/contact";
import Services from "../pages/services";
import Appointment from "../pages/appointment";


const Home = lazy(() => import("../pages/home"));

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/appointment" element={<Appointment/>} />
          <Route path="/services" element={<Services/>} />
        </Routes>
    </Router>
  );
}

export default App;

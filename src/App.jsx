import React, { Suspense, lazy, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import PreLoader from "./utils/PreLoader";


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
        </Routes>
    </Router>
  );
}

export default App;

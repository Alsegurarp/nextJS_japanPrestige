// Navbar + <Outlet/> + Footer

import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../Componentes/Layout/Navbar/Navbar";
import Footer from "../Componentes/Layout/Footer/Footer";
// import FlyingButton from "../Componentes/UI/FlyingButtons/FlyingButton.jsx";
import RouteTracker from "../Analytics/RouteTracker.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import ResourceHints from "../utils/ResourceHints.jsx";
import { preloadCriticalResources } from "../utils/preloadResources.js";
// import FlyingCotiza from "../Componentes/UI/FlyingButtons/FlyingCotiza.jsx"; 

export default function Layout() {
  // Preload critical resources on app initialization
  useEffect(() => {
    preloadCriticalResources();
  }, []);
  return (
    <>
      <ResourceHints />
      <ScrollToTop />
      <RouteTracker />
      <Navbar />
      {/*<FlyingButton />*/}
        <main id="main">
          <Outlet />  
        </main>
      <Footer />
    </>
  );
}
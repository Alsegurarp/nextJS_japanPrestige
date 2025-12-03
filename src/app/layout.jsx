import { Suspense } from "react";
import "./globals.css";
import Navbar from "../Componentes/Layout/Navbar/Navbar";
import Footer from "../Componentes/Layout/Footer/Footer";
import ResourceHints from "../utils/ResourceHints.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import RouteTracker from "../Analytics/RouteTracker.jsx";
import GoogleAds from "../components/GoogleAds.jsx";

export const metadata = {
  title: "Japón Premium",
  description: "Viajes de lujo a Japón",
};

export default function Rootlayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <ResourceHints />
        <ScrollToTop />
        <GoogleAds />
        <Suspense fallback={null}>
          <RouteTracker />
        </Suspense>
        <Navbar />
        <main id="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
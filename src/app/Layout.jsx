import { Suspense } from "react";
import "./globals.css";
import Navbar from "../Componentes/layout/Navbar/Navbar.jsx";
import Footer from "../Componentes/layout/Footer/Footer.jsx";
import ResourceHints from "../utils/ResourceHints.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import RouteTracker from "../Analytics/RouteTracker.jsx";

export const metadata = {
  title: "Japón Premium",
  description: "Viajes de lujo a Japón",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <ResourceHints />
        <ScrollToTop />
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
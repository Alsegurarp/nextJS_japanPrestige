'use memo'; // React Compiler directive for automatic memoization
import React, {useEffect, useMemo} from 'react';
import { lazy, Suspense } from 'react';
import '../../styles/home.css';

// Direct loading without IntersectionObserver to prevent viewport interference
import LoadingSpinner from '../../Componentes/UI/LoadingSpinner.jsx';
import TitleSVG from "./HeroExclusivoHome/TitleSVG.jsx";

// Lazy load each section individually for better bundle splitting
const CaracteristicasHome = lazy(() => import ('../../Componentes/Sections/CaracteristicasHome.jsx'));
const BeneficiosHome = lazy(() => import ('../../Componentes/Sections/BeneficiosHome.jsx'));
const StepsCardsHome = lazy(() => import ('../../Componentes/UI/Cards/StepsCardsHome.jsx'));
const ParaQuienEs = lazy(() => import ('../../Componentes/Sections/Home/ParaQuienEs.jsx'));
const ConfiarEnNosotros = lazy(() => import ('../../Componentes/Sections/Home/ConfiarEnNosotros.jsx'));
// const Testimonios = lazy(() => import ('../../Componentes/Sections/Home/Testimonios.jsx'));
const RespuestaObjeciones = lazy(() => import ('../../Componentes/Sections/Home/RespuestaObjeciones.jsx'));
const svgPremium = lazy(() => import('./HeroExclusivoHome/TitleSVG.jsx'));
import FlyingButton from "../../Componentes/UI/FlyingButtons/FlyingButton.jsx";

import Hero from './HeroExclusivoHome/Hero.jsx';

// import Premium from '../../assets/indexImagenes/premium_logo.svg';
import letrasMobile from "../../assets/titulosDorados/index/viajesJaponMovil.svg";
import letrasDesktop from "../../assets/titulosDorados/index/viajesJaponWeb.svg";

function Home() {
    // Memoize Hero component props to prevent unnecessary re-renders
    const heroProps = useMemo(() => ({
      title: "VIAJES A JAPÓN",
      bigTitle: <TitleSVG />,
      subtitle: "Descubre Japón en un Nivel Superior",
      altImg: "Pareja con kimono en calle tradicional de Kioto",
      imgMobile: { webp: '/Movil-Experiencia-cultural-con-kimono-tradicional.webp' },
      imgTablet: { webp: '/Tablet-Experiencia-cultural-con-kimono-tradicional.webp' },
      imgDesktop: { webp: '/Experiencia-cultural-con-kimono-tradicional.webp' },
      imgDesktopXL: { webp: '/Experiencia-cultural-con-kimono-tradicionalXL.webp' },
      letrasMobile: letrasMobile,
      letrasDesktop: letrasDesktop,
      bgPosition: "50% 40%"
    }), []);

    const FlyingButtonProps = useMemo(() => ({
      positionTop: '340px',
    }))

    // Memoize fallback components to prevent recreation on each render
    const fallbackComponents = useMemo(() => ({
      caracteristicas: <div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LoadingSpinner label="Cargando características..." /></div>,
      beneficios: <div style={{ minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LoadingSpinner label="Cargando beneficios..." /></div>,
      steps: <div style={{ minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LoadingSpinner label="Cargando proceso..." /></div>,
      paraQuien: <div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LoadingSpinner label="Cargando información..." /></div>,
      confiar: <div style={{ minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LoadingSpinner label="Cargando confianza..." /></div>,
      respuestas: <div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LoadingSpinner label="Cargando respuestas..." /></div>
    }), []);

    useEffect(() => {
      document.title = "Conoce Japón PREMIUM® | Viajes desde México a Japón";
      // Prevent scroll restoration on page reload - force to top
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
        }
        
        // Ensure page starts at top on load/reload
        window.scrollTo(0, 0);
        
        // Lock scroll position during lazy loading
        let scrollLocked = false;
        const lockScroll = () => {
          scrollLocked = true;
          setTimeout(() => { scrollLocked = false; }, 400); // Unlock after 800 milliseconds
          };
          
          const preventScroll = () => {
            if (scrollLocked) {
              window.scrollTo(0, 0);
              }
              };
              
              lockScroll();
              window.addEventListener('scroll', preventScroll);
              
              // Cleanup
              return () => {
                window.removeEventListener('scroll', preventScroll);
                };
                
    }, []);

  return (
    <>
    {/* <HeroSection data={data}/> */}
    <Hero {...heroProps} />
    <FlyingButton {...FlyingButtonProps} />

    {/* Direct component loading - no progressive loading to eliminate viewport interference */}
    
    {/* CaracteristicasHome */}
    <Suspense fallback={fallbackComponents.caracteristicas}>
      <CaracteristicasHome />
    </Suspense>
    

    {/* BeneficiosHome */}
    <Suspense fallback={fallbackComponents.beneficios}>
      <BeneficiosHome />
    </Suspense>
    

    {/* StepsCardsHome */}
    <Suspense fallback={fallbackComponents.steps}>
      <StepsCardsHome />
    </Suspense>
    

    {/* ParaQuienEs */}
    <Suspense fallback={fallbackComponents.paraQuien}>
      <ParaQuienEs />
    </Suspense>
    

    {/* ConfiarEnNosotros */}
    <Suspense fallback={fallbackComponents.confiar}>
      <ConfiarEnNosotros />
    </Suspense>
    

    {/* Testimonios 
    
      <Suspense fallback={<LoadingSpinner label="Cargando testimonios..." />}>
        <Testimonios />
      </Suspense>
    */}
    

    {/* RespuestaObjeciones */}
    <Suspense fallback={fallbackComponents.respuestas}>
      <RespuestaObjeciones />
    </Suspense>
    
    </>
  )
}


export default Home;

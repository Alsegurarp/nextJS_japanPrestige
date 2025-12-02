// Enhanced critical path component loader
import { lazy, Suspense } from 'react';

// Critical components loaded immediately
const Hero = lazy(() => import('../pages/Home/HeroExclusivoHome/Hero.jsx'));
const Navbar = lazy(() => import('../Componentes/Layout/Navbar/Navbar.jsx'));

// Non-critical components loaded later
const Footer = lazy(() => import('../Componentes/Layout/Footer/Footer.jsx'));
const BeneficiosHome = lazy(() => import('../Componentes/Sections/BeneficiosHome.jsx'));

// Optimized loading strategy
const CriticalLayoutLoader = ({ children }) => (
  <Suspense fallback={
    <div className="loading-skeleton" style={{
      height: '100vh',
      background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
      backgroundSize: '200% 100%',
      animation: 'loading 1.5s infinite'
    }} />
  }>
    {children}
  </Suspense>
);

export { Hero, Navbar, Footer, BeneficiosHome, CriticalLayoutLoader };
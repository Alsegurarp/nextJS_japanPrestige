import { lazy } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import japanPremium from '../../../assets/portadas-nuevas-19-sep/hotelesImg/contacto_Portada_Japon_Premium_Templo.webp';

// Helper to extract src from imported images
const getSrcValue = (img) => {
  if (!img) return null;
  if (typeof img === 'object' && img.src) {
    return img.src;
  }
  if (typeof img === 'string') {
    return img;
  }
  return null;
};

const Form = lazy(() => import('./Form.jsx'));
const RedesSociales = lazy(() => import('./RedesSociales.jsx'));

const data = [
  {
    cat1: "Cotiza ahora ",
    cat2: "Whatsapp ",
    image: japanPremium,
  }]


function Hero({ image }) {
  const imageSrc = getSrcValue(image);

  return (
    <div style={{ position: 'relative', top: '-60px' }}>
      {imageSrc && (
        <div className={styles.beneficiosContainerHero} style={{ position: 'relative' }}>
          <Image
            src={imageSrc}
            alt="Hero Background"
            fill
            priority
            style={{ objectFit: 'cover' }}
            className={styles.heroImg}
          />
          <div className={styles.heroContentGrid}>
            <div className={styles.heroContent}>
              {/* Hero content will be centered here */}
            </div>
            <section className={styles.FormularioYContenido}>
              <Form />
            </section>
          </div>
        </div>
      )}
      <RedesSociales />
    </div>
  )
}


import React from 'react'

const HeroSection = React.memo(function HeroSection() {


  return (
    <div>
      {data.map((s, index) => (
        <Hero
          image={s.image}
          title={s.title}
          cat1={s.cat1}
          cat2={s.cat2}
          key={`hero-${index}`} />
      ))}
    </div>
  )
});

export default HeroSection

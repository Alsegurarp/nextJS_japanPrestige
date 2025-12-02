import React from 'react';
import styles from './HeroSection.module.css';
import { Link } from 'react-router-dom';

const HeroSection = React.memo(function HeroSection({data}) {

    return(
        <div>
            {data.map((s, i) => (
                <Hero
                key={i}
                image={s.image}
                altImg={s.altImg}
                title={s.title}
                subtitle={s.subtitle}
                bgPosition={s.bgPosition}
                letrasDoradasResponsive={s.letrasDoradasResponsive}
                LetrasDoradasDesktop={s.LetrasDoradasDesktop}
                />
            ))}
        </div>
    )
})


function Hero({image, altImg, title, subtitle, bgPosition = "50%", letrasDoradasResponsive, LetrasDoradasDesktop}) {

   return(
    <div className={styles.beneficiosContainerHero} 
        style={{backgroundImage: `url(${image})`, 
          backgroundPosition: bgPosition}}
        >
      <img src={image} alt={altImg} className={styles.visuallyHidden} />

      <div className={styles.contenidoBeneficiosHero}>
        {/* Grid Item 1: Responsive SVG (mobile/tablet) */}
        <img 
          src={letrasDoradasResponsive} 
          alt="" 
          className={styles.letrasDoradasResponsive} 
          loading='lazy'
        />
        
        {/* Grid Item 2: Desktop SVG (desktop) */}
        <img 
          src={LetrasDoradasDesktop} 
          alt="" 
          className={styles.letrasDoradasDesktop} 
          loading='lazy'
        />
        
        {/* Grid Item 3: Title and Subtitle */}
        <div className={styles.titlePlusSubtitleHero}>         
            <h1 className={styles.styleTitle}>{title}</h1>
            <h2 className={styles.subtitleStyle}>{subtitle}</h2>
            <Link to="/contacto" rel="noopener noreferrer" className={styles.buttonCATcaracteristicas}>
              Diseña tu viaje ahora
            </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
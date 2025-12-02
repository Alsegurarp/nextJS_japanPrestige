import React from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';
import Link from 'next/link';

const HeroSection = React.memo(function HeroSection({ data }) {

  return (
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


function Hero({ image, altImg, title, subtitle, bgPosition = "50%", letrasDoradasResponsive, LetrasDoradasDesktop }) {

  return (
    <div className={styles.beneficiosContainerHero}
      style={{
        position: 'relative'
      }}
    >
      {image && <Image src={image} alt={altImg} fill className={styles.visuallyHidden} priority={true} style={{objectPosition: bgPosition}} />}

      <div className={styles.contenidoBeneficiosHero}>
        {/* Grid Item 1: Responsive SVG (mobile/tablet) */}
        <Image
          src={letrasDoradasResponsive}
          alt=""
          className={styles.letrasDoradasResponsive}
          width={300}
          height={100}
          priority={false}
        />

        {/* Grid Item 2: Desktop SVG (desktop) */}
        <Image
          src={LetrasDoradasDesktop}
          alt=""
          className={styles.letrasDoradasDesktop}
          width={500}
          height={150}
          priority={false}
        />

        {/* Grid Item 3: Title and Subtitle */}
        <div className={styles.titlePlusSubtitleHero}>
          <h1 className={styles.styleTitle}>{title}</h1>
          <h2 className={styles.subtitleStyle}>{subtitle}</h2>
          <Link href="/contacto" rel="noopener noreferrer" className={styles.buttonCATcaracteristicas}>
            Diseña tu viaje ahora
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
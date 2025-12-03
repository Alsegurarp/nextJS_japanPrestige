import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroGracias.module.css';

import Youtube from '../../../assets/icono-youtube.svg';
import Facebook from '../../../assets/icono-facebook.svg';
import Instagram from '../../../assets/icono-instagram.svg';
import Spotify from '../../../assets/icono-spotify.svg';
import Tiktok from '../../../assets/icono-tiktok.svg';

import Tiktok from '../../../assets/icono-tiktok.svg';

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

const HeroSection = React.memo(function HeroSection({ data }) {

  return (
    <div>
      {data.map((s, i) => (
        <Hero
          key={i}
          image={s.image}
          altImg={s.altImg}
          title={s.title}
          bgPosition={s.bgPosition}
          letrasDoradasResponsive={s.letrasDoradasResponsive}
          LetrasDoradasDesktop={s.LetrasDoradasDesktop}
        />
      ))}
    </div>
  )
})


function Hero({ image, altImg, title, subtitle, bgPosition = "50%", letrasDoradasResponsive, LetrasDoradasDesktop }) {


  const imageSrc = getSrcValue(image);
  const letrasResponsiveSrc = getSrcValue(letrasDoradasResponsive);
  const letrasDesktopSrc = getSrcValue(LetrasDoradasDesktop);



  return (
    <div className={styles.beneficiosContainerHero} style={{ position: 'relative' }}>

      {/* Next.js Image for optimized rendering */}
      {imageSrc && <Image src={imageSrc} alt={altImg} fill priority={true} style={{ objectPosition: bgPosition, objectFit: 'cover' }} />}

      <div className={styles.contenidoBeneficiosHero}>
        {letrasResponsiveSrc && <Image src={letrasResponsiveSrc} alt="" className={styles.letrasDoradasResponsive} width={300} height={100} priority={false} />}
        {letrasDesktopSrc && <Image src={letrasDesktopSrc} alt="" className={styles.letrasDoradasDesktop} width={500} height={150} priority={false} />}
        <div className={styles.titlePlusSubtitleHero}>
          <h2 className={styles.textStyle}>{title}</h2>
          <h2 className={styles.textStyle}>{subtitle}</h2>

          <div className={styles.contenedorBotones}>
            <button className={styles.buttonStyle}>Llamar al call center 24/7</button>
            <button className={styles.buttonStyle}>Chatea con un asesor ahora</button>
          </div>
        </div>
        <RedesSociales />
      </div>
    </div>
  )
}

export default HeroSection;



function RedesSociales() {
  const redes = [
    {
      id: 1,
      alt: 'Ícono de Facebook, enlace al perfil @Viajes Premium',
      src: Facebook,
      link: "https://www.facebook.com/turismosantafeoficial",
      text: '@Viajes Premium',
      subtitulo: 'Facebook: ',
    },
    {
      id: 2,
      alt: 'Ícono de Tiktok, enlace al canal Japón Premium',
      src: Tiktok,
      link: "https://www.tiktok.com/@viajespremium?is_from_webapp=1&sender_device=pc",
      text: '@viajespremium',
      subtitulo: 'Tiktok: ',
    },
    {
      id: 3,
      alt: 'Ícono de Instagram, enlace al perfil @japonPremium',
      src: Instagram,
      link: "https://www.instagram.com/viajespremium.oficial/",
      text: '@viajespremium.oficial',
      subtitulo: 'Instagram: ',
    },
    {
      id: 4,
      alt: 'Ícono de Youtube, enlace al canal Viajes Premium',
      src: Youtube,
      link: "https://www.youtube.com/@viajespremiumelevatuvida",
      text: '@viajespremiumelevatuvida',
      subtitulo: 'Youtube: ',
    }, {
      id: 5,
      alt: 'Ícono de Spotify, enlace al perfil ViajesPremium',
      src: Spotify,
      link: "https://open.spotify.com/show/4VmUesUcK08SIuxLxsl3dF?si=54ef4be681dd49d2&nd=1&dlsi=d3d1513495834e9a",
      text: '@viajespremium',
      subtitulo: 'Instagram: ',
    },
  ];

  return (
    <section className={styles.containerSociales}>
      <div className={styles.flexColumnGap15}>
        <span className={styles.titleWhite}>Nuestras Redes Sociales</span>
        <div className={styles.redesSocialesContainer}>
          {redes.map((r, i) => (
            <div key={r.id} className={styles.rowStart}>
              <a href={r.link} target="_blank" rel="noopener noreferrer">
                <img src={getSrcValue(r.src)} alt={r.alt} className={styles.iconsFooter} loading='lazy' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
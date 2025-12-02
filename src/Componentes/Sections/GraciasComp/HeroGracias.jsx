import React, {useEffect} from 'react';
import styles from './HeroGracias.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Youtube from '../../../assets/icono-youtube.svg';
import Facebook from '../../../assets/icono-facebook.svg';
import Instagram from '../../../assets/icono-instagram.svg';
import Spotify from '../../../assets/icono-spotify.svg';
import Tiktok from '../../../assets/icono-tiktok.svg';

const HeroSection = React.memo(function HeroSection({data}) {

    return(
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


function Hero({image, altImg, title, subtitle, bgPosition = "50%", letrasDoradasResponsive, LetrasDoradasDesktop}) {

  useEffect(() => {
      AOS.init({
        duration: 1000, // duración de animaciones
        once: true      // Se anima solo una vez
      });
      }, []);

   return(
    <div className={styles.beneficiosContainerHero} 
        style={{backgroundImage: `url(${image})`, 
          backgroundPosition: bgPosition}}
        >
      
      {/* imagen visualmente oculta, pero para ayudar a nuestra accesibilidad */}
      <img src={image} alt={altImg} className={styles.visuallyHidden} />

      <div className={styles.contenidoBeneficiosHero}>
        <img src={letrasDoradasResponsive} alt="" className={styles.letrasDoradasResponsive} loading='lazy'/>
        <img src={LetrasDoradasDesktop} alt="" className={styles.letrasDoradasDesktop} loading='lazy'/>
        <div className={styles.titlePlusSubtitleHero} data-aos="fade-right">         
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
    },{
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
                <div key={r.id} data-aos="fade-up" data-aos-delay={`${i}0`}  className={styles.rowStart}>
                    <a href={r.link} target="_blank" rel="noopener noreferrer">
                    <img src={r.src} alt={r.alt} className={styles.iconsFooter} loading='lazy' />
                    </a>
            </div>
            ))}
            </div>
        </div>
    </section>
  );
}
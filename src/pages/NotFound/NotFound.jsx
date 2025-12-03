import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from './NotFound.module.css';

import HeroImage from '../../assets/Itinerarios/monte-fuji-noche-cielo-estrellado-paisaje.webp';
import Navbar from '../../Componentes/layout/Navbar/Navbar';


const NotFound = React.memo(function NotFound() {

  const data = [
    {
      id: "01",
      title: "¡Ups! Esta página decidió tomarse un descanso.",
      text: "El contenido que buscas no se encuentra en este momento.",
      image: HeroImage,
      altImg: "Monte Fuji nevado de noche bajo un cielo estrellado en Japón",
      bgPosition: "70%",
    }];


  return (
    <>
      <Navbar />
      <div>
        {data.map((s) => (
          <Hero
            image={s.image}
            altImg={s.altImg}
            title={s.title}
            text={s.text}
            key={s.id}
            bgPosition={s.bgPosition}
          />
        ))}
      </div>
    </>
  )
})

export default NotFound;




function Hero({ image, altImg, title, text, key, bgPosition = "50%" }) {
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

  const imageSrc = getSrcValue(image);

  return (
    <div className={styles.beneficiosContainerHero}
      style={{
        position: 'relative'
      }}
      key={key}>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={altImg}
          fill
          className={styles.heroImg}
          style={{ objectPosition: bgPosition }}
          priority
        />
      )}
      <div className={styles.contenidoBeneficiosHero}>
        <div className={styles.titlePlusSubtitleHero}>
          <h1 className={styles.styleTitle}>{title}</h1>
          <h2 className={styles.textStyle}>{text}</h2>
          <div className={styles.contenedorSubTitle}>
            <Link href="/">
              <button className={styles.buttonCATcaracteristicas}>
                Volver
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
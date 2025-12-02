import React from 'react'
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

import HeroImage from '../../assets/Itinerarios/monte-fuji-noche-cielo-estrellado-paisaje.webp';
import Navbar from '../../Componentes/Layout/Navbar/Navbar.jsx';


const NotFound = React.memo(function NotFound() {

  const data = [
    { id: "01",
      title: "¡Ups! Esta página decidió tomarse un descanso.",
      text: "El contenido que buscas no se encuentra en este momento.",
      image: HeroImage,
      altImg:"Monte Fuji nevado de noche bajo un cielo estrellado en Japón",
      bgPosition: "70%",
    }];


  return(
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




function Hero({image, altImg, title, text, key, bgPosition = "50%"}){

   return(
    <div className={styles.beneficiosContainerHero} 
        style={{backgroundImage: `url(${image})`, backgroundPosition: {bgPosition}}}
        alt={altImg} key={key}>
      <div className={styles.contenidoBeneficiosHero}>
        <div className={styles.titlePlusSubtitleHero}>         
            <h1 className={styles.styleTitle}>{title}</h1>
            <h2 className={styles.textStyle}>{text}</h2>
          <div className={styles.contenedorSubTitle}>
              <Link to="/">
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
import React from 'react';
import styles from './ItinerariosTemplate.module.css';
import { Link } from 'react-router-dom';



const ItinerariosTemplate = React.memo(function ItinerariosTemplate({data}) {

    return(
        <>
            <TitleContenido />
            {data.map((d, index) => (
                <Card
                    key={index}
                    index={index}
                    title={d.title} 
                    subtitle={d.subtitle}
                    subtitleAltText={d.subtitleAltText}
                    text={d.text} 
                    image={d.image} 
                    altText={d.altText} />))}
        </>
    )}
)

export default ItinerariosTemplate;


function TitleContenido(){


    return(
        <div className={styles.mainContainer}>
            <div className={styles.titleContenidoDividerUno}></div>
                <h2 className={styles.textoDivider}>Descubre tu próximo viaje</h2>
            <div className={styles.titleContenidoDividerDos}></div>
        </div>
    )
}


function Card({ image, index, altText, title, subtitle, text, subtitleAltText}) {

  return (
    <section className={styles.sectionContenedor}>
        <div className={`${index % 2 === 1 ? `${styles.reverse} ${styles.cardContainer}` : `${styles.cardContainer}`}`}>
            <div className={styles.cardText} data-aos={index % 2 === 1 ? 'fade-left' : 'fade-right'} data-aos-delay={10} data-aos-duration="100">
            <div className={styles.cardContenidoStyle}>
                <div style={{marginBottom: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <div className={styles.diaPlusImage}>
                        <div className={styles.contendorAdicional}>
                            <span className={styles.diaStyle}>
                                DÍA
                            </span>
                            <img className={styles.numerosImg} src={subtitle} alt={subtitleAltText} loading='lazy'/>
                        </div>
                        <div className={styles.contenidoDividerCard}></div>
                    </div>
                    <h2 className={styles.cardContainerh2} style={{fontFamily: "nohemi", textTransform: "uppercase"}}>{title}</h2>
                </div>
                <div style={{textAlign: "start", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <p className={styles.cardContainerP} style={{fontFamily: "nohemi"}}>{text}</p>
                    <Link to="/contacto" rel="noopener noreferrer" className={styles.buttonCATcaracteristicas}>
                    Diseña tu viaje ahora
                    </Link>
                </div>
        </div>
        </div>
            <div className={styles.cardImage}>
                <div className={styles.floatingButton}>
                    <p className={styles.floatingText}>{title}</p>
                </div>
                <img src={image} alt={altText} loading="lazy"/>
            </div>
        </div>
    </section>
  );
}


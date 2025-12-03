import React from 'react';
import Image from 'next/image';
import styles from './ItinerariosTemplate.module.css';
import Link from 'next/link';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

// Helper function to extract src from imported images
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


const ItinerariosTemplate = React.memo(function ItinerariosTemplate({ data }) {

    return (
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
    )
}
)

export default ItinerariosTemplate;


function TitleContenido() {


    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleContenidoDividerUno}></div>
            <h2 className={styles.textoDivider}>Descubre tu próximo viaje</h2>
            <div className={styles.titleContenidoDividerDos}></div>
        </div>
    )
}


function Card({ image, index, altText, title, subtitle, text, subtitleAltText }) {
    const imageSrc = getSrcValue(image);
    const subtitleSrc = getSrcValue(subtitle);

    const ref = useScrollAnimation({
        animation: index % 2 === 1 ? 'fade-left' : 'fade-right',
        delay: 10,
        duration: 0.1
    });

    return (
        <section className={styles.sectionContenedor}>
            <div className={`${index % 2 === 1 ? `${styles.reverse} ${styles.cardContainer}` : `${styles.cardContainer}`}`}>
                <div ref={ref} className={styles.cardText}>
                    <div className={styles.cardContenidoStyle}>
                        <div style={{ marginBottom: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                            <div className={styles.diaPlusImage}>
                                <div className={styles.contendorAdicional}>
                                    <span className={styles.diaStyle}>
                                        DÍA
                                    </span>
                                    {subtitleSrc && <Image className={styles.numerosImg} src={subtitleSrc} alt={subtitleAltText} width={50} height={50} loading="lazy" />}
                                </div>
                                <div className={styles.contenidoDividerCard}></div>
                            </div>
                            <h2 className={styles.cardContainerh2} style={{ fontFamily: "nohemi", textTransform: "uppercase" }}>{title}</h2>
                        </div>
                        <div style={{ textAlign: "start", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <p className={styles.cardContainerP} style={{ fontFamily: "nohemi" }}>{text}</p>
                            <Link href="/contacto" rel="noopener noreferrer" className={styles.buttonCATcaracteristicas}>
                                Diseña tu viaje ahora
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.cardImage}>
                    <div className={styles.floatingButton}>
                        <p className={styles.floatingText}>{title}</p>
                    </div>
                    {imageSrc && <Image src={imageSrc} alt={altText} width={600} height={450} loading="lazy" />}
                </div>
            </div>
        </section>
    );
}


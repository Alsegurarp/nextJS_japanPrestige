import React from 'react'
import Image from 'next/image';
import logoPrimero from '../../../assets/world_class_logo.svg';
import logoSegundo from '../../../assets/sophistication_company_logo.svg';
import AnimatedElement from '../../../components/AnimatedElement';

import styles from './TurismoGlobal.module.css'


const TurismoGlobal = React.memo(function TurismoGlobal() {

    const logosLista = [
        {
            id: "1",
            src: logoPrimero,
            alt: "Logo oficial de la Secretaría de Turismo de México, institución encargada de promover el turismo nacional e internacional",
        }, {
            id: "2",
            src: logoSegundo,
            alt: "Logo de Japan National Tourism Organization con el eslogan 'Japan. Endless Discovery.', encargado de promocionar el turismo hacia Japón a nivel internacional",
        }
    ]

    return (
        <section className={styles.sectionConfiarNosotros}>
            <div className={styles.titleContainer}>
                <h2 className={styles.titleStyle}>Aliados con la Élite del Turismo Global</h2>
            </div>

            <div className={styles.containerConfiar}>
                {logosLista.map((card) => (
                    <ConfiarNosotrosCard
                        key={card.id}
                        src={card.src}
                        alt={card.alt}
                        index={card.id} />))}
            </div>
        </section>
    )
})

export default TurismoGlobal;


function ConfiarNosotrosCard({ src, alt, index }) {
    return (
        <>
            <AnimatedElement
                animation="fade-down"
                delay={index * 150}
                duration={1}
            >
                <div className={styles.contenedorCard}>
                    <Image
                        src={src}
                        alt={alt}
                        className={styles.logoStyle}
                        loading='lazy'
                        width={200}
                        height={100}
                    />
                </div>
            </AnimatedElement>
        </>
    )
}

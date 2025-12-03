import React, { useMemo } from 'react'
import logoTurismo from '../../../assets/indexImagenes/turismo_logo.svg';
import logoJapan from '../../../assets/logo-japan.svg';
import logoProfeco from '../../../assets/indexImagenes/profeco_logo.svg';
import styles from './ConfiarEnNosotros.module.css'
import ConfiarNosotrosCard from '../../UI/Cards/ConfiarNosotrosCard.jsx';


const ConfiarNosotros = React.memo(function ConfiarNosotros() {

    // Memoize logosLista array to prevent recreation on each render
    const logosLista = useMemo(() => [
        {
            id: "1",
            src: logoTurismo,
            alt: "Logo oficial de la Secretaría de Turismo de México, institución encargada de promover el turismo nacional e internacional",
            texto: "Contamos con registro oficial y cumplimiento ante las autoridades, brindando confianza y transparencia en cada viaje. No. 4090031414",
        }, {
            id: "2",
            src: logoJapan,
            alt: "Logo de Japan National Tourism Organization con el eslogan 'Japan. Endless Discovery.', encargado de promocionar el turismo hacia Japón a nivel internacional",
            texto: "Con 18 años de trayectoria, somos una agencia mexicana dedicada a crear viajes a Japón con distinción, precisión y atención en cada detalle.",
        }, {
            id: "3",
            src: logoProfeco,
            alt: "Logo de la Procuraduría Federal del Consumidor (Profeco), organismo mexicano que protege los derechos de los consumidores",
            texto: "Acreditados como agencia especializada, garantizamos servicios auténticos y experiencias únicas creadas con altos estándares de calidad. No. 4464-2022",
        }
    ], [])

    return (
        <section className={styles.sectionConfiarNosotros}>
            <div className={styles.titleContainer}>
                <h2 className={styles.titleStyle}>¿Por qué confiar en nosotros?</h2>
            </div>

            <div className={styles.containerConfiar}>
                {logosLista.map((card) => (
                    <ConfiarNosotrosCard
                        key={card.id}
                        src={card.src}
                        alt={card.alt}
                        subtitulo={card.subtitulo}
                        texto={card.texto} />))}
            </div>
        </section>
    )
})

export default ConfiarNosotros;
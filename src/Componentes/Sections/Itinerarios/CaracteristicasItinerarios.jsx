import React from 'react';
import styles from './CaracteristicasItinerarios.module.css';

import CaminoKumano from '../../../assets/Itinerarios/PortadasItinerarios/Camino_Kumano_Portada_Templo_Asakusa_Kannon.webp';
import ViveJapon from '../../../assets/Itinerarios/PortadasItinerarios/Japon_Express_Portada_Japon_Premium_Santuario_Meiji.webp';
import PaqueCerezos from '../../../assets/Itinerarios/PortadasItinerarios/Japon_Increible_Japon_Premium_Puente_Nijubashi_Palacio.webp';
import { Link } from 'react-router-dom';



const CaracteristicasItinerarios = React.memo(function CaracteristicasItinerarios() {
  return (
    <>
        <Cards/>
    </>
  )
});

export default CaracteristicasItinerarios;

function Cards(){
    const infoCards = [
        {
            id: "01",
            title: "El Camino de  Kumano",
            text: "Japón en 15 días: una travesía desde el alma zen hasta el corazón futurista de Tokio.",
            image: CaminoKumano,
            imageAlt: "CaminoKumano con kimono tradicional caminando por las calles de Gion, símbolo de la cultura japonesa"
        },
        {
            id: "02",
            title: "Japón Express",
            text: "Japón en 8 días: en esta visita por Japón, descubrirás castillos y templos. Además, disfrutarás de santuarios y parques sagrados.",
            image: ViveJapon,
            imageAlt: "ViveJapon profesional en hotel de lujo japonés, brindando atención personalizada a turistas internacionales"
        },
        {
            id: "03",
            title: "Japón Increíble",
            text: "Japón en 11 días: recorre las calles de Tokio y visita la zona del Monte Fuji. Contempla bellas cataratas y puentes emblemáticos de Japón.",
            image: PaqueCerezos,
            imageAlt: "Exquisita PaqueCerezos japonesa con platos tradicionales servidos en restaurante de alta gama en Japón"
        },
    ]

    return(
        <>
            <div className={styles.caracteristicasConteinerMain}>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h2 style={{fontFamily: "nohemi", fontSize: "24px", color: "white"}}>Lo más vendido</h2>
                </div>
                <div className={styles.stepsContainerStyle}>
                    {infoCards.map((card, index) => (
                        <Card key={card.id} text={card.text} title={card.title} image={card.image} imageAlt={card.imageAlt} index={index}/>
                    ))}
                </div>
            </div>
        </>
    )
}

function Card(props) {

    const titleEstilo = {
    fontSize: "20px",
    color: "white",
    lineHeight: "1.2",
    fontFamily: "nohemi"
    }

    return(
        <>
            <div className={styles.cardStyle} data-aos="fade-up" data-aos-delay={props.index * 10} data-aos-duration="100">
                <img src={props.image} alt={props.imageAlt} className={styles.cardImage} loading='lazy' />
                <div className={styles.contenidoCardsTextoItinerario}>
                    <h2 style={titleEstilo}>{props.title}</h2>
                    <p className={styles.textoEstilo}>
                        {props.text}
                    </p>
                    <Link to="/contacto" className={styles.buttonCATcaracteristicas}>Solicita tu experiencia</Link>
                </div>
            </div>
        </>
    )
}

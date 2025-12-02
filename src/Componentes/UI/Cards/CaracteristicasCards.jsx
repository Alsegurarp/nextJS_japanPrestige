import React from 'react';
import '../../../App.css';
// ☝️ fonts 

import styles from "./CaracteristicasCards.module.css";


import { Link } from 'react-router-dom';


export default function CaracteristicasCards({infoCards: infoCards}){

    return(
        <>
        <div className={styles.caracteristicasCardsStepsContainerStyle}>
            {infoCards.map((card, index) => (
                <Card key={card.id} text={card.text} image={card.image} imageAlt={card.imageAlt} index={index}/>
            ))}
        </div>
        </>
    )
}

function Card(props) {
    return(
        <div className={styles.caracteristicasCards}>
            <img src={props.image} alt={props.imageAlt} className={styles.caracteristicasCardscardImage} loading='lazy' />
            <div className={styles.caracteristicasCardsTexto}>
                <p className={styles.textoEstilo}>
                    {props.text}
                </p>
                <Link to="/contacto" className={styles.buttonCATcaracteristicas}>
                    Diseña tu viaje
                </Link>
            </div>
        </div>
    )
}


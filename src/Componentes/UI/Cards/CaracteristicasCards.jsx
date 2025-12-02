'use client';
import React from 'react';
import '../../../App.css';
// ☝️ fonts 

import Image from 'next/image';
import styles from "./CaracteristicasCards.module.css";


import Link from 'next/link';


export default function CaracteristicasCards({ infoCards: infoCards }) {

    return (
        <>
            <div className={styles.caracteristicasCardsStepsContainerStyle}>
                {infoCards.map((card, index) => (
                    <Card key={card.id} text={card.text} image={card.image} imageAlt={card.imageAlt} index={index} />
                ))}
            </div>
        </>
    )
}

function Card(props) {
    return (
        <div className={styles.caracteristicasCards}>
            <Image 
                src={props.image} 
                alt={props.imageAlt} 
                className={styles.caracteristicasCardscardImage} 
                width={1080} 
                height={1350} 
                priority={false}
            />
            <div className={styles.caracteristicasCardsTexto}>
                <p className={styles.textoEstilo}>
                    {props.text}
                </p>
                <Link href="/contacto" className={styles.buttonCATcaracteristicas}>
                    Diseña tu viaje
                </Link>
            </div>
        </div>
    )
}


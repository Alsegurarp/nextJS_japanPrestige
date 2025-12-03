'use client';

import React from 'react';
import Image from 'next/image';
import imagen from '../../../../assets/Itinerarios/PortadasItinerarios/El_Ultimo_Samurai_Portada_Cataratas_Shiraito.webp';
import styles from './CardsComponent.module.css';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';


export default function CardsComponent() {

    const infoCards = [
        {
            id: "01",
            text: "La atención no termina con la reserva: acompañamos al viajero antes, durante y después del viaje, con asesoría directa.",
            image: imagen,
            imageAlt: "Geisha con kimono tradicional caminando por las calles de Gion, símbolo de la cultura japonesa"
        },
        {
            id: "02",
            text: "Contamos con alianzas directas con operadores, hoteles, guías certificados y  las mejores experiencias  dentro de Japón.",
            image: imagen,
            imageAlt: "Concierge profesional en hotel de lujo japonés, brindando atención personalizada a turistas internacionales"
        },
        {
            id: "03",
            text: "El detalle lo es todo: desde traslados hasta la selección de restaurantes, cada elemento testeado y optimizado para brindar la mejor experiencia.",
            image: imagen,
            imageAlt: "Exquisita cena japonesa con platos tradicionales servidos en restaurante de alta gama en Japón"
        },
    ]

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
    const ref = useScrollAnimation({
        animation: 'fade-up',
        delay: props.index * 350,
        duration: 0.5
    });

    return (
        <>
            <div ref={ref}>
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
                    <button className={styles.buttonCATcaracteristicas}>Cotiza ahora</button>
                </div>
            </div>
        </>
    )
}




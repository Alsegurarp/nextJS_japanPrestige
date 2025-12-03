'use client';

import React, { useEffect, useState } from 'react';
import { lazy, Suspense } from 'react';
import PreguntaObjeciones from '../../Componentes/UI/Cards/PreguntaObjeciones.jsx';
import '../../styles/home.css';
import styles from './Faqs.module.css';
import LoadingSpinner from '../../Componentes/UI/LoadingSpinner.jsx';
import HeroImage from '../../assets/portadas-nuevas-19-sep/hotelesImg/Nuestras_FAQS_Portada_Japon_Premium.webp';
import LetrasDoradasResponsive from '../../assets/titulosDorados/GRANDEFAQS.svg';
import LetrasDoradasDesktop from '../../assets/titulosDorados/GRANDEFAQS.svg';
import FlyingButton from '../../Componentes/UI/FlyingButtons/FlyingButton.jsx';

const HeroSection = lazy(() => import('../../Componentes/Sections/HeroSection.jsx'));

const data = [
    {
        text: "Prepárate para viajar con total confianza a Japón. En nuestras Preguntas Frecuentes encontrarás respuestas claras sobre requisitos de visa, uso de tarjetas y efectivo, conectividad, enchufes, aduanas, salud, seguros y costumbres locales. Toda la información esencial en un solo lugar para que disfrutes tu experiencia sin preocupaciones y aproveches cada instante en el país del sol naciente.",
        image: HeroImage,
        altImg: "Barca tradicional en un río rodeado de cerezos en flor durante la primavera en Japón",
        bgPosition: "50% 80%",
        letrasDoradasResponsive: LetrasDoradasResponsive,
        LetrasDoradasDesktop: LetrasDoradasDesktop,
    }]


function Faqs() {

    useEffect(() => {
        document.title = "Conoce Japón PREMIUM® | Viajes desde México a Japón";
    }, []);




    return (
        <>
            <FlyingButton />
            <HeroSection data={data} />
            <Suspense fallback={<LoadingSpinner label="Cargando preguntas frecuentes..." />}>
                <RespuestasObjeciones />
            </Suspense>
        </>
    )
}


const RespuestasObjeciones = React.memo(function RespuestasObjeciones() {
    const [openQuestions, setOpenQuestions] = useState([]);

    const FAQs = [
        {
            id: 1,
            pregunta: "¿Necesito visa para entrar a Japón como turista?",
            respuesta: "Los viajeros mexicanos no necesitan tramitar una visa si su estancia es de hasta 90 días por turismo, negocios o visita familiar. Solo necesitas un pasaporte válido y, en algunos casos, tu boleto de salida o confirmaciones de reserva al llegar",
        }, {
            id: 2,
            pregunta: "¿Puedo usar mi tarjeta de crédito con tranquilidad o es mejor llevar efectivo?",
            respuesta: "Aunque Japón ha avanzado en pagos digitales, el efectivo sigue siendo esencial, especialmente en mercados locales, templos o zonas rurales. En zonas urbanas y establecimientos modernos, se aceptan tarjetas Visa y Mastercard con mayor frecuencia",
        }, {
            id: 3,
            pregunta: "¿Cómo me conecto a internet en Japón: eSIM, Pocket Wi-Fi o tarjeta SIM?",
            respuesta: "La conectividad en Japón es fundamental. Puedes optar por una eSIM, ideal por su conveniencia y activación instantánea, o un Pocket Wi-Fi, perfecto para compartir internet entre varios dispositivos. Ambas opciones aseguran conexión rápida y fiable durante toda tu estancia.",
        }, {
            id: 4,
            pregunta: "¿Qué tipo de enchufe y voltaje se utiliza en Japón?",
            respuesta: "Japón utiliza los enchufes de tipo A y B y opera con un voltaje de 100 V (50 Hz en el este 60 Hz en el oeste). Si tus dispositivos no son compatibles, necesitarás un adaptador o, en algunos casos, un convertidor de voltaje.",
        }, {
            id: 5,
            pregunta: "¿Qué productos están prohibidos o restringidos por la aduana en Japón?",
            respuesta: "Japón tiene leyes muy estrictas en aduanas. Medicamentos comunes (como los que contienen pseudoefedrina o codeína) requieren autorización previa. Además, alimentos como frutas, carne o plantas están prohibidos sin certificación fitosanitaria. También debes declarar efectivo por encima de 1 000 000 JPY (~6000 €) y evitar llevar falsificaciones o artículos que infrinjan derechos de autor.",
        }, {
            id: 6,
            pregunta: "¿Hay requisitos de salud o vacunas para viajar a Japón?",
            respuesta: "No se requiere ningún tipo de vacunación obligatoria para ingresar a Japón como turista.",
        }, {
            id: 7,
            pregunta: "¿Necesito seguro médico o de viaje?",
            respuesta: "Si bien no es obligatorio, tener un seguro de viaje o médico es altamente recomendable. Los servicios de salud en Japón son de alta calidad, pero muy costosos para visitantes sin cobertura.",
        },
        {
            id: 8,
            pregunta: "¿La etiqueta y costumbres en Japón son difíciles de seguir sin hablar japonés?",
            respuesta: "Aunque el idioma puede ser una barrera, tecnologías como Google Translate, etiquetado en inglés en zonas turísticas y la presencia de un guía privado pueden facilitar enormemente tu experiencia cultural.",
        }, {
            id: 9,
            pregunta: "¿Debo registrarme en Visit Japan Web antes de viajar?",
            respuesta: "En Japón, los números de emergencia son: \n ● 110: Policía \n ● 119: Bomberos o ambulancia",
        }, {
            id: 10,
            pregunta: "¿Qué número debo marcar en caso de emergencia?",
            respuesta: "Para agilizar trámites migratorios y acceder a beneficios como compras libres de impuestos, se recomienda registrarse en la plataforma Visit Japan Web previo al viaje.",
        }
    ];


    const handleQuestionClick = (questionId) => {
        if (openQuestions.includes(questionId)) {
            setOpenQuestions(openQuestions.filter(id => id !== questionId));
        } else {
            setOpenQuestions([...openQuestions, questionId]);
        }
    };

    return (
        <section className={styles.sectionRespuestasContainer} >
            <div className={styles.containerTitle}>
                <h2 className={styles.titleStyle}>Preguntas frecuentes</h2>
            </div>
            <div className={styles.respuestasContainerStyle} >
                {FAQs.map((f) => (
                    <PreguntaObjeciones
                        key={f.id}
                        question={f.pregunta}
                        answer={f.respuesta}
                        index={f.id}
                        isSelected={openQuestions.includes(f.id)}
                        onQuestionClick={() => handleQuestionClick(f.id)}
                    />
                ))}
            </div>
        </section>
    );
})

export default Faqs;

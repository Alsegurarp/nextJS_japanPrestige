import React, { useState, useMemo } from 'react';
import PreguntaObjeciones from '../../UI/Cards/PreguntaObjeciones.jsx'
import styles from './RespuestaObjeciones.module.css'


const RespuestasObjeciones = React.memo(function RespuestasObjeciones() {
    const [openQuestions, setOpenQuestions] = useState([]);

    // Memoize FAQs array to prevent recreation on each render
    const FAQs = useMemo(() => [
        {
            id: 1,
            pregunta: "¿Es seguro viajar sin hablar japonés?",
            respuesta: "Todos nuestros guías hablan español y cuentas con asistencia en tu idioma durante todo el viaje. No necesitas hablar japonés para disfrutar Japón de forma auténtica, fluida y sin complicaciones.",
        }, {
            id: 2,
            pregunta: "¿Qué diferencia realmente este viaje de otras agencias que también llevan a Japón?",
            respuesta: "Aquí no solo visitas Japón: lo vives a profundidad. Cada itinerario está diseñado para conectar con su esencia, mediante experiencias auténticas, alojamiento premium y atención personalizada desde el primer contacto.",
        }, {
            id: 3,
            pregunta: "¿Por qué confiar en ustedes si hay otras opciones más económicas?",
            respuesta: "Lo que ofrecemos no es solo un viaje, sino una experiencia transformadora, diseñada con precisión, sensibilidad y excelencia. Cada inversión se traduce en calidad, serenidad y momentos que permanecen en la memoria.",
        }, {
            id: 4,
            pregunta: "¿Qué seguridad me ofrecen al viajar tan lejos?",
            respuesta: "Te acompañamos en cada paso, con atención 24/7, aliados locales confiables, información clara y soporte continuo. Nuestros guías están certificados y preparados para cualquier situación, brindándote total tranquilidad.",
        },  {
            id: 5,
            pregunta: "¿Qué incluye exactamente el paquete?",
            respuesta: "Incluye vuelos redondos, traslados internos, alojamiento premium, desayunos, tours guiados, entradas a sitios emblemáticos, atención en español y experiencias culturales. También puedes añadir actividades personalizadas.",
        },  {
            id: 6,
            pregunta: "¿Tienen atención en español durante todo el viaje?",
            respuesta: "Sí. Desde tu primera conversación hasta el último día en Japón, todo el acompañamiento se realiza en español. Asesores, guías y aliados garantizan una comunicación fluida, cercana y sin barreras.",
        }
    ], []);


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

export default RespuestasObjeciones;

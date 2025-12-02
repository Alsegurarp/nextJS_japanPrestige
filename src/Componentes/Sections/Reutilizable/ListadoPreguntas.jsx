import React, { useState } from 'react';
import styles from './ListadoPreguntas.module.css'
import PreguntaObjeciones from '../../UI/Cards/PreguntaObjeciones.jsx';


const ListadoPreguntas = React.memo(function RespuestasObjeciones({faqs}) {
    const [openQuestions, setOpenQuestions] = useState([]);

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
                <h2 className={styles.titleStyle}>Resolvemos tus dudas</h2>
            </div>
            <div className={styles.respuestasContainerStyle} >
                {faqs.map((f) => (
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

export default ListadoPreguntas;
import React from "react";
import flechaPreguntas from '../../../assets/flechaPreguntas.svg';

import styles from "./PreguntaObjeciones.module.css";


export default function PreguntaObjeciones({ question, answer, isSelected, onQuestionClick }) {
        return (
            <div
                onClick={onQuestionClick}
                className={styles.cadaPregunta}>
                    <div className={styles.preguntaHeader}>
                        <span style={{ fontFamily: "nohemi", fontSize: "16px", textTransform: "uppercase" }}>{question}</span>
                        <img src={flechaPreguntas} alt="Flecha" style={{ width: "20px", height: "20px", marginLeft: "10px", transform: isSelected ? "rotate(270deg)" : "rotate(90deg)", transition: "transform 0.3s ease" }} />
                    </div>
                {isSelected && (
                    <>
                        <div style={{marginTop: '20px', marginBottom: '10px',height: '1px', width: 'calc(100% - 20px)', backgroundColor: 'white'}}>
                        </div>
                        <p style={{ fontFamily: "nohemi", fontSize: "14px", fontWeight: "400", color: "white"}}>{answer}
                        </p>
                    </>
                )}
            </div>
        );
    }
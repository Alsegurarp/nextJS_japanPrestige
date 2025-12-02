import React from "react";
import Image from "next/image";
import flechaPreguntas from '../../../assets/flechaPreguntas.svg';

import styles from "./PreguntaObjeciones.module.css";

// Helper to extract src from imported images
const getSrcValue = (img) => {
  if (!img) return null;
  if (typeof img === 'object' && img.src) {
    return img.src;
  }
  if (typeof img === 'string') {
    return img;
  }
  return null;
};

export default function PreguntaObjeciones({ question, answer, isSelected, onQuestionClick }) {
  const arrowSrc = getSrcValue(flechaPreguntas);
  
  return (
    <div
        onClick={onQuestionClick}
        className={styles.cadaPregunta}>
            <div className={styles.preguntaHeader}>
                <span style={{ fontFamily: "nohemi", fontSize: "16px", textTransform: "uppercase" }}>{question}</span>
                {arrowSrc && (
                  <Image 
                    src={arrowSrc} 
                    alt="Flecha" 
                    width={20}
                    height={20}
                    style={{ marginLeft: "10px", transform: isSelected ? "rotate(270deg)" : "rotate(90deg)", transition: "transform 0.3s ease" }} 
                  />
                )}
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
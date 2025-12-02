import React from 'react';
import styles from './ConfiarNosotrosCard.module.css';


export default function ItinerariosCard({number, titulo, id}) {
  return (
    <div className={styles.itinerarioCardStyleContainer} style={{fontFamily: "nohemi", color: "white"}} data-aos="fade-up" data-aos-delay={`${id}00`} >
      <div style={styles.number}>{number}</div>
      <div style={styles.text}>{titulo}</div>
    </div>
  );
};
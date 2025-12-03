import React from 'react';
import styles from './ConfiarNosotrosCard.module.css';
import AnimatedElement from '../../../components/AnimatedElement';


export default function ItinerariosCard({ number, titulo, id }) {
  return (
    <AnimatedElement animation="fade-up" delay={id * 100}>
      <div className={styles.itinerarioCardStyleContainer} style={{ fontFamily: "nohemi", color: "white" }}>
        <div style={styles.number}>{number}</div>
        <div style={styles.text}>{titulo}</div>
      </div>
    </AnimatedElement>
  );
};
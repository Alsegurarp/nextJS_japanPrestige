import React from 'react';
import styles from './ConfiarNosotrosCard.module.css';

import ButtonStandar from '../Buttons/ButtonStandar.jsx'

export default function ConfiarNosotrosCard({src, alt, subtitulo, texto}) {
    return (
    <>
    <div className={styles.contenedorCard}>
        <img 
            src={src} 
            alt={alt} 
            className={styles.logoStyle} 
            loading='lazy' />
            
        <p className={styles.textoStyle}>
        {texto}
        </p>
        
        <p className={styles.subtituloCard} >
        {subtitulo}
        </p>
    </div>
    </>
    )
}

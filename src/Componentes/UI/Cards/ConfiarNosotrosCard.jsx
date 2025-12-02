import React from 'react';
import Image from 'next/image';
import styles from './ConfiarNosotrosCard.module.css';

import ButtonStandar from '../Buttons/ButtonStandar.jsx'

export default function ConfiarNosotrosCard({src, alt, subtitulo, texto}) {
    return (
    <>
    <div className={styles.contenedorCard}>
        <Image
            src={src}
            alt={alt}
            className={styles.logoStyle}
            width={80}
            height={80}
            priority={false}
        />
            
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

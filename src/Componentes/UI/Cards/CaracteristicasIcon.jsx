import React from 'react'
import styles from "./CaracteristicasIcon.module.css";

export default function CaracteristicasIcon({icon, title, index}) {

    return (
        <div className={styles.containerStyle} data-aos="fade-up" data-aos-delay={index * 100} data-aos-duration="100">
            <div style={{marginBottom: "10px"}}>
                <img src={icon} alt={title} key={title} className={styles.iconStyle} loading='lazy'/>
            </div>
            <p className={styles.titleStyle}>{title}</p>
        </div>
    )
}
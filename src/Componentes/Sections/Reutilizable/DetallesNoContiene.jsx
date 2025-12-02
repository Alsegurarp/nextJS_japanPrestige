import React from "react";
import styles from './detallesNoContiene.module.css';


export default function DetallesNoContiene({icon, title, index}) {

        return (
        <div className={styles.containerStyle} data-aos="fade-up" data-aos-delay={index * 10} data-aos-duration="100">
            <div style={{marginBottom: "10px"}}>
                <img src={icon} alt={title} key={title} className={styles.iconStyle} loading='lazy'/>
            </div>
            <p className={styles.titleStyle}>{title}</p>
        </div>
    );
}





          
import React from 'react'
import styles from './NoNavegaSection.module.css';

import CardNoNavega from './CardNoNavega.jsx';


function NoNavegaSection({destinations}) {
    return (
    <>
    <section className={styles.section}>
        <div className={styles.titleRow}>
            <div className={styles.divider} />
                <h2 className={styles.title}>{destinations.titulo}</h2>
            <div className={styles.divider} />
        </div>
    
    <div className={styles.destinationsGrid}>
            {destinations.card.map((destination, index) => (
                <CardNoNavega
                key={index}
                title={destination.title}
                image={destination.image}
                description={destination.description}
                style={{ animationDelay: `${index * 0.1}s` }}
                />
            ))}
            </div>
            </section>
    </>
    );
}

export default NoNavegaSection

import React from 'react';
import styles from './TripDetails.module.css';

const TripDetails = ({Travelinfo}) => {


  return (
    <section className={styles.container}>
      {Travelinfo.map((section, i) => (
        <article className={styles.card} key={i} data-aos="fade-up" data-aos-offset="10" data-aos-delay={`${1+i}0`}>
          <div className={styles.inner}>
            <div className={styles.header}>
              <h3>{section.title}</h3>
            </div>
            <div className={styles.divider}/>
            <div className={styles.content}>
              <ul className={styles.contenedorInformacion}>
                {section.description.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default TripDetails;
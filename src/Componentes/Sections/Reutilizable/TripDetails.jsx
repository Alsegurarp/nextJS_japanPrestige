import React from 'react';
import styles from './TripDetails.module.css';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';

const TripDetails = ({ Travelinfo }) => {
  return (
    <section className={styles.container}>
      {Travelinfo.map((section, i) => (
        <TripDetailsCard key={i} section={section} index={i} />
      ))}
    </section>
  );
};

function TripDetailsCard({ section, index }) {
  const ref = useScrollAnimation({
    animation: 'fade-up',
    offset: 10,
    delay: (1 + index) * 10
  });

  return (
    <article ref={ref} className={styles.card}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h3>{section.title}</h3>
        </div>
        <div className={styles.divider} />
        <div className={styles.content}>
          <ul className={styles.contenedorInformacion}>
            {section.description.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default TripDetails;
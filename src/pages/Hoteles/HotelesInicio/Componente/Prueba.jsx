import React from 'react';
import styles from './Prueba.module.css';

import CardPrueba from './CardPrueba.jsx';


function Prueba({destinations}) {
  return (
    <>
    <div className={styles.destinationsGrid}>
            {destinations.map((destination, index) => (
              <CardPrueba
                to={destination.to}
                key={destination.title}
                title={destination.title}
                image={destination.image}
                description={destination.description}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
  </>
  );
}

export default Prueba


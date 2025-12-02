import React from 'react';
import styles from './ButtonStandar.module.css'

export default function ButtonStandar({texto = "visualiza"}) {
  return (
    <>
        <button className={styles.buttonStyle}>
            {texto}
        </button>
    </>
  )
}
// CardPrecio.jsx
import React from 'react';
import styles from './CardPrecioPrueba.module.css';
import Link from 'next/link';

export default function CardPrecio({ title, prices }) {
  return (
    <section className={styles.section}>
      <div className={styles.titleRow}>
        <div className={styles.divider} />
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.divider} />
      </div>



      <div className={styles.cardsRow}>
        {prices.map((p, i) => (
          <div className={styles.card} key={`${p.type}-${p.category}-${i}`}>
            <div className={styles.cardTop}>
              <div className={styles.badgeWrap}>
                <div className={styles.badgeText}>
                  {p.type} {p.category}
                </div>
              </div>
              <div className={styles.currencyBadge}>
                <div className={styles.currencyText}>US DOLLAR</div>
              </div>
            </div>

            <div className={styles.priceRow}>
              <div className={styles.priceText}>
                <span className={styles.priceAmount}>${p.amount}</span>
                <span className={styles.priceUnit}>USD</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link className={styles.buttonCATcaracteristicas} href="/contacto">
        ¡Cotiza Ahora!
      </Link>
    </section>
  );
}

import React from "react";
import styles from "./CardPrecio.module.css";


const CardPrecio = React.memo(function CardPrecio({ data }) {

    return(
        <>
        <section className={styles.page}>
            {data.map((d,i) => (
                <div key={i} className={styles.card}>
                    <h2 className={styles.title}>{d.title}</h2>
                    <div className={styles.grid}>
                        {d.prices.map((priceUnit, index) => (
                            <PriceCell key={index} props={priceUnit} />
                        ))}
                    </div>
                </div>
            ))}
        </section>
        </>
    )
});

export default CardPrecio;


const PriceCell = React.memo(function PriceCell({ props }) {
    const { type, category, amount } = props;
    return (
        <div className={styles.cell}>
            <div className={styles.label}>{type}</div>
            <div className={styles.sublabel}>{category}</div>
            <div className={styles.priceUnit}>${" "}{amount} USD</div>
            
        </div>
    )
});

import React from 'react';
import HeroSection from '../../../../Componentes/Sections/HeroSection.jsx';
import Image from 'next/image';
import styles from './FormaPago.module.css';

import HeroImage from '../../../../assets/ImagenesBlogs/PortadasHero/Blog_Efectivo_Tarjeta_Mejor_Forma_Pagar_Japon_Premium.webp';
import LetrasDoradasResponsive from '../../../../assets/titulosBlogs/efectivotarjetaMOVIL.svg';
import LetrasDoradasDesktop from '../../../../assets/titulosBlogs/efectivotarjetaWEB.svg';

import imagen1 from '../../../../assets/ImagenesBlogs/FormaPago/Efectivo_Tarjeta_Japon_Premium_Balance_Ideal_Combinacion_Inteligente.webp';
import imagen2 from '../../../../assets/ImagenesBlogs/FormaPago/Efectivo_Tarjeta_Japon_Premium_Indispensable_Yenes.webp';
import imagen3 from '../../../../assets/ImagenesBlogs/FormaPago/Efectivo_Tarjeta_Japon_Premium_Pagar_Ventajas.webp';
import FlyingButton from '../../../../Componentes/UI/FlyingButtons/FlyingButton.jsx';

const Herodata = [
{
    text: "Explorar Japón en solitario es una invitación al descubrimiento y la introspección. En Japón  PREMIUM, sabemos que la verdadera aventura comienza cuando la seguridad deja de ser  una preocupación. Por eso, aquí te explicamos por qué viajar solo a Japón es no solo  posible, sino extraordinariamente tranquilo.",
    image: HeroImage,
    altImg:"Vista frontal del Templo Yasukuni en Tokio, Japón, con cielo nublado al atardecer.",
    letrasDoradasResponsive: LetrasDoradasResponsive,
    LetrasDoradasDesktop: LetrasDoradasDesktop, 
}];

const data = [
    {
        title: '¿El efectivo sigue siendo indispensable?',
        subtitle: 'PAGOS EN JAPÓN',
        dias: 'CASH STILL KING · ATMs CONVENIENTES',
        text: {
            primerParrafo: 'A pesar de los avances tecnológicos, Japón no es totalmente cashless: en zonas rurales, templos y mercados locales, el efectivo sigue siendo clave (en muchos lugares es la única opción). Los cajeros automáticos para extranjer@s funcionan mejor en 7-Eleven y oficinas postales (JP Yucho), y suelen aceptar tarjetas internacionales (Visa, Mastercard, UnionPay, etc.).',
            segundoParrafo: 'En grandes ciudades, centros comerciales, hoteles y cadenas modernas, las tarjetas son ampliamente aceptadas (sobre todo Visa y Mastercard; AmEx, JCB y Discover con aceptación algo menor). Es cómodo y seguro, pero intenta evitar la Conversión Dinámica de Divisas (DCC) y paga siempre en moneda local. Banca digital y tarjetas “viajeras” con buenas comisiones internacionales son recomendables.',
            tercerParrafo: 'La mayoría de viajer@s coinciden: lleva una mezcla de efectivo y tarjeta. Usa una tarjeta IC recargable (Suica o PASMO) para transporte y compras pequeñas; retira efectivo en menos ocasiones pero por montos algo mayores para reducir comisiones bancarias. En JAPÓN PREMIUM® ajustamos el mix a tu itinerario: cuánto efectivo, qué tarjetas internacionales llevar y dónde recargar.'
        },
        image: imagen1,
        altText:
        'Cliente pagando en efectivo en una tienda japonesa.'
    },
    {
        title: '¿Qué ventajas tiene pagar con tarjeta?',
        subtitle: 'CIUDADES Y CADENAS MODERNAS',
        dias: 'VISA/MASTERCARD · EVITA DCC',
        text: {
            primerParrafo: 'A pesar de los avances tecnológicos, Japón no es totalmente cashless: en zonas rurales, templos y mercados locales, el efectivo sigue siendo clave (en muchos lugares es la única opción). Los cajeros automáticos para extranjer@s funcionan mejor en 7-Eleven y oficinas postales (JP Yucho), y suelen aceptar tarjetas internacionales (Visa, Mastercard, UnionPay, etc.).',
            segundoParrafo: 'En grandes ciudades, centros comerciales, hoteles y cadenas modernas, las tarjetas son ampliamente aceptadas (sobre todo Visa y Mastercard; AmEx, JCB y Discover con aceptación algo menor). Es cómodo y seguro, pero intenta evitar la Conversión Dinámica de Divisas (DCC) y paga siempre en moneda local. Banca digital y tarjetas “viajeras” con buenas comisiones internacionales son recomendables.',
            tercerParrafo: 'La mayoría de viajer@s coinciden: lleva una mezcla de efectivo y tarjeta. Usa una tarjeta IC recargable (Suica o PASMO) para transporte y compras pequeñas; retira efectivo en menos ocasiones pero por montos algo mayores para reducir comisiones bancarias. En JAPÓN PREMIUM® ajustamos el mix a tu itinerario: cuánto efectivo, qué tarjetas internacionales llevar y dónde recargar.'
        },
        image: imagen2,
        altText:
        'Pago con tarjeta en un restaurante japonés moderno.'
    },
    {
        title: 'El balance ideal: una combinación inteligente',
        subtitle: 'MEZCLA EFECTIVO + TARJETA',
        dias: 'IC CARDS · MENOS COMISIONES',
        text: {
            primerParrafo: 'A pesar de los avances tecnológicos, Japón no es totalmente cashless: en zonas rurales, templos y mercados locales, el efectivo sigue siendo clave (en muchos lugares es la única opción). Los cajeros automáticos para extranjer@s funcionan mejor en 7-Eleven y oficinas postales (JP Yucho), y suelen aceptar tarjetas internacionales (Visa, Mastercard, UnionPay, etc.).',
            segundoParrafo: 'En grandes ciudades, centros comerciales, hoteles y cadenas modernas, las tarjetas son ampliamente aceptadas (sobre todo Visa y Mastercard; AmEx, JCB y Discover con aceptación algo menor). Es cómodo y seguro, pero intenta evitar la Conversión Dinámica de Divisas (DCC) y paga siempre en moneda local. Banca digital y tarjetas “viajeras” con buenas comisiones internacionales son recomendables.',
            tercerParrafo: 'La mayoría de viajer@s coinciden: lleva una mezcla de efectivo y tarjeta. Usa una tarjeta IC recargable (Suica o PASMO) para transporte y compras pequeñas; retira efectivo en menos ocasiones pero por montos algo mayores para reducir comisiones bancarias. En JAPÓN PREMIUM® ajustamos el mix a tu itinerario: cuánto efectivo, qué tarjetas internacionales llevar y dónde recargar.'
        },
        image: imagen3,
        altText:
        'Pareja comprando en una calle comercial japonesa, combinando efectivo y tarjeta.'
    }
]


function FormaPago() {

      return (
    <>
    <FlyingButton/>
    <HeroSection data={Herodata} />
      {data.map((d, index) => (
        <Card
          key={d.title}
          index={index}
          title={d.title}
          subtitle={d.subtitle}
          dias={d.dias}
          text={d.text}
          image={d.image}
          altText={d.altText}
        />
      ))}
    </>
  );
}

export default FormaPago

function Card({ image, index, altText, title, subtitle, dias, text}) {


  return (
    <div className={`${index % 2 === 1 ? `${styles.reverse} ${styles.card_container}` : `${styles.card_container}`}`}>
        <div className={styles.card_text} data-aos={index % 2 === 1 ? 'fade-left' : 'fade-right'} data-aos-delay={index * 200} data-aos-duration="1000">
          <div className={styles.cardContenidoStyle}>
            <div style={{marginBottom: "10px", display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
              <h2 className={styles.cardContainerh2} style={{fontFamily: "nohemi", textTransform: "uppercase"}}>{title}</h2>
              <span style={{fontFamily: "nohemi", textTransform: "uppercase", fontWeight: "400"}}>{subtitle}</span>
            </div>
              <div style={{textAlign: "start"}}>
                <span style={{fontFamily: "nohemi", textTransform: "uppercase"}}>{dias}</span>
                <p className={styles.cardContainerP} style={{fontFamily: "nohemi"}}>{text.primerParrafo}</p>
                  <br/>
                <p className={styles.cardContainerP} style={{fontFamily: "nohemi"}}>{text.segundoParrafo}</p>
                  <br/>
                <p className={styles.cardContainerP} style={{fontFamily: "nohemi"}}>{text.tercerParrafo}</p>
              </div>
     </div>
      </div>
      <div className={styles.card_image}>
          <Image src={image} alt={altText} loading="lazy" width={600} height={400} priority={false}/>
        </div>
    </div>
  );
}

import React from "react";
import styles from "./AvisoPrivacidad.module.css";

const AvisoPrivacidad = () => {
  return (
    <section className={styles.wrap} aria-labelledby="pp-title">
      <div className={styles.inner}>
        <h1 id="pp-title" className={styles.title}>
          POLÍTICA DE PRIVACIDAD
        </h1>

        <p className={styles.p}>
          Por medio del presente AVISO DE PRIVACIDAD se hace del conocimiento al público en general
          que <strong>JAPÓN PREMIUM®</strong> es una persona moral legalmente constituida, teniendo su
          domicilio en calle Omega, número 306, colonia Romero de Terreros, alcaldía Coyoacán,
          Ciudad de México, C.P. 04310.
        </p>

        <p className={styles.p}>
          <strong>JAPÓN PREMIUM®</strong> es el responsable del tratamiento de los datos personales
          recabados del público en general que accede a través de sus páginas de internet y redes
          sociales, el público en general acepta que <strong>JAPÓN PREMIUM®</strong> almacene y
          conserve sus datos personales.
        </p>

        <h2 className={styles.h2}>COMPROMISO CON LA PRIVACIDAD.</h2>
        <p className={styles.p}>
          En <strong>JAPÓN PREMIUM®</strong> estamos comprometidos a implementar la más estricta
          privacidad del público en general. El responsable de recabar y dar tratamiento a los datos
          personales pone a disposición del público en general los siguientes medios de contacto:
          domicilio ubicado en calle Omega, número 306, colonia Romero de Terreros, alcaldía
          Coyoacán, Ciudad de México, C.P. 04310, y el correo electrónico{" "}
          <a className={styles.link} href="mailto:legal@viajespremium.com.mx">
            legal@viajespremium.com.mx
          </a>.
        </p>

        <h2 className={styles.h2}>TRATAMIENTO DE LOS DATOS PERSONALES.</h2>
        <p className={styles.p}>
          <strong>JAPÓN PREMIUM®</strong> da tratamiento a los datos personales que le son
          proporcionados por los titulares, para llevar a cabo los siguientes objetivos:
        </p>

        <ul className={styles.list}>
          <li>
            La recepción, almacenamiento y protección de los datos personales que se lleva a cabo
            conforme a lo establecido en los artículos 7 y 8 de la Ley Federal de Protección de Datos
            Personales en Posesión de los Particulares (en lo subsecuente denominada “la Ley”).
          </li>
          <li>
            Los datos personales no serán revelados, en consecuencia, no son transferidos, vendidos,
            arrendados ni divulgados a terceros personas ajenas que no tengan relación comercial,
            conforme a lo establecido en el artículo 36 de la Ley.
          </li>
          <li>
            La recolección de datos personales es indispensable para llevar a cabo la prestación de
            los servicios que se ofrecen.
          </li>
          <li>
            El envío de material de publicidad, envío de promociones, prospección comercial, oferta
            de productos y/o servicios.
          </li>
        </ul>

        <h2 className={styles.h2}>MEDIOS PARA EJERCER LOS DERECHOS ARCO.</h2>
        <p className={styles.p}>
          Los titulares de los datos personales en todo momento pueden ejercer sus derechos ARCO, a
          través de un escrito libre, presentado en el domicilio ubicado en calle Omega, número 306,
          colonia Romero de Terreros, alcaldía Coyoacán, Ciudad de México, C.P. 04310, o bien, al
          correo electrónico{" "}
          <a className={styles.link} href="mailto:legal@viajespremium.com.mx">
            legal@viajespremium.com.mx
          </a>{" "}
          de acuerdo a la solicitud presentada, conforme a lo establecido en el artículo 28 de la Ley.
        </p>

        <h2 className={styles.h2}>USO DE TECNOLOGÍAS</h2>
        <p className={styles.p}>
          <strong>JAPÓN PREMIUM®</strong> hace uso de múltiples tecnologías de seguimiento con el
          objetivo de mejorar la experiencia en sus servicios. Algunas de las tecnologías que se
          emplean son las cookies, el uso de web beacons en conjunto con otras tecnologías de
          seguimiento y dispositivos de terceros de apoyo, propios y de terceros.
        </p>

        <h2 className={styles.h2}>MODIFICACIONES EN EL AVISO DE PRIVACIDAD.</h2>
        <p className={styles.p}>
          <strong>JAPÓN PREMIUM®</strong> siempre se compromete con el cuidado de los datos
          personales, podrá llevar a cabo modificaciones, cambios o actualizaciones por cambios en
          las funciones que se realicen a la ley.
        </p>

        <p className={styles.p}>
          <strong>JAPÓN PREMIUM®</strong> se compromete con el público en general a mantenerlos
          permanentemente informados sobre los cambios que se realicen al presente AVISO DE
          PRIVACIDAD, a través de la página de internet{" "}
          <a
            className={styles.link}
            href="https://japonpremium.com/aviso-privacidad.php"
            target="_blank"
            rel="noreferrer"
          >
            https://japonpremium.com/aviso-privacidad.php
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default AvisoPrivacidad;

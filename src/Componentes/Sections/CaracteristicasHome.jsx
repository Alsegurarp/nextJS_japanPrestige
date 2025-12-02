import React, { useMemo } from 'react';
import '../../styles/sectionStyles.css';

import '../../App.css';
// ☝️ fonts 

import CelularIcon from '../../assets/indexImagenes/atencion_icono.svg';
import guiaIcon from '../../assets/indexImagenes/guias_icono.svg';
import estrellitaIcon from '../../assets/indexImagenes/excelencia_icono.svg';
import avionIcon from '../../assets/indexImagenes/traslado_icono.svg';

import CaracteristicasIcon from '../UI/Cards/CaracteristicasIcon';
import CaracteristicasCards from '../UI/Cards/CaracteristicasCards';
import { Link } from 'react-router-dom';

    import Geisha from '../../assets/indexImagenes/atencion_24_horas.webp';
    import Concierge from '../../assets/indexImagenes/alianzas_japon_premium.webp';
    import Cena from '../../assets/indexImagenes/experiencias_autenticas.webp';


const NoEsSoloUnViaje = React.memo(function NoEsSoloUnViaje(){

    return(
        <div style={{display: "flex",
            flexDirection: "column",
            paddingBottom: "50px",
            alignItems: "center"}}>
            <p className='textoHeroAcompana'>
                No es solo un viaje. Es Japón PREMIUM®: un encuentro con la belleza, la calma y el asombro. Cada paso revela lo extraordinario en ti y en el camino.
            </p>
            <Link className='buttonCATcaracteristicas' to="/contacto">
                Diseña tu viaje
            </Link>
        </div>
    )
})


const CaracteristicasHome = React.memo(function CaracteristicasHome() {

    // Memoize lista array to prevent recreation on each render
    const lista = useMemo(() => [
        {id: "01",
        icon: CelularIcon,
        title: "Asistencia total en cada instante",
        },
        {id: "02",
        icon: estrellitaIcon,
        title: "Dos décadas perfeccionando Japón",
        },
        {id: "03",
        icon: avionIcon,
        title: "Viajes a Japón con firma distintiva",
        },
        {id: "04",
        icon: guiaIcon,
        title: "Guías con alma, arte y precisión",
        }
    ], []);

    // Memoize infoCards array to prevent recreation on each render
    const infoCards = useMemo(() => [
            {
                id: "01",
                text: "Te acompañamos antes, durante y después de tu viaje. Asesoría experta para tu viaje a Japón desde México.",
                image: Geisha,
                imageAlt: "Geisha con kimono tradicional caminando por las calles de Gion, símbolo de la cultura japonesa"
            },
            {
                id: "02",
                text: "Creamos tours a Japón con aliados de confianza: guías locales y hoteles, vive experiencias auténticas y seguras.",
                image: Concierge,
                imageAlt: "Concierge profesional en hotel de lujo japonés, brindando atención personalizada a turistas internacionales"
            },
            {
                id: "03",
                text: "Cada paquete a Japón cuida los detalles: traslados, gastronomía y actividades de lujo, con la perfección que mereces.",
                image: Cena,
                imageAlt: "Exquisita cena japonesa con platos tradicionales servidos en restaurante de alta gama en Japón"
            },
        ], []);

    // Memoize style objects to prevent recreation on each render
    const sectionStyle = useMemo(() => ({
        backgroundColor: '#111',
        padding: '10px 20px',
        color: 'white',
        marginBottom: "40px"
    }), []);

    const headingStyle = useMemo(() => ({
        textAlign: 'center',
        fontSize: '24px',
        color: '#ffffff',
        fontFamily: "nohemi"
    }), []);

  return (
        <section style={sectionStyle}>
            <NoEsSoloUnViaje />
            <p style={headingStyle}>¿Qué hace incomparable tu viaje con nosotros?</p>
                <div className="stepsContainerStyle">
                    {lista.map((l, index) => <CaracteristicasIcon key={l.id} icon={l.icon} title={l.title} index={index}/>)}
                </div>
            <CaracteristicasCards infoCards={infoCards} />
        </section>
  )
})

export default CaracteristicasHome;

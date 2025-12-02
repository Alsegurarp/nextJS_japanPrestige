import React, {lazy} from "react";
import styles from './PaquetesIncluyen.module.css';
import actividadesViajes from '../../../assets/icono-tours-actividades-viajes.svg'
import alojamientoTuristico from '../../../assets/icono-hotel-alojamiento-turistico.svg'
import transporteTuristico from '../../../assets/icono-traslados-transporte-turistico.svg'
import alimentosGastronomia from '../../../assets/icono-alimentos-gastronomia.svg'

const HotelesPremiumCard = lazy(() => import ('../../UI/Cards/HotelesPremiumCard'));

/*
import HotelesPremiumCard from "../../UI/Cards/HotelesPremiumCard";
*/

const PaquetesIncluyen = React.memo(function PaquetesIncluyen() {

    const lista = [
        {id: "01",
        icon: alojamientoTuristico,
        title: "Hoteles Premium",
        text: "Estancias en alojamientos de alta gama, seleccionados por su excelencia, confort y ubicación privilegiada.",
        },
        {id: "02",
        icon: actividadesViajes,
        title: "City Tours Premium",
        text: "Recorre Japón con guías expertos, en experiencias exclusivas, culturales y auténticas.",
        },
        {id: "03",
        icon: alimentosGastronomia,
        title: "Alimentos Tipo Buffet",
        text: "Degusta una cuidada selección de platillos locales e internacionales en buffets de calidad superior.",
        },
        {id: "04",
        icon: transporteTuristico,
        title: "Traslados Premium",
        text: "Viaja con comodidad y puntualidad en transportes privados o de lujo, siempre con atención personalizada.",
        }
    ]
  
  return (
    <>
        <section className={styles.sectionStyle}>
            <p className={styles.headingStyle}>Los Paquetes de Viaje a Japón Incluyen:</p>
                <div className={styles.stepsContainerStyleItinerario}>
                    {lista.map((l) => 
                        <HotelesPremiumCard 
                            key={l.id} 
                            icon={l.icon} 
                            title={l.title} 
                            text={l.text} 
                            fade={"fade-up"} />
                    )}
                </div>
        </section>
    </>
  )
});



export default PaquetesIncluyen;
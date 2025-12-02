import React, {useState, useEffect} from 'react';
import styles from './FlyingButton.module.css'; 
import IconWA from '../../../assets/icono-whatsapp.svg';
import ViajesImg from '../../../assets/wa_chat/perfil_whatsapp.webp';
import WaConversation from '../../../assets/wa_chat/whatsapp_conversacion.svg';
import waAlargado from '../../../assets/wa_chat/chatea_con_nuestra_asistente_verde.svg';
import buttonEnviar from '../../../assets/wa_chat/icono_enviar_whatsapp.svg'


import bgWhatsapp from '../../../assets/bgWhatsapp.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function FlyingButton({positionTop = '20px'}) {
  const [clicked, setClicked] = useState(false);
  const [isClosing, setIsClosing] = useState(false);


  function handleClick(){
    if(clicked){
          setIsClosing(true);
          setTimeout(() => {
            setClicked(false); // desmontar modal
            setIsClosing(false); // resetear estado
          }, 300)
      } else {
      setClicked(true); // mostrar modal directamente
      }
    }

      useEffect(() => {
      AOS.init({
        duration: 1000, // duración de animaciones
        once: false      // Se anima en loop
      });
    }, []);


  return(
    <>
    <FloatingButton onClick={handleClick} positionTop={positionTop} />
      {clicked && <FormWhatsapp onClick={handleClick} isClosing={isClosing} />}
    </>
  );
}



function FloatingButton({onClick, positionTop}){
  const [isMobile, setIsMobile] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const bottomPosition = isMobile ? '20px' : positionTop;


  return(
    <button className={styles.flying_button} onClick={onClick} style={{bottom: bottomPosition}}>
      <img src={waAlargado} style={{display: "flex", maxWidth: "140px"}} alt="Ir al inicio" />
    </button>
  )
}

function FormWhatsapp({ onClick, isClosing }) {
  const [nombreCliente, setNombreCliente] = useState('');

  const handleSubmitName = () => {
    const trimmed = nombreCliente.trim();
    if (!trimmed) return;
    
    // Create message with the input name and send directly to WhatsApp
    const mensaje = `Hola, soy ${trimmed} 😊 Me encantaría saber más sobre las experiencias de Japón Premium 🇯🇵`;
    const whatsappUrl = `https://wa.me/+525572176696?text=${encodeURIComponent(mensaje)}`;
    
    // Open WhatsApp directly
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Close the modal
    onClick();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmitName();
    }
  };

  return (
    <div
      className={`${styles.wa_modal} ${isClosing ? styles.fade_out : ''}`}
      data-aos={!isClosing ? 'fade-up' : ''}
    >
      <div className={styles.wa_header}>
        <img src={ViajesImg} alt="Soporte" className={styles.wa_avatar} />
        <div className={styles.wa_info}>
          <strong>Japón Premium</strong>
          <p>Descubre Japón en un nivel superior</p>
        </div>
        <button className={styles.wa_close} onClick={onClick}>×</button>
      </div>

      <div className={styles.wa_body}>
        <img
          src={bgWhatsapp}
          alt="Fondo de conversación WhatsApp"
          className={styles.wa_body_bg}
          loading="lazy"
        />

        {/* Agent bubble */}
        <div className={styles.wa_bubble}>
          <img src={WaConversation} alt='Soy anahi, tu asistente virtual, como te llamas?'/>
        </div>

        {/* Input area */}
        <div className={styles.wa_input_row}>
          <input
            type="text"
            placeholder="Escribe tu nombre…"
            value={nombreCliente}
            onChange={(e) => setNombreCliente(e.target.value)}
            onKeyDown={handleKeyDown}
            className={styles.wa_input}
          />
          <button
            className={styles.wa_send}
            onClick={handleSubmitName}
            disabled={!nombreCliente.trim()}
            aria-label="Enviar mensaje a WhatsApp"
            title="Enviar a WhatsApp"
          >
            <img src={buttonEnviar} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

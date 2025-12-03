'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './FlyingCotiza.module.css';
import IconWA from '../../../assets/icono-whatsapp.svg';
import ViajesImg from '../../../assets/soporteWhatsapp.webp';

import bgWhatsapp from '../../../assets/bgWhatsapp.webp';

// Helper to extract src from imported images
const getSrcValue = (img) => {
  if (!img) return null;
  if (typeof img === 'object' && img.src) {
    return img.src;
  }
  if (typeof img === 'string') {
    return img;
  }
  return null;
};



export default function FlyingButton() {
  const [clicked, setClicked] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function handleClick() {
    if (clicked) {
      setIsClosing(true);
      setTimeout(() => {
        setClicked(false); // desmontar modal
        setIsClosing(false); // resetear estado
      }, 300)
    } else {
      setClicked(true); // mostrar modal directamente
    }
  }




  return (
    <>
      <FloatingButton onClick={handleClick} />
      {clicked && <FormWhatsapp onClick={handleClick} isClosing={isClosing} />}
    </>
  );
}



function FloatingButton({ onClick }) {
  const waIconSrc = getSrcValue(IconWA);

  return (
    <button className={styles.flying_button} onClick={onClick} >
      {waIconSrc && <Image src={waIconSrc} width={30} height={30} alt="WhatsApp" />}
      {/*<h4>Quiero un descuento</h4>*/}
    </button>
  )
}

function FormWhatsapp({ onClick, isClosing }) {
  const [nombreCliente, setNombreCliente] = useState('');
  const viajesSrc = getSrcValue(ViajesImg);
  const bgSrc = getSrcValue(bgWhatsapp);

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
    >
      <div className={styles.wa_header}>
        {viajesSrc && <Image src={viajesSrc} alt="Soporte" width={40} height={40} className={styles.wa_avatar} />}
        <div className={styles.wa_info}>
          <strong>Japón Premium</strong>
          <p>Descubre Japón en un nivel superior</p>
        </div>
        <button className={styles.wa_close} onClick={onClick}>×</button>
      </div>

      <div className={styles.wa_body}>
        {bgSrc && <Image
          src={bgSrc}
          alt="Fondo de conversación WhatsApp"
          className={styles.wa_body_bg}
          width={400}
          height={300}
        />}

        {/* Agent bubble */}
        {typeof WaConversation !== 'undefined' && (
          <div className={styles.wa_bubble}>
            <img src={WaConversation} alt='Soy anahi, tu asistente virtual, como te llamas?' />
          </div>
        )}

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
            {typeof buttonEnviar !== 'undefined' && <img src={buttonEnviar} alt="" />}
          </button>
        </div>
      </div>
    </div>
  );
}


'use client';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './MenuOpen.css';
import Link from 'next/link';
import { prefetchOnVisible } from '../../../utils/routePrefetching.js';


const menuData = [
  {
    id: 1,
    name: 'Itinerarios',
    isLink: true,
    path: '/itinerarios',
    submenu: {
      esenciales: [
        { id: '1', name: '8 Días - Japón Express', isBold: false, isLink: true, path: '/itinerarios/japon-express' },
        { id: '2', name: '10 Días - Titanes del Pacífico', isBold: false, isLink: true, path: '/itinerarios/titanes-del-pacifico' },
        { id: '3', name: '11 Días - Japón Increíble', isBold: false, isLink: true, path: '/itinerarios/japon-increible' },
        { id: '4', name: '11 Días - Art Oriental', isBold: false, isLink: true, path: '/itinerarios/art-oriental' },
        { id: '5', name: '11 Días - Japón y El Origen del Sol', isBold: false, isLink: true, path: '/itinerarios/origen-del-sol' },
        { id: '6', name: '12 Días - Imperio Del Sol Naciente', isBold: false, isLink: true, path: '/itinerarios/imperio-del-sol' },
        { id: '7', name: '17 Días - El Último Samurái', isBold: false, isLink: true, path: '/itinerarios/ultimo-samurai' },
      ],
      tradicionales: [
        { id: '8', name: '8 Días - Imperio Japonés', isBold: false, isLink: true, path: '/itinerarios/imperio-japones' },
        { id: '9', name: '15 Días - El Camino De Kumano', isBold: false, isLink: true, path: '/itinerarios/camino-de-kumano' },
      ],
      combinados: [
        { id: '10', name: '12 Días - Japón Y Dubái Maravilloso', isBold: false, isLink: true, path: '/itinerarios/japon-y-dubai-maravilloso' },
        { id: '11', name: '13 Días - Japón Y Corea del Sur', isBold: false, isLink: true, path: '/itinerarios/japon-corea-del-sur' },
        { id: '12', name: '14 Días - Seúl a Tokio', isBold: false, isLink: true, path: '/itinerarios/seul-a-tokio' },
        { id: '13', name: '15 Días - Japón y Tailandia: Joyas del Oriente', isBold: false, isLink: true, path: '/itinerarios/japon-y-tailandia-joyas-lejano-oriente' },
        { id: '14', name: '15 Días - China y Japón', isBold: false, isLink: true, path: '/itinerarios/samurais-y-shaolines' },
        { id: '15', name: '15 Días - Japón Y Dubái Total: Del Zen al lujo', isBold: false, isLink: true, path: '/itinerarios/japon-y-dubai-total' },
        { id: '16', name: '16 Días - Japón y China', isBold: false, isLink: true, path: '/itinerarios/japon-y-china' },
        { id: '17', name: '16 Días - Japón y Tailandia Lo mejor', isBold: false, isLink: true, path: '/itinerarios/japon-y-tailandia-lo-mejor' },
      ],
      'Ver más': [
        { id: '18', name: 'Viajes a Japon desde Mexico', isBold: false, isLink: true, path: '/viajes-a-japon-desde-mexico' },
        { id: '19', name: 'Paquetes a japon', isBold: false, isLink: true, path: '/paquetes-a-japon' },
        { id: '20', name: 'Tours a japon', isBold: false, isLink: true, path: '/tours-a-japon-desde-mexico' },
      ],
    },
  },
  { id: 2, name: 'Hoteles', isLink: true, path: '/hoteles' },
  { id: 3, name: 'Nosotros', isLink: true, path: '/nosotros' },
  { id: 4, name: 'Blog', isLink: true, path: '/blog' },
  { id: 5, name: 'Contacto', isLink: true, path: '/contacto' },
  { id: 6, name: 'FAQS', isLink: true, path: '/faqs' },
];
/* eslint-disable */
function SubmenuGroup({ title, items, isOpen, onClick, onItemClick, path }) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div
        onClick={onClick}
        style={{
          cursor: 'pointer',
          fontWeight: 'regular',
          padding: '5px 0',
          fontFamily: 'nohemi',
        }}>
        {`${title} ${isOpen ? "\u00A0\u00A0v" : "\u00A0\u00A0›"}`}
      </div>
      {isOpen && (
        <ul style={{ listStyle: 'none', paddingLeft: 10 }} >
          {items.map(({ id, name, isBold, isLink, path }, idx) => (
            <Link
              key={title + id}
              href={isLink ? path : "/itinerarios"}
              onClick={() => {
                if (isLink) {
                  onItemClick(path);
                }
              }}
              style={{
                display: "block",
                fontFamily: 'nohemi',
                cursor: isLink ? 'pointer' : 'default',
                fontWeight: isBold ? 600 : 400,
                borderBottom: "1px solid #d4d4d4",
                paddingBottom: "10px",
                textDecoration: "none",
                color: 'black',
              }}
              className='itinerariosStyleList'>
              {name}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}


// Main Component
export default function MenuOpen({ onClose }) {
  const [active, setActive] = useState(menuData[0]);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleActivate = (option) => {
    setActive(option);
    setOpenSubmenu(null);
  };

  const handleSubmenuClick = (name) => {
    triggerClose();
  };

  // Menu se cierra
  const triggerClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };




  return ReactDOM.createPortal(
    <>
      <div onClick={triggerClose} className='backgroundMenuShadow' />
      <div
        className={`menuStyle ${isClosing ? 'menu-fade-out' : ''}`}
      >
        <button onClick={triggerClose} className='closeMenuButton'>✕</button>
        <div style={{ display: 'flex', flex: 1 }}>
          <ul className='listaMenuMain'>
            {menuData.map((opt) => (
              <Link
                href={opt.isLink ? opt.path : '#'}
                key={opt.id}
                onMouseEnter={() => {
                  handleActivate(opt);
                  // Prefetch route on hover for faster navigation
                  if (opt.isLink && opt.path) {
                    prefetchOnVisible(null, opt.path);
                  }
                }}
                onClick={() => {
                  handleActivate(opt)
                  triggerClose();
                }}
                className='listaSubMenu'
                style={{
                  fontFamily: 'nohemi',
                  background:
                    active && active.id === opt.id ? '#f5f5f5' : 'transparent',
                }}
              >
                {opt.name}
                {opt.submenu && (
                  <span style={{ marginLeft: 'auto', color: 'black' }}>
                    &rsaquo;
                  </span>
                )}
              </Link>
            ))}
          </ul>

          {active?.submenu && (
            <div
              className='listadoitinerariosSubMenu'
              style={{ flex: 1, padding: '0 15px', overflowY: 'auto' }}
            >
              {Object.entries(active.submenu).map(([key, value], i) => (
                <SubmenuGroup
                  key={key}
                  title={key.charAt(0).toUpperCase() + key.slice(1)}
                  items={value}
                  isOpen={openSubmenu === key}
                  onClick={() =>
                    setOpenSubmenu((prev) => (prev === key ? null : key))
                  }
                  onItemClick={handleSubmenuClick}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>,
    document.body
  );
}
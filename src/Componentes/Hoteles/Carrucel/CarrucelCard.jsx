// CarrucelCard.jsx
import React, { useState, useRef } from "react";
import styles from "./carrucelCard.module.css";

/**
 * props:
 * - title: string
 * - image: string
 * - onClick: () => void
 * - active: boolean
 * - country: string (default "Japón")
 */
export default function CarrucelCard({
  title,
  image,
  onClick,
  active = false,
  country = "Japón",
}) {
  const [loaded, setLoaded] = useState(false);
  
  // Track pointer/touch interaction to distinguish click from drag
  const pointerStart = useRef({ x: 0, y: 0, time: 0 });
  const isDragging = useRef(false);
  const DRAG_THRESHOLD = 5; // Pixels - movement beyond this is considered a drag
  const MAX_CLICK_DURATION = 500; // Milliseconds - clicks longer than this won't trigger

  // Handle pointer start (mouse down or touch start)
  const handlePointerDown = (e) => {
    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
    
    pointerStart.current = {
      x: clientX,
      y: clientY,
      time: Date.now()
    };
    isDragging.current = false;
  };

  // Handle pointer move - detect if user is dragging
  const handlePointerMove = (e) => {
    if (isDragging.current) return; // Already detected as drag
    
    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;
    
    const deltaX = Math.abs(clientX - pointerStart.current.x);
    const deltaY = Math.abs(clientY - pointerStart.current.y);
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    if (distance > DRAG_THRESHOLD) {
      isDragging.current = true;
    }
  };

  // Handle pointer end (mouse up or touch end) - trigger click if not dragging
  const handlePointerUp = (e) => {
    const duration = Date.now() - pointerStart.current.time;
    
    // Only trigger click if:
    // 1. Not dragging (movement under threshold)
    // 2. Duration is reasonable for a click/tap
    // 3. onClick handler exists
    if (!isDragging.current && duration <= MAX_CLICK_DURATION && onClick) {
      e.preventDefault();
      e.stopPropagation();
      onClick();
    }
    
    // Reset state
    isDragging.current = false;
  };

  // Prevent default click behavior - we handle it in pointer events
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <button
      type="button"
      className={`${styles.card} ${active ? styles.active : ""}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onClick={handleClick}
      aria-pressed={active}
      aria-label={`${title}, ${country}`}
    >
      <div className={styles.media}>
        <img
          src={image}
          alt={title}
          className={`${styles.img} ${loaded ? styles.imgLoaded : ""}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
        <span className={styles.gradDark} aria-hidden="true" />
        <span className={styles.gradGlass} aria-hidden="true" />
      </div>

      {/* NEW: stacked content like your mock */}
      <div className={styles.content}>
        <div className={styles.titleBand} aria-hidden="true" />
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.badgeStack}>
          <span className={styles.badge}>{country}</span>
          <span className={styles.badge}>{title}</span>
        </div>
      </div>
    </button>
  );
}

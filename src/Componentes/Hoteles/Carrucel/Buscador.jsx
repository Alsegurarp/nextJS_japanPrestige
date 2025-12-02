import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import styles from "./buscador.module.css";
import CarrucelCard from "./CarrucelCard.jsx";


export default function Buscador({ cards = [], onCardClick, active }) {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const [initialTouchY, setInitialTouchY] = useState(0);
  const [isVerticalScroll, setIsVerticalScroll] = useState(false);
  const [touchStartTime, setTouchStartTime] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const count = cards?.length || 0;

  // Determine slidesToShow via container width (no magic numbers in JS)
  const measure = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;
    const rect = container.getBoundingClientRect();
    const width = rect.width;

    let show = 1;
    if (width >= 1200) show = 3;
    else if (width >= 900) show = 3;     // upper tablet (fits 3)
    else if (width >= 641) show = 2;     // tablet
    else show = 1;                       // mobile

    setSlidesToShow(show);

    // Card width = first child width (accounts for CSS clamp + gaps)
    const firstCard = track.querySelector(`.${styles.cardWrapper}`);
    if (firstCard) {
      const cw = firstCard.getBoundingClientRect().width;
      setCardWidth(cw);
    }
  }, []);

  useEffect(() => {
    measure();
    // ResizeObserver for precise card measurements
    const ro = new ResizeObserver(() => measure());
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [measure]);

  // Clamp index to bounds - allow scrolling through all cards
  const maxIndex = Math.max(0, count - slidesToShow);
  useEffect(() => {
    setIndex((i) => Math.min(Math.max(i, 0), maxIndex));
  }, [count, maxIndex, slidesToShow]);

  // Pages for dots (mobile/tablet requirement)
  const pages = useMemo(() => Math.max(1, Math.ceil(count / slidesToShow)), [count, slidesToShow]);
  const currentPage = useMemo(
    () => Math.min(pages - 1, Math.floor(index / slidesToShow)),
    [index, slidesToShow, pages]
  );

  const goToIndex = useCallback(
    (next, smooth = true) => {
      // Allow scrolling through all cards, not just count - 1
      const clamped = Math.max(0, Math.min(next, count - slidesToShow));
      
      // Ensure smooth animation for programmatic navigation
      if (smooth && trackRef.current) {
        // Temporarily ensure dragging class is removed for smooth transition
        trackRef.current.classList.remove(styles.dragging);
        setIsDragging(false);
        setDragDeltaX(0);
      }
      
      setIndex(clamped);
    },
    [count, slidesToShow]
  );

  const goPrev = useCallback(() => goToIndex(index - 1), [index, goToIndex]);
  const goNext = useCallback(() => goToIndex(index + 1), [index, goToIndex]);

  const goToPage = useCallback(
    (p) => {
      const firstIdxOfPage = p * slidesToShow;
      goToIndex(firstIdxOfPage);
    },
    [slidesToShow, goToIndex]
  );

  // Keyboard navigation 
  const onKeyDown = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        goPrev();
        break;
      case "ArrowRight":
        e.preventDefault();
        goNext();
        break;
      case "Home":
        e.preventDefault();
        goToIndex(0);
        break;
      case "End":
        e.preventDefault();
        goToIndex(count - 1);
        break;
      default:
        break;
    }
  };

  // Enhanced touch/pointer handling for better iOS compatibility
  const onPointerDown = (e) => {
    // For mouse events, only respond to left click
    if (e.type === 'mousedown') {
      if (e.button !== 0) return; // Only left mouse button
      setIsMouseDown(true);
      setDragStartX(e.clientX);
      setTouchStartTime(Date.now());
      setInitialTouchY(e.clientY);
    } else if (e.type === 'touchstart') {
      const touch = e.touches[0];
      if (!touch) return; // iOS safety check
      setInitialTouchY(touch.clientY);
      setDragStartX(touch.clientX);
      setTouchStartTime(Date.now());
      setIsMouseDown(false); // Ensure mouse state is clean for touch
    }
    
    setDragDeltaX(0);
    setIsVerticalScroll(false);
    setIsDragging(false); // Don't set dragging immediately
  };

  const onPointerMove = (e) => {
    if (isVerticalScroll) return;

    // For mouse events, only respond if mouse button is pressed
    if (e.type === 'mousemove' && !isMouseDown) return;

    let currentX, currentY;
    if (e.type === 'touchmove') {
      const touch = e.touches[0];
      if (!touch) return; // iOS safety check
      currentX = touch.clientX;
      currentY = touch.clientY;
    } else {
      currentX = e.clientX;
      currentY = e.clientY;
    }

    const deltaX = currentX - dragStartX;
    const deltaY = Math.abs(currentY - initialTouchY);

    // iOS specific: more lenient horizontal detection
    const isHorizontalIntent = Math.abs(deltaX) > Math.abs(deltaY) * 0.7;
    
    // Detect if this is vertical scrolling (iOS priority)
    if (deltaY > Math.abs(deltaX) && deltaY > 8) {
      setIsVerticalScroll(true);
      setIsDragging(false);
      return;
    }

    // Start horizontal dragging with lower threshold for iOS
    if (Math.abs(deltaX) > 5 && !isVerticalScroll && isHorizontalIntent) {
      setIsDragging(true);
      setDragDeltaX(deltaX);
      
      // Add CSS class to track for better iOS handling
      if (trackRef.current) {
        trackRef.current.classList.add(styles.dragging);
      }
      
      // Always prevent default for horizontal swipes on iOS
      if (e.type === 'touchmove') {
        e.preventDefault();
      } else if (Math.abs(deltaX) > Math.abs(deltaY)) {
        e.preventDefault();
      }
    }
  };

  const endDrag = () => {
    // Reset mouse state
    setIsMouseDown(false);

    // Always clean up dragging state first for iOS
    if (trackRef.current) {
      trackRef.current.classList.remove(styles.dragging);
    }

    if (!isDragging || isVerticalScroll) {
      setIsDragging(false);
      setDragDeltaX(0);
      setIsVerticalScroll(false);
      return;
    }

    const touchDuration = Date.now() - touchStartTime;
    // More sensitive threshold for iOS
    const threshold = Math.max(25, cardWidth * 0.1);
    
    // More lenient navigation criteria for iOS
    if (touchDuration > 100 && Math.abs(dragDeltaX) > threshold) {
      if (dragDeltaX < -threshold) {
        goToIndex(index + 1, true);
      } else if (dragDeltaX > threshold) {
        goToIndex(index - 1, true);
      }
    }

    // Always clean up dragging state
    setIsDragging(false);
    setDragDeltaX(0);
    setIsVerticalScroll(false);
  };

  // Compute translateX (index * cardWidth + gaps) from actual DOM gap via CSS var
  const gapPx = getComputedGap();

  function getComputedGap() {
    // Default fallback; actual gap is provided via CSS var --gap
    if (!containerRef.current) return 8;
    const gap = getComputedStyle(containerRef.current).getPropertyValue("--gap");
    const parsed = parseFloat(gap);
    return Number.isFinite(parsed) ? parsed : 8;
  }

  const offsetX = useMemo(() => {
    const x = -(index * (cardWidth + gapPx));
    // Add drag preview
    return isDragging ? x + dragDeltaX : x;
  }, [index, cardWidth, gapPx, isDragging, dragDeltaX]);

  const showArrows = useMemo(() => {
    // Desktop arrows are now hidden - use navigation controls instead
    return false;
  }, []);

  const trackId = "carousel-track";

  // Early return after all hooks
  if (!count) return null;

  return (
    <section
      className={styles.carouselSection}
      style={{ "--pages": pages }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Hoteles destacados"
      onKeyDown={onKeyDown}
    >
      <div
        className={styles.container}
        ref={containerRef}
        tabIndex={0}
        aria-controls={trackId}
        aria-live="polite"
      >
        {/* Track */}
        <div
          id={trackId}
          ref={trackRef}
          className={`${styles.track} ${isDragging ? styles.dragging : ""}`}
          style={{
            transform: `translate3d(${offsetX}px, 0, 0)`,
            WebkitTransform: `translate3d(${offsetX}px, 0, 0)`,
            willChange: "transform",
          }}
          onMouseDown={onPointerDown}
          onMouseMove={onPointerMove}
          onMouseUp={endDrag}
          onMouseLeave={() => {
            setIsMouseDown(false);
            endDrag();
          }}
          onTouchStart={(e) => {
            // iOS specific: prevent default only if we might be handling horizontally
            onPointerDown(e);
          }}
          onTouchMove={(e) => {
            // iOS specific: let the move handler decide about preventDefault
            onPointerMove(e);
          }}
          onTouchEnd={endDrag}
          onTouchCancel={endDrag}
        >
          {cards.map((c, i) => (
            <div key={`${c.title}-${i}`} className={styles.cardWrapper}>
              <CarrucelCard
                title={c.title}
                image={c.image}
                country={c.country}
                active={active === c.title}
                onClick={() => onCardClick?.(c.title)}
              />
            </div>
          ))}
        </div>

        {/* Arrows (desktop only; also limited by CSS) */}
        {showArrows && (
          <>
            <button
              className={`${styles.arrow} ${styles.left}`}
              aria-label="Anterior"
              onClick={goPrev}
              disabled={index === 0}
            >
              ‹
            </button>
            <button
              className={`${styles.arrow} ${styles.right}`}
              aria-label="Siguiente"
              onClick={goNext}
              disabled={index >= maxIndex}
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Responsive Navigation Arrows - Below carousel, above dots */}
      <div className={styles.navigationControls}>
        <button
          className={`${styles.navArrow} ${styles.navArrowLeft}`}
          aria-label="Ver tarjetas anteriores"
          onClick={goPrev}
          disabled={index === 0}
          type="button"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">Anterior</span>
        </button>

        <button
          className={`${styles.navArrow} ${styles.navArrowRight}`}
          aria-label="Ver tarjetas siguientes"
          onClick={goNext}
          disabled={index >= maxIndex}
          type="button"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="sr-only">Siguiente</span>
        </button>
      </div>

      {/* Dots (mobile/tablet) */}
      <div className={styles.dots} role="tablist" aria-label="Paginación del carrusel">
        {Array.from({ length: pages }).map((_, p) => (
          <button
            key={p}
            role="tab"
            aria-selected={currentPage === p}
            aria-controls={trackId}
            tabIndex={currentPage === p ? 0 : -1}
            className={`${styles.dot} ${currentPage === p ? styles.dotActive : ""}`}
            onClick={() => goToPage(p)}
          >
            <span className="sr-only"></span>
          </button>
        ))}
      </div>
    </section>
  );
}

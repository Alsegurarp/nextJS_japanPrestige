import React, { useMemo, useState } from "react";
import styles from "./Calendar.module.css";

/**
 * Props
 * - value: Date | null                -> currently selected date
 * - onChange: (date: Date) => void    -> called when the user picks a day
 * - maxDate?: Date                    -> last selectable date (inclusive)
 * - initialMonth?: Date               -> optional month to open on
 */

export default function Calendar({
  value = null,
  onChange = () => {},
  maxDate,
  initialMonth,
  onRequestClose,
}) {
  // Normalize to local midnight (avoid TZ surprises)
  const stripTime = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const today = useMemo(() => stripTime(new Date()), []);
  const minDate = today; 

  const [visibleMonth, setVisibleMonth] = useState(() =>
    stripTime(initialMonth ? initialMonth : value ? value : today)
  );


  const WEEKDAYS = ["DOM", "LUN", "MAR", "MIER", "JUE", "VIE", "SAB"];
  const MONTHS = [
    "Enero","Febrero","Marzo","Abril","Mayo","Junio",
    "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",
  ];

  const y = visibleMonth.getFullYear();
  const m = visibleMonth.getMonth();
  const firstOfMonth = new Date(y, m, 1);
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const startWeekday = firstOfMonth.getDay(); // 0 = Sunday


  const cells = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(y, m, d));


  const isSameDay = (a, b) =>
    a && b && a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

  const isDisabled = (date) => {
    if (!date) return true;
    const d = stripTime(date);
    if (d < minDate) return true;
    if (maxDate && d > stripTime(maxDate)) return true;
    return false;
  };

  const goMonth = (delta) => {
    const next = new Date(y, m + delta, 1);
    setVisibleMonth(next);
  };

    return (
    <div className={styles.calendar} role="application" aria-label="Selector de fecha">
      <div className={styles.header}>
        <button
          type="button"
          className={styles.navBtn}
          onClick={() => goMonth(-1)}
          aria-label="Mes anterior"
        >
          ‹
        </button>

        <div className={styles.monthYear} aria-live="polite">
          <span>{MONTHS[m]}</span>
          <span>{y}</span>
        </div>

        <div className={styles.headerRight}>
          {onRequestClose && (
            <button
              type="button"
              className={styles.closeBtn}
              onClick={onRequestClose}
              aria-label="Cerrar calendario"
              title="Cerrar"
            >
              ×
            </button>
          )}
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => goMonth(1)}
            aria-label="Mes siguiente"
          >
            ›
          </button>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.weekRow}>
        {["DOM","LUN","MAR","MIER","JUE","VIE","SAB"].map((w) => (
          <div key={w} className={styles.weekday}>{w}</div>
        ))}
      </div>

      <div className={styles.grid} role="grid">
        {cells.map((date, i) => {
          if (!date) return <div key={`e-${i}`} className={styles.emptyCell} />;
          const disabled = isDisabled(date);
          const selected = value && isSameDay(date, value);
          const isToday = isSameDay(date, today);

          return (
            <div key={date.toISOString()} role="gridcell" className={styles.dayCell}>
              <button
                type="button"
                className={[
                  styles.dayBtn,
                  disabled ? styles.disabled : "",
                  selected ? styles.selected : "",
                  !selected && isToday ? styles.today : "",
                ].join(" ")}
                onClick={() => !disabled && onChange(stripTime(date))}
                disabled={disabled}
                aria-disabled={disabled}
                aria-current={isToday ? "date" : undefined}
                aria-pressed={selected ? "true" : "false"}
                title={date.toLocaleDateString()}
              >
                {date.getDate()}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

}

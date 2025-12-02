'use client';

import React, { useState, useEffect, useRef, lazy } from "react";
import styles from "./Form.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";

const ReCAPTCHA = lazy(() => import("react-google-recaptcha"));
const Calendar = lazy(() => import("./FormComponents/Calendar.jsx"));

export function Form() {
  // --- state ---
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+52");
  const [phone, setPhone] = useState("");
  const [comments, setComments] = useState("");
  const [validCaptcha, setValidCaptcha] = useState(null);
  const [date, setDate] = useState(null);
  const [open, setOpen] = useState(false);
  // prueba form
  const [submitting, setSubmitting] = useState(false);
  const [serverMsg, setServerMsg] = useState(null);
  const [serverErr, setServerErr] = useState(null);


  const wrapperRef = useRef(null);
  const maxDate = new Date(2035, 5, 30); // 30 Jun 2035

  const countries = [
    { name: "México", code: "+52" },
    { name: "Estados Unidos", code: "+1" },
    { name: "Canadá", code: "+1" },
    { name: "España", code: "+34" },
    { name: "Argentina", code: "+54" },
    { name: "Colombia", code: "+57" },
    { name: "Chile", code: "+56" },
    { name: "Perú", code: "+51" },
    { name: "Guatemala", code: "+502" },
    { name: "Costa Rica", code: "+506" },
  ];

  const ccDigitsLen = countryCode.replace("+", "").length;
  const fullPhone = `${countryCode}${phone}`; // e.g. +52 5512345678

  // total digits (country + number)
  const totalDigits = ccDigitsLen + phone.length;

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };


  // --- regex helpers ---
  // Names: allow any Unicode letter and spaces; strip everything else.
  const cleanName = (v) => v
    .normalize("NFC")
    .replace(/[^\p{L}\s]/gu, "") // keep letters/spaces
    .replace(/\s{2,}/g, " ")     // collapse double spaces
    .trimStart();                // avoid leading spaces while typing

  // Email: limit length + lower-case while typing
  const cleanEmail = (v) => v.toLowerCase().slice(0, 50);

  // Phone: keep optional leading '+' then digits only; cap to 13 total chars
  const cleanPhone = (v, cc = countryCode) => {
    let s = v.replace(/[^\d]/g, ""); // only digits
    const ccLen = cc.replace("+", "").length;
    const maxTotal = 13;             // total cap (country + number)
    const maxDigits = Math.max(0, maxTotal - ccLen);
    return s.slice(0, maxDigits);
  };

  // --- validators ---
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const isFirstNameValid = firstName.trim().length > 0;
  const isLastNameValid = lastName.trim().length > 0;
  const isEmailValid = emailRegex.test(email);

  const isPhoneValid = totalDigits >= 10 && totalDigits <= 13;

  // Submit only when all required are valid + captcha
  const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && validCaptcha;

  // captcha key
  const reCaptchaKey = import.meta?.env?.VITE_RECAPTCHA_SITE_KEY

  const router = useRouter();

  // --- calendar wiring (unchanged) ---
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (d) => {
    setDate(d);
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setServerMsg(null);
    setServerErr(null);

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      countryCode,
      phoneLocal: phone,
      phoneDigits: `${ccDigitsLen}${phone.length}`, // optional debug
      phoneFull: fullPhone, // e.g. +525512345678
      phoneRaw: fullPhone,
      comments: (comments || "").trim() || "-",
      date: date ? date.toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" }) : "-",
      recaptchaToken: validCaptcha,
    };

    try {
      if (!validCaptcha) throw new Error("Valida el reCAPTCHA antes de enviar.");
      if (!isFormValid) throw new Error("Verifica que todos los campos requeridos estén completos y correctos.");

      // Build the email body that the server expects
      const to = "contacto@japonpremium.com.mx";
      const cc = "grupo-santa-f@add.nocrm.io, crm@viajespremium.com.mx";
      const subject = `Contacto - Japon Premium: ${payload.firstName} ${payload.lastName}`;
      // A human readable plain text message; we also send an html version
      const text = `
Nuevo contacto desde formulario:
Nombre: ${payload.firstName} ${payload.lastName}
Email: ${payload.email}
Teléfono: ${payload.phoneFull}
Fecha deseada: ${payload.date}
Comentarios: ${payload.comments}
reCAPTCHA token: ${payload.recaptchaToken ? "(present)" : "(missing)"}
      `.trim();

      const html = `
        <h2>Nuevo contacto desde formulario</h2>
        <p><strong>Nombre:</strong> ${payload.firstName} ${payload.lastName}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Teléfono:</strong> ${payload.phoneFull}</p>
        <p><strong>Fecha deseada:</strong> ${payload.date}</p>
        <p><strong>Comentarios:</strong> ${payload.comments}</p>
      `;

      // POST to your backend
      const resp = await axios.post(`${import.meta.env.VITE_API_BASE}/send-email`, {
        to,
        cc,
        subject,
        text,
        html,
      });

      if (resp.status === 200) {
        setServerMsg("¡Enviado con éxito! Te contactaremos pronto.");
        // Reset form
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setComments("");
        setDate(null);
        setValidCaptcha(null);
        // Redirect after a short pause
        setTimeout(() => router.push("/gracias"), 500);
      } else {
        throw new Error(resp.data?.message || "Error en la respuesta del servidor");
      }
    } catch (err) {
      console.error(err);
      setServerErr(err?.response?.data?.message || err?.message || "Error al enviar el formulario.");
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <>
      <div className={styles.contenedorForm}>
        <form onSubmit={handleSubmit} noValidate>
          <div className={styles.formStyle}>
            <h5 className={styles.subHeader}>Datos personales</h5>

            <div className={styles.inputContainerName}>
              <input
                id="firstName"
                type="text"
                className={styles.inputNameApellido}
                placeholder="Tu nombre"
                value={firstName}
                onChange={(e) => setFirstName(cleanName(e.target.value))}
                required
              />
              {!isFirstNameValid && firstName !== "" && (
                <small className={styles.error}>Sólo letras y espacios.</small>
              )}
              {firstName.length >= 35 && (
                <small className={styles.warning}>Límite: {firstName.length}/40 caracteres</small>
              )}

              <input
                id="lastName"
                type="text"
                className={styles.inputNameApellido}
                placeholder="Tu apellido"
                value={lastName}
                onChange={(e) => setLastName(cleanName(e.target.value))}
                required
              />
              {!isLastNameValid && lastName !== "" && (
                <small className={styles.error}>Sólo letras y espacios.</small>
              )}
              {lastName.length >= 35 && (
                <small className={styles.warning}>Límite: {lastName.length}/40 caracteres</small>
              )}
            </div>

            <div className={styles.inputContainer}>
              <div className={styles.phoneRow}>
                <select
                  aria-label="Código de país"
                  className={styles.input}
                  value={countryCode}
                  onChange={(e) => {
                    const newCC = e.target.value;
                    setCountryCode(newCC);
                    setPhone((prev) => cleanPhone(prev, newCC));
                  }}
                  required
                >
                  {countries.map((c) => (
                    <option key={c.code + c.name} value={c.code}>
                      {c.name} ({c.code})
                    </option>
                  ))}
                </select>

                <input
                  id="phone"
                  type="text"
                  className={styles.input}
                  placeholder="Tu número"
                  value={phone}
                  onChange={(e) => setPhone(cleanPhone(e.target.value))}
                  inputMode="tel"
                  required
                />
              </div>

              <small className={styles.muted}>
                Número completo: <strong>{fullPhone}</strong> — {totalDigits} dígitos (mín. 10, máx. 13)
              </small>

              {phone !== "" && !isPhoneValid && (
                <small className={styles.error}>
                  Verifica el número: el total (código + número) debe tener entre 10 y 13 dígitos.
                </small>
              )}
            </div>

            <div className={styles.inputContainer}>
              <input
                id="email"
                type="email"
                className={styles.input}
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(cleanEmail(e.target.value))}
                inputMode="email"
                required
              />
              <small className={styles.muted}>{email.length}/50</small>
              {email !== "" && !isEmailValid && (
                <small className={styles.error}>
                  Debe tener formato válido y terminar en .com, .com.mx o .es
                </small>
              )}
            </div>

            <h5 className={styles.subHeader}>Sobre tu viaje</h5>

            <div className={styles.inputContainer}>
              <label htmlFor="date-display">Fecha aproximada de viaje</label>
              <div ref={wrapperRef} style={{ position: "relative", display: "flex", flexDirection: "column" }}>
                <input
                  id="date-display"
                  type="text"
                  readOnly
                  className={styles.input}
                  value={date ? date.toLocaleDateString() : ""}
                  placeholder="Selecciona una fecha"
                  onClick={() => setOpen((prev) => !prev)}
                />
                {open && (
                  <div className={styles.popover}>
                    <Calendar value={date} onChange={handleSelect} maxDate={maxDate} />
                  </div>
                )}
              </div>
            </div>

            <div className={styles.inputContainer}>
              <label htmlFor="comments">Comentarios adicionales (opcional)</label>
              <textarea
                id="comments"
                className={styles.input}
                placeholder="Escribe cualquier comentario..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                rows={4}
              />
            </div>

            <div className={`${styles.inputContainer} ${styles.recaptchaContainer}`}>
              <ReCAPTCHA
                sitekey={reCaptchaKey}
                onChange={(val) => setValidCaptcha(val)}
                onExpired={() => setValidCaptcha(null)}
                onError={() => setValidCaptcha(null)}
              />
            </div>

            <div className={styles.inputContainer}>
              <button
                className={styles.button}
                type="submit"
                disabled={submitting || !isFormValid}
              >
                {submitting ? "Enviando…" : "Enviar"}
              </button>
            </div>

            {serverMsg && <p className={styles.success}>{serverMsg}</p>}
            {serverErr && <p className={styles.error}>{serverErr}</p>}
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;

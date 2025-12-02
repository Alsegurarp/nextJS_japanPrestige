# Form Component Testing Guide

## ✅ Issues Fixed

1. **Removed unused imports**: `Link` from react-router-dom, `useCallback`, asset imports
2. **Fixed handleSubmit function**: Removed broken `useCallback` + `debounce` wrapper
3. **Fixed JSX structure**: Properly aligned all closing `</div>` tags
4. **Fixed button rendering**: Button now always displays (not conditionally rendered)
5. **Fixed success message redirect**: Changed `<Link>` to redirect logic after 500ms
6. **Build status**: ✅ Compiles successfully (4.15s, 1012 modules)

---

## Manual Testing Checklist

### 1. **Form Rendering**

- [ ] Form loads without errors
- [ ] All input fields are visible: Nombre, Apellido, País, Teléfono, Email, Fecha, Comentarios
- [ ] reCAPTCHA widget appears at bottom
- [ ] "Enviar" button is disabled initially (gray)

### 2. **First Name Validation** (inputContainerName section)

- [ ] Type: `"Juan"`
  - Expected: Input accepts text
  - Expected: Error message disappears
- [ ] Type: `"123"`
  - Expected: Numbers are stripped
  - Expected: Error: "Sólo letras y espacios."
- [ ] Type: `"Ju@n"`
  - Expected: Special chars stripped → shows as "Juan"
- [ ] Type >40 chars
  - Expected: Text is limited
  - Expected: Warning: "Límite: X/40 caracteres"

### 3. **Last Name Validation**

- [ ] Repeat same tests as First Name
- [ ] Type: `"García"`
  - Expected: Unicode characters accepted

### 4. **Phone Field Validation**

- [ ] Dropdown countries work
  - Change to "Estados Unidos" → code becomes "+1"
  - Phone field re-trims if needed
- [ ] Type: `"5512345678"`
  - Expected: Full phone displays as `+525512345678` (México default)
  - Expected: Shows "10 dígitos" (OK)
- [ ] Type: `"123"`
  - Expected: Error: "el total (código + número) debe tener entre 10 y 13 dígitos"
- [ ] Change country code:
  - México (+52): allows up to 11 local digits (13 total)
  - USA (+1): allows up to 12 local digits (13 total)
- [ ] Try special chars like `"555-1234-5678"`
  - Expected: Dashes stripped → shows as digits only

### 5. **Email Validation**

- [ ] Type: `"test@example.com"`
  - Expected: ✅ Valid format
  - Character count: "17/50"
- [ ] Type: `"invalid-email"`
  - Expected: Error: "Debe tener formato válido..."
- [ ] Type: `"test@ejemplo.com.mx"`
  - Expected: ✅ Valid (domain variation)
- [ ] Type: `"test@"`
  - Expected: Error appears immediately
- [ ] Type: >50 chars
  - Expected: Input is capped at 50 chars
- [ ] Type: `"TEST@EXAMPLE.COM"`
  - Expected: Automatically converts to lowercase

### 6. **Date Field (Calendar)**

- [ ] Click on date input
  - Expected: Calendar popover appears below input
- [ ] Select date: `"15 de diciembre de 2025"`
  - Expected: Input shows selected date
  - Expected: Calendar closes
- [ ] Click outside calendar
  - Expected: Calendar closes without selection
- [ ] Try to select date > `"30 de junio de 2035"`
  - Expected: Date picker prevents selection (maxDate limit)
- [ ] Clear and reopen
  - Expected: No date selected shown as empty

### 7. **Comments Field (Optional)**

- [ ] Click and type: `"Me gustaría viajar en familia"`
  - Expected: Text appears in textarea
  - Expected: No validation errors (optional field)
- [ ] Leave empty
  - Expected: Form still submits (converts to "-" on backend)

### 8. **reCAPTCHA**

- [ ] Widget displays properly
- [ ] Check the checkbox
  - Expected: "I'm not a robot" verification completes
  - Expected: "Enviar" button becomes enabled (if all fields valid)
- [ ] Leave unchecked
  - Expected: "Enviar" button remains disabled

### 9. **Form Validation State (Button Enable/Disable)**

**Scenario A: All valid**

- Nombre: `"Juan"`
- Apellido: `"García"`
- Teléfono: `"5512345678"` (México)
- Email: `"juan@example.com"`
- Fecha: Select any date
- reCAPTCHA: Checked
- Expected: 🟢 Button is **ENABLED** (clickable, not grayed)

**Scenario B: Missing reCAPTCHA**

- Same as above but reCAPTCHA unchecked
- Expected: 🔴 Button **DISABLED**

**Scenario C: Invalid phone**

- Phone: `"123"` (too short)
- All others valid
- Expected: 🔴 Button **DISABLED**

**Scenario D: Invalid email**

- Email: `"invalid"`
- All others valid, reCAPTCHA checked
- Expected: 🔴 Button **DISABLED**

### 10. **Form Submission**

**Success Scenario:**

- Fill all fields correctly:
  - Nombre: `"Juan"`
  - Apellido: `"Pérez"`
  - Teléfono: `"5512345678"`
  - Email: `"juan.perez@example.com"`
  - Fecha: Select date
  - Comentarios: (optional, can leave empty)
  - reCAPTCHA: Check
- Click "Enviar"
- Expected:
  - Button changes to "Enviando…"
  - Button is disabled during submission
  - After ~500ms: Page redirects to `/gracias`
  - Email should be sent to:
    - To: `contacto@japonpremium.com.mx`
    - CC: `grupo-santa-f@add.nocrm.io, crm@viajespremium.com.mx`
  - Subject format: `"Contacto - Japon Premium: Juan Pérez"`

**Failure Scenario:**

- Fill form but provide invalid API endpoint
- Expected:
  - Button shows "Enviando…"
  - After attempt: Error message appears below form
  - Error message: `"Error al enviar el formulario."`
  - Button returns to "Enviar" state
  - Form data is preserved (not cleared on error)

### 11. **Edge Cases**

**Leading/Trailing Spaces**

- Nombre: `"  Juan  "`
- Expected: Trimmed to `"Juan"` on submit (visual shows with spaces)

**Multiple Spaces**

- Nombre: `"Juan  María"`
- Expected: Collapses to single space → `"Juan María"`

**Country Code Change Mid-Typing**

- Type phone: `"5512345678"` (México, +52)
- Change to USA (+1)
- Expected: Field re-trims to prevent exceeding 13 total digits

**Special Characters in Names**

- Nombre: `"José-María"`
- Expected: `-` is stripped → `"JoséMaría"`

**Maximum Character Limits**

- Nombre (40 chars): Try 50 chars
  - Expected: Visual counter shows progress, input stops at limit
- Email (50 chars): Try 60 chars
  - Expected: Field stops accepting input

---

## Browser DevTools Checks

### Console

- [ ] No JavaScript errors
- [ ] No warning about missing dependencies
- [ ] Network tab: Check reCAPTCHA request loads (https://www.google.com/recaptcha/...)

### Network (Form Submission)

- [ ] Check POST request to: `/send-email`
- [ ] Request payload includes:
  ```json
  {
    "to": "contacto@japonpremium.com.mx",
    "cc": "grupo-santa-f@add.nocrm.io, crm@viajespremium.com.mx",
    "subject": "Contacto - Japon Premium: ...",
    "text": "...",
    "html": "..."
  }
  ```
- [ ] Response status: 200 (success)

### Responsive Testing

- [ ] **Mobile (375px)**
  - Form fields stack vertically
  - Phone dropdown and input stay side-by-side or stack gracefully
  - Button is full-width
  - All text is readable
- [ ] **Tablet (768px)**
  - Form looks balanced
  - Phone row flexes properly
- [ ] **Desktop (1920px)**
  - Form centered and readable
  - Good spacing between fields

---

## Performance Notes

- [ ] Form renders without lag
- [ ] Typing in inputs is smooth (no jank)
- [ ] Calendar opens/closes smoothly
- [ ] reCAPTCHA loads within 2-3 seconds

---

## Accessibility Checks

- [ ] All inputs have proper `id` and `label` attributes
- [ ] Tab navigation works through all fields
- [ ] Error messages are associated with inputs (screen readers)
- [ ] Button text is clear: "Enviar" / "Enviando…"
- [ ] Color contrast for disabled button state is sufficient

---

## Summary

✅ **Form Fixed & Ready for Testing**

- All JSX errors resolved
- Component builds successfully
- Follow the checklist above for comprehensive testing
- Focus on: validation, submit flow, error handling, responsive layout

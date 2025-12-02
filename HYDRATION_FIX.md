# Hydration Error Fix Guide

## Problem
The hydration error is caused by `Date.now()` being called in carousel/touch handler components. This creates different values on server vs client.

## Solution

### Option 1: Quick Fix (Suppress Warning)
Add `suppressHydrationWarning={true}` to components using Date.now():

Already done in:
- `CaracteristicasIcon.jsx`
- `MediaFeature.jsx`

### Option 2: Proper Fix (Recommended)
The `Date.now()` calls in carousel components should only run on the client side. These are already in event handlers (onPointerDown, onTouchStart, etc.), which only run on the client, so they shouldn't cause hydration issues.

## Root Cause
The actual hydration error is likely from:

1. **AOS (Animate On Scroll) attributes** - The `data-aos` attributes might be causing issues
2. **Lazy loaded components** - Suspense boundaries might be rendering differently

## Recommended Actions

### 1. Ensure all client-only code is in useEffect:
```javascript
useEffect(() => {
  if (typeof document !== 'undefined') {
    document.title = 'Your Title';
  }
}, []);
```

### 2. Add suppressHydrationWarning to Suspense fallbacks:
```javascript
<Suspense fallback={<div suppressHydrationWarning={true}>Loading...</div>}>
```

### 3. Check for any inline styles or classes that change:
- Make sure no styles depend on window size during initial render
- Ensure all conditional rendering is consistent between server and client

## Files Already Updated
All itinerary files now have `"use client"` directive, which should help with most hydration issues.

## Next Steps
If errors persist, check:
1. Browser console for specific element causing the mismatch
2. React DevTools for component tree differences
3. Network tab to see if server HTML matches client expectations

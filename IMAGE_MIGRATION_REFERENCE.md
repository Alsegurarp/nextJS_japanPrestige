# Next.js Image Migration - Quick Reference Guide

## Quick Migration Pattern

### Step 1: Import next/image

```javascript
import Image from "next/image";
```

### Step 2: Replace img tags

#### Pattern A: Static Images (Hero backgrounds)

```javascript
// BEFORE
<img src={heroImage} alt="..." className={styles.heroImg} />

// AFTER
<Image
  src={heroImage}
  alt="..."
  fill
  className={styles.heroImg}
  style={{ objectPosition: bgPosition }}
  priority
/>
```

#### Pattern B: Fixed-size Images (Cards, etc.)

```javascript
// BEFORE
<img src={cardImage} alt="..." className={styles.cardImage} loading='lazy' />

// AFTER
<Image
  src={cardImage}
  alt="..."
  className={styles.cardImage}
  width={1080}
  height={1350}
  priority={false}
/>
```

#### Pattern C: Responsive with srcset

```javascript
// BEFORE
<picture>
  <source srcSet={srcsetWebp} />
  <img src={fallbackSrc} alt="..." />
</picture>

// AFTER
<Image
  src={fallbackSrc}
  alt="..."
  fill
  sizes="100vw"
  style={{ objectPosition: bgPosition }}
  priority
/>
```

## Key Props Reference

| Prop          | Type    | Default    | Use Case                                 |
| ------------- | ------- | ---------- | ---------------------------------------- |
| `src`         | string  | required   | Image source path                        |
| `alt`         | string  | required   | Accessibility text                       |
| `width`       | number  | required\* | Image width (not for fill)               |
| `height`      | number  | required\* | Image height (not for fill)              |
| `fill`        | boolean | false      | Fill container (no width/height needed)  |
| `priority`    | boolean | false      | Pre-load image (use for hero/LCP images) |
| `loading`     | string  | lazy       | "lazy", "eager"                          |
| `sizes`       | string  | -          | Responsive image sizes                   |
| `quality`     | number  | 75         | JPEG quality (1-100)                     |
| `placeholder` | string  | empty      | "blur", "empty"                          |

\* Required unless using `fill` prop

## Common Patterns Used in This Project

### 1. Hero Section with Background Image

```javascript
<Image
  src={image}
  alt={altImg}
  fill
  className={styles.heroImg}
  style={{ objectPosition: bgPosition }}
  priority
/>
```

### 2. Card Component with Dynamic Image

```javascript
<Image
  src={image}
  alt={title}
  className={styles.image}
  width={1080}
  height={1350}
  priority={false}
/>
```

### 3. SVG Icon/Logo

```javascript
<Image
  src={svgIcon}
  alt={description}
  width={40}
  height={40}
  priority={false}
/>
```

## Files That Still Need Migration

Based on grep results, these files still use `<img>` tags and should be updated:

### Blog Articles

- `src/pages/Blog/Articulos/ViajeSinJapones/ViajeSinJapones.jsx` (line 110)
- `src/pages/Blog/Articulos/SaludarBlog/SaludarBlog.jsx` (line 125)
- Other blog article pages

### Card Components

- `src/pages/Hoteles/HotelesInicio/Componente/CardPrueba.jsx` (line 21-22)
- Other hotel/card components

### Home Sections

- `src/Componentes/Sections/Home/` - Various sections with images
- `src/Componentes/UI/Cards/` - Multiple card components

## Tips & Best Practices

✅ **DO:**

- Always include `alt` text for accessibility
- Use `priority` for above-the-fold hero images
- Provide explicit width/height to prevent layout shifts
- Use `fill` for background/container-filling images
- Use `sizes` prop for responsive images
- Test images on different screen sizes

❌ **DON'T:**

- Mix `fill` with `width`/`height` props
- Use dynamic `src` values without proper typing
- Forget `alt` text
- Use `loading='eager'` for non-critical images
- Set `quality` too high (causes larger files)

## Performance Tips

1. **For Hero Images:** Use `priority={true}` and `loading="eager"`
2. **For Cards/Lists:** Use `priority={false}` and `loading="lazy"`
3. **For SVGs:** No optimization benefit, but keep for consistency
4. **For WebP:** Handled automatically by Next.js Image component
5. **Responsive Images:** Use `sizes` prop to avoid oversized downloads

## Configuration Reference

Your `next.config.mjs`:

```javascript
const nextConfig = {
  images: {
    unoptimized: true, // Set to false after testing for auto-optimization
  },
};
```

## Testing Checklist

- [ ] Build succeeds with no errors
- [ ] Images display correctly on desktop
- [ ] Images display correctly on mobile
- [ ] Images display correctly on tablet
- [ ] Alt text appears in dev tools
- [ ] No layout shift when loading images
- [ ] LCP (Largest Contentful Paint) improves
- [ ] Page load time improvements

## Related Documentation

- [Next.js Image Component](https://nextjs.org/docs/app/api-reference/components/image)
- [Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Web Vitals](https://web.dev/web-vitals/)
- [Lighthouse Performance](https://developers.google.com/web/tools/lighthouse)

---

**Created:** December 2, 2025
**Status:** Phase 1 Complete - 11 files migrated successfully

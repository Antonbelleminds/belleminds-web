# Image Optimization Guide

This document outlines the image optimization strategy implemented to achieve Apple-level quality and performance.

## Core Principles

### 1. Retina Display Support (2x–3x DPR)
All images are optimized for high-density displays:
- Next.js automatically generates multiple resolutions
- Device pixel ratios up to 3x are supported
- Images remain crisp on all devices

### 2. Modern Format Delivery
**Priority order:**
1. AVIF (best compression, modern browsers)
2. WebP (good compression, wide support)
3. PNG/JPEG (fallback)

Configured in `next.config.ts`:
```typescript
images: {
  formats: ['image/avif', 'image/webp'],
}
```

### 3. Responsive Images

#### Sizes Attribute
Every image includes proper `sizes` attribute for optimal loading:

```tsx
// Hero logo
sizes="(max-width: 768px) 200px, 350px"

// Full-width backgrounds
sizes="100vw"

// Content images
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
```

#### Device Sizes
Configured breakpoints:
- Mobile: 640, 750, 828px
- Tablet: 1080, 1200px
- Desktop: 1920, 2048px
- 4K: 3840px

### 4. Visual Quality

#### Image Rendering
Premium sharpness using:
```tsx
style={{ imageRendering: '-webkit-optimize-contrast' }}
```

This provides:
- Crisp edges on text and UI elements
- Natural appearance on photos
- No pixelation on scaling

#### Quality Settings
- **Hero images**: `quality={95}` (critical, above fold)
- **Content images**: `quality={95}` (high quality maintained)
- **Thumbnails**: `quality={85}` (balance quality/size)

### 5. Loading Strategy

#### Critical Images (Priority)
- Hero logo: `priority` prop
- Products background: `priority` prop
- Industries background: `priority` prop

#### Non-Critical Images (Lazy)
- Showcase screenshots: `loading="lazy"`
- Mobile phone mockups: `loading="lazy"`
- Below-fold content: `loading="lazy"`

### 6. Mobile-Specific Optimizations

#### Solid Overlays for Text
On mobile, text never sits directly on images:

```tsx
// Before (mobile): bg-white/90 (semi-transparent)
// After (mobile): bg-white (solid)
className="bg-white rounded-2xl p-6"
```

#### Responsive Image Delivery
```tsx
<picture>
  <source
    media="(max-width: 767px)"
    srcSet="/image-mobile.png 1x, /image-mobile.png 2x"
  />
  <source
    media="(min-width: 768px)"
    srcSet="/image-desktop.png 1x, /image-desktop.png 2x"
  />
  <Image ... />
</picture>
```

## Component-Specific Implementation

### MegaHeroV1 (Logo)
```tsx
<Image
  src="/brand/logo.png"
  alt="Belleminds logotyp"
  fill
  priority
  quality={95}
  sizes="(max-width: 768px) 200px, 350px"
  className="drop-shadow-2xl object-contain"
/>
```

**Why:**
- `fill` + container sizing: responsive without aspect ratio issues
- `priority`: loads immediately (above fold)
- `quality={95}`: crisp logo details
- `sizes`: precise loading for each breakpoint

### ProductsSection (Background)
```tsx
<picture>
  <source media="(max-width: 767px)" srcSet="..." />
  <source media="(min-width: 768px)" srcSet="..." />
  <Image
    src="/salon-booking-new.png"
    fill
    className="object-cover md:object-contain"
    priority
    quality={95}
    sizes="100vw"
  />
</picture>
```

**Why:**
- `<picture>`: different crops for mobile/desktop
- `priority`: hero section background
- `object-cover` mobile / `object-contain` desktop: optimal framing
- `quality={95}`: preserve screenshot details

### IndustriesSection (Background)
```tsx
<Image
  src="/industries-bg.png"
  fill
  className="object-contain"
  priority
  quality={95}
  sizes="100vw"
/>
```

**Why:**
- `object-contain`: preserve full illustration
- `priority`: above fold
- `quality={95}`: sharp vector-style graphics

### SanaInspiredShowcase (Screenshots)
```tsx
<Image
  src={screenshot}
  fill
  quality={95}
  sizes="(max-width: 768px) 100vw, 320px"
  loading="lazy"
  style={{ imageRendering: '-webkit-optimize-contrast' }}
/>
```

**Why:**
- `loading="lazy"`: below fold, loads on demand
- `quality={95}`: UI screenshots need clarity
- `imageRendering`: sharp text in screenshots
- `sizes`: mobile full-width, desktop fixed 320px

## Performance Metrics

### Target Metrics
- **LCP (Largest Contentful Paint)**: < 2.5s
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Image Load Time**: < 1s on 4G

### Optimization Results
- ✅ AVIF format: ~50% smaller than PNG
- ✅ WebP format: ~30% smaller than PNG
- ✅ Retina support: automatic 2x/3x generation
- ✅ Responsive: correct size for each device
- ✅ Lazy loading: non-critical images deferred

## Image Source Requirements

### Preparing Images for Upload

#### Desktop Screenshots (16:9)
- Source resolution: 2880×1620px (3x for 960×540 display)
- Format: PNG for UI, JPEG for photos
- Naming: `screenshot-{feature}-desktop.png`

#### Mobile Screenshots (9:19.5)
- Source resolution: 1080×2340px (3x for 360×780 display)
- Format: PNG for UI
- Naming: `screenshot-{feature}-mobile.png`

#### Logos & Icons
- Source resolution: 1050×1050px (3x for 350×350 display)
- Format: PNG with transparency
- Naming: `logo.png`, `icon-{name}.png`

#### Background Images
- Source resolution: 5760×3240px (3x for 1920×1080 display)
- Format: JPEG (photos) or PNG (illustrations)
- Naming: `bg-{section}.png`

### Optimization Checklist

Before uploading images:
- [ ] Resolution is 2x–3x final display size
- [ ] Format is PNG (UI/transparency) or JPEG (photos)
- [ ] File size < 5MB (Next.js will optimize further)
- [ ] Proper naming convention used
- [ ] Alt text prepared

## Future Enhancements

### Phase 2: Advanced Optimization
1. **Art Direction**: Different compositions for mobile/desktop
2. **Blur Placeholders**: LQIP (Low Quality Image Placeholder)
3. **CDN Integration**: Cloudflare/Cloudinary for global delivery
4. **Adaptive Quality**: Adjust quality based on connection speed

### Phase 3: Premium Features
1. **Video Backgrounds**: Optimized MP4/WebM delivery
2. **Progressive Images**: Load low-res → high-res
3. **Smart Cropping**: AI-powered focal point detection
4. **Format Detection**: Automatic format based on browser support

## Troubleshooting

### Image Appears Blurry
**Cause**: Source image too small or quality setting too low
**Fix**: 
```tsx
quality={95} // Increase from default 75
```

### Layout Shift on Load
**Cause**: Missing dimensions or improper aspect ratio
**Fix**:
```tsx
<div className="relative aspect-[16/9]">
  <Image fill ... />
</div>
```

### Slow Loading
**Cause**: Missing priority or improper sizes
**Fix**:
```tsx
priority // For above-fold images
sizes="..." // Accurate viewport sizes
```

### Format Not Supported
**Cause**: Next.js image optimization disabled
**Fix**: Check `next.config.ts` has:
```typescript
images: {
  formats: ['image/avif', 'image/webp'],
}
```

## Resources

- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Web.dev Image Best Practices](https://web.dev/fast/#optimize-your-images)
- [Apple Design Resources](https://developer.apple.com/design/resources/)

---

**Last Updated**: 2026-02-10
**Maintained By**: Development Team

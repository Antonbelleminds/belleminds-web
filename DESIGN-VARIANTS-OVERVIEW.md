# Belleminds Design Variants - Overview

## Quick Comparison

| Feature | B1 (Original) | B2 (Dropdown) | B3 (Inline) | B4 (Mega Menu) |
|---------|---------------|---------------|-------------|----------------|
| **Navigation Style** | Compact (4 items) | Dropdown menu | All inline (10 items) | Mega menu |
| **Products Submenu** | ❌ | ✅ Dropdown | ❌ | ✅ In mega menu |
| **Investor Section** | ✅ Separate | ✅ Separate | ✅ Merged in Vision | ❌ Removed |
| **Header Complexity** | Low | Medium | High (many items) | Medium |
| **New Sections** | ❌ | ✅ All 7 new | ✅ All 7 new | ✅ All 7 new |

---

## Design B1 (Original/Baseline)
**URL**: `/design-b1`  
**Header**: `Header.tsx`

### Navigation Items (4)
- Vision
- Inspiration
- Kontakt
- Om oss

### Page Structure
1. Hero
2. BentoGrid (Vision)
3. SanaInspiredShowcase (Inspiration)
4. InvestorSection
5. Contact
6. Footer

**Notes**: This is the original design without new content sections.

---

## Design B2 (Dropdown Navigation)
**URL**: `/design-b2`  
**Header**: `HeaderWithDropdown.tsx`

### Navigation Approach
**Dropdown Menu** for "Produkter" containing:
- Produkter (Products overview)
- Varför Bellebook (Why Bellebook)
- Vad ingår (What's included)

**Other Items** shown inline:
- Branscher, Integrationer, Roadmap, Vision, Inspiration, Kontakt, Om oss

### Page Structure
1. Hero (updated)
2. **ProductsSection** ⭐
3. **WhyBellebookSection** ⭐
4. **WhatsIncludedSection** ⭐
5. **IndustriesSection** ⭐
6. **IntegrationsSection** ⭐
7. **RoadmapSection** ⭐
8. **FairTermsSection** ⭐
9. BentoGrid (Vision)
10. SanaInspiredShowcase (Inspiration)
11. **InvestorSection** (separate)
12. Contact
13. Footer

**Best For**: 
- Users who want clear product information hierarchy
- Keeping investor pitch prominent and separate
- Medium header complexity

---

## Design B3 (Inline Navigation + Merged Investor)
**URL**: `/design-b3`  
**Header**: `HeaderInline.tsx`

### Navigation Approach
**All items inline** (compact styling):
- Shows all 10 navigation items in header
- Smaller font size and spacing
- Better for wide screens

### Page Structure
1. Hero (updated)
2. **ProductsSection** ⭐
3. **WhyBellebookSection** ⭐
4. **WhatsIncludedSection** ⭐
5. **IndustriesSection** ⭐
6. **IntegrationsSection** ⭐
7. **RoadmapSection** ⭐
8. **FairTermsSection** ⭐
9. BentoGrid (Vision)
10. **MergedInvestorSection** (inside Vision section) 🔄
11. SanaInspiredShowcase (Inspiration)
12. Contact
13. Footer

**Best For**:
- Users who want everything visible at a glance
- Merging investor context into vision/about
- Desktop-first experience

**Unique Feature**: Investor pitch appears as a quote card directly after the BentoGrid, keeping vision and pitch together.

---

## Design B4 (Mega Menu + No Investor)
**URL**: `/design-b4`  
**Header**: `HeaderMegaMenu.tsx`

### Navigation Approach
**Mega Menu** under "Utforska/Explore" button containing:

**Produkter Section**:
- Produktöversikt
- Varför Bellebook
- Vad ingår

**Information Section**:
- Branscher
- Integrationer
- Roadmap

**Primary Nav** (inline):
- Vision, Inspiration, Kontakt, Om oss

### Page Structure
1. Hero (updated)
2. **ProductsSection** ⭐
3. **WhyBellebookSection** ⭐
4. **WhatsIncludedSection** ⭐
5. **IndustriesSection** ⭐
6. **IntegrationsSection** ⭐
7. **RoadmapSection** ⭐
8. **FairTermsSection** ⭐
9. BentoGrid (Vision)
10. SanaInspiredShowcase (Inspiration)
11. ~~InvestorSection~~ ❌ (removed)
12. Contact
13. Footer

**Best For**:
- Clean, organized navigation
- Focus on product/customer journey
- Users who prefer no investor pitch

**Unique Feature**: Mega menu expands to show organized categories, making it easy to explore without cluttering the header.

---

## Visual Flow Comparison

```
┌─────────────────────────────────────────────────────────┐
│                    CONTENT SECTIONS                      │
├─────────────────────────────────────────────────────────┤
│ ✅ = Included     ❌ = Not Included     🔄 = Modified    │
└─────────────────────────────────────────────────────────┘

Section                  │ B1  │ B2  │ B3  │ B4  │
─────────────────────────┼─────┼─────┼─────┼─────┤
Hero (updated)           │ ❌  │ ✅  │ ✅  │ ✅  │
ProductsSection          │ ❌  │ ✅  │ ✅  │ ✅  │
WhyBellebookSection      │ ❌  │ ✅  │ ✅  │ ✅  │
WhatsIncludedSection     │ ❌  │ ✅  │ ✅  │ ✅  │
IndustriesSection        │ ❌  │ ✅  │ ✅  │ ✅  │
IntegrationsSection      │ ❌  │ ✅  │ ✅  │ ✅  │
RoadmapSection           │ ❌  │ ✅  │ ✅  │ ✅  │
FairTermsSection         │ ❌  │ ✅  │ ✅  │ ✅  │
BentoGrid                │ ✅  │ ✅  │ ✅  │ ✅  │
InvestorSection          │ ✅  │ ✅  │ 🔄  │ ❌  │
SanaInspiredShowcase     │ ✅  │ ✅  │ ✅  │ ✅  │
Contact                  │ ✅  │ ✅  │ ✅  │ ✅  │
```

---

## Choosing the Right Variant

### Choose B2 if you want:
- ✅ Clear product information hierarchy via dropdown
- ✅ Separate, prominent investor pitch
- ✅ Balanced navigation complexity

### Choose B3 if you want:
- ✅ All navigation visible at once
- ✅ Investor pitch integrated with vision
- ✅ Desktop-optimized experience

### Choose B4 if you want:
- ✅ Organized mega menu navigation
- ✅ Focus purely on customer journey
- ✅ No investor-specific content

---

## Testing All Variants

1. Start dev server: `npm run dev`
2. Visit each URL:
   - `http://localhost:3000/design-b1`
   - `http://localhost:3000/design-b2`
   - `http://localhost:3000/design-b3`
   - `http://localhost:3000/design-b4`
3. Use the floating design switcher (bottom-right) to jump between variants
4. Toggle language (SV/EN) to verify translations
5. Test on mobile to see responsive behavior

---

## Common Features Across All New Variants (B2, B3, B4)

✅ **Configuration-driven**: All content from `lib/i18n.ts`  
✅ **Bilingual**: Full SV/EN support  
✅ **7 new sections**: Products, Why, What's Included, Industries, Integrations, Roadmap, Fair Terms  
✅ **Same design language**: Consistent with B1 (icons, colors, animations)  
✅ **Responsive**: Mobile-optimized throughout  
✅ **Animated**: Framer Motion scroll animations  
✅ **Anchor navigation**: In-page scrolling only  

---

**Last Updated**: February 5, 2026

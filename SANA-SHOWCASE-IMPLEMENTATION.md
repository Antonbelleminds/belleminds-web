# Sana-Inspired Auto Showcase Implementation

## Overview
This document describes the implementation of a Sana-inspired auto-rotating showcase component with progress indicators and pause functionality.

## Component: SanaInspiredShowcase

**Location:** `app/components/SanaInspiredShowcase.tsx`

### Features
1. **Auto-rotation:** Slides automatically rotate every 5 seconds
2. **Progress Indicators:** Each tab button has a white progress bar at the bottom that fills up during the active state
3. **Pause/Play Control:** Users can pause/play the auto-rotation using a button on the right
4. **Manual Navigation:** Users can click any tab to jump to that slide
5. **Smooth Animations:** Framer Motion powers the smooth transitions between slides
6. **Dot Indicators:** Small dots at the bottom show which slide is active

### Design Inspiration
The component is inspired by Sana's showcase design where:
- Each tab (Automate, Create, Analyze, Act, Find) has its own progress indicator
- The progress bar fills with white color during the active state
- A pause button sits at the end of the tabs
- Smooth fade and scale transitions between content

### Screenshots Used
The component uses three main Sana screenshots:
1. **Automate:** `sana-automate.png` - "Run complex, multi-step processes"
2. **Create:** `sana-create.png` - "Generate collaborative content in any format"
3. **Analyze:** `sana-analyze.png` - "Turn data into live dashboards and reports"

Plus two additional Bellebook screenshots for Act and Find tabs.

## Implementation Details

### Auto-rotation Logic
```typescript
- AUTOPLAY_INTERVAL: 5000ms (5 seconds per slide)
- Progress updates every 50ms for smooth animation
- When progress reaches 100%, moves to next slide
- Pausing resets progress to 0 and stops the timer
```

### Progress Bar
- Located at the bottom of each active tab button
- Fills from left to right with a gradient (blue to purple)
- Only visible on the active tab
- Automatically resets when changing tabs

### Styling
- Background: Gradient from blue-50 via white to purple-50
- Buttons: White background with shadow, scale effect on active
- Content Card: White with rounded-3xl corners and shadow-2xl
- Smooth hover effects and transitions

## Updated Design Variants

The following design variants now use `SanaInspiredShowcase`:

1. **design-b** - Split hero variant
2. **design-b1** - Mega hero V1 variant
3. **design-b2** - Mega hero V2 variant
4. **design-b3** - Mega hero V3 variant
5. **design-b-v1** - Split hero V1 variant
6. **design-b-v2** - Split hero V2 variant
7. **design-b-v3** - Split hero V3 variant

## Usage

```tsx
import { SanaInspiredShowcase } from '../components/SanaInspiredShowcase';

<SanaInspiredShowcase />
```

## Access

Visit any of the design variants to see the component in action:
- http://localhost:3007/design-b1
- http://localhost:3007/design-b2
- http://localhost:3007/design-b3
- http://localhost:3007/design-b-v1
- http://localhost:3007/design-b-v2
- http://localhost:3007/design-b-v3

## Technical Stack
- **React:** Functional component with hooks
- **TypeScript:** Full type safety
- **Framer Motion:** Animation library
- **Next.js Image:** Optimized image loading
- **Tailwind CSS:** Utility-first styling

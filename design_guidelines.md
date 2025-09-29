# Warner Bros Recruiting Landing Page - Design Guidelines

## Design Approach
**Single-Page Minimal Landing** - Clean, focused design centered around Warner Bros branding with the uploaded background image and logo. No navigation, no header, just essential recruiting elements.

## Core Design Elements

### A. Color Palette
**Primary Colors (Warner Bros Theme)**
- Deep Blue: 220 90% 25% (primary brand color from reference)
- Warner Blue: 215 85% 35% (button, accents)
- Pure White: 0 0% 100% (text, logo contrast)

**Dark Mode Variant**
- Same blue tones maintained
- White text remains for contrast
- Semi-transparent overlays for text readability

### B. Typography
**Font Stack:** Inter or similar modern sans-serif from Google Fonts
- Recruiting Headline: 2.5rem - 4rem (bold/700), center-aligned
- Button Text: 1.125rem (semibold/600)
- All text in white for contrast against background

### C. Layout System
**Spacing Units:** Tailwind 4, 6, 8, 12, 16
- Full viewport height layout (h-screen)
- Centered vertical and horizontal alignment
- Content container: max-w-4xl with padding

**Grid Structure:**
- Single column, center-aligned
- Logo top-center with mb-8 to mb-12
- Headline with my-6 to my-8
- Button with mt-8 to mt-12

### D. Component Specifications

**Background Layer:**
- Full-screen background image (uploaded photo)
- Dark overlay gradient (from transparent to black 40-50% opacity) for text readability
- Background size: cover, center positioning

**Warner Bros Logo:**
- Top-center placement with pt-12 to pt-16
- Max width: 280px - 320px
- White version or original with contrast

**Recruiting Headline:**
- Text: "Recruiting Warner Bros Agents for Recruiting"
- Large, bold typography (text-4xl to text-6xl)
- White color with optional subtle text-shadow for depth
- Letter-spacing: slightly wide (tracking-wide)

**CTA Button:**
- Text: "Schedule with Calendly"
- Solid Warner Blue background (bg-blue-600)
- White text, rounded-lg borders
- Padding: px-8 py-4 to px-12 py-5
- Hover: Subtle brightness increase
- External link to calendly.live (target="_blank")
- Slight shadow for depth (shadow-xl)

### E. Interactions
**Minimal Animations:**
- Subtle fade-in on page load (0.6s duration)
- Button hover: brightness increase + slight scale (1.02)
- No scroll effects or complex animations

## Images
**Hero Background Image:**
- User-uploaded background photo covering entire viewport
- Applied with background-size: cover and background-position: center
- Dark gradient overlay ensures text legibility

**Logo Image:**
- User-uploaded Warner Bros logo
- Positioned top-center
- Maintains aspect ratio with defined max-width

## Page Structure
```
└── Full-screen container
    ├── Background image (full viewport)
    ├── Dark overlay gradient
    └── Centered content column
        ├── Warner Bros Logo (top)
        ├── Recruiting Headline (center)
        └── Calendly Button (bottom of center)
```

## Accessibility
- Sufficient contrast ratio between white text and darkened background (minimum 4.5:1)
- Button has clear focus states
- External link opens in new tab with proper attributes
- Semantic HTML structure

## Key Design Principles
1. **Simplicity First** - No unnecessary elements, just logo, text, and button
2. **Brand Consistency** - Warner Bros blue theme throughout
3. **Clear Hierarchy** - Logo → Headline → CTA vertical flow
4. **Professional Polish** - Clean typography and spacing despite minimal design
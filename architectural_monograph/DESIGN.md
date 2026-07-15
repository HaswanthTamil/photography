---
name: Architectural Monograph
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#474741'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#777771'
  outline-variant: '#c8c7bf'
  surface-tint: '#5f5e5c'
  primary: '#010100'
  on-primary: '#ffffff'
  primary-container: '#1c1c1a'
  on-primary-container: '#858481'
  inverse-primary: '#c8c6c3'
  secondary: '#9b442a'
  on-secondary: '#ffffff'
  secondary-container: '#fe9071'
  on-secondary-container: '#752811'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c16'
  on-tertiary-container: '#85847c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2de'
  primary-fixed-dim: '#c8c6c3'
  on-primary-fixed: '#1c1c1a'
  on-primary-fixed-variant: '#474744'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#7c2d15'
  tertiary-fixed: '#e4e3d9'
  tertiary-fixed-dim: '#c8c7bd'
  on-tertiary-fixed: '#1b1c16'
  on-tertiary-fixed-variant: '#474740'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 84px
    fontWeight: '600'
    lineHeight: 92px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 54px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '500'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  eyebrow-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.02em
spacing:
  section-v-padding: 104px
  section-v-padding-mobile: 64px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
---

## Brand & Style

This design system is rooted in the principles of modern architectural monographs: precision, structural integrity, and the luxury of space. The target audience includes high-net-worth individuals, commercial developers, and design enthusiasts who value intellectual rigor and timeless aesthetics.

The visual style is **High-Contrast Minimalist**. It avoids digital-native trends like glassmorphism or soft shadows in favor of physical metaphors—ink on heavy-stock paper, structural hairlines, and asymmetric balance. The emotional response should be one of quiet confidence, emphasizing the "built environment" through expansive whitespace and rigid alignment.

## Colors

The palette is derived from natural building materials: plaster, stone, and terracotta. 

- **Primary (#1C1C1A):** Used for headlines and primary UI elements to ensure a "weighted" feel.
- **Secondary (#B5573C):** A sophisticated earth tone reserved for focused interactions and high-intent calls to action.
- **Backgrounds:** The primary background is a warm off-white (#FAF9F6) to reduce screen glare while maintaining an editorial feel. The secondary "Stone" background (#F1EFEA) is used for section breaks and containerized content.
- **Borders:** Hairlines (#DEDAD2) provide structural definition without cluttering the visual field.

## Typography

Typography is the primary driver of the brand's premium feel. 

**Headlines:** Utilize **Playfair Display** for high-contrast elegance. Set display type with tight leading and negative tracking to mimic the look of custom-set lead type. Large headlines should often be the largest element on the screen, acting as a structural anchor.

**Body & UI:** **Inter** provides a clean, neutral counterpoint to the serif headings. Its grotesque qualities ensure legibility in technical specifications and interface labels.

**Eyebrows:** Always set in uppercase with generous tracking (+8%) to act as clear navigational wayfinders.

## Layout & Spacing

The layout follows an **asymmetric 12-column grid**. Avoid centered compositions; instead, offset content to create dynamic visual tension.

- **Vertical Rhythm:** Use generous 104px (approx. 6.5rem) vertical padding between major sections to emphasize exclusivity and focus.
- **Grid Execution:** Elements should snap to the grid. In a 12-column setup, consider using 5-column or 7-column widths for text blocks to create intentional "empty" space on the flanks.
- **Responsiveness:** On mobile, the 12-column grid collapses to a 4-column grid with 20px margins. Section padding reduces to 64px to maintain momentum while scrolling.

## Elevation & Depth

This system rejects digital shadows. Depth is communicated through **Tonal Layering** and **Line Work**.

- **Stacked Tones:** Use the Stone (#F1EFEA) background against the Off-White (#FAF9F6) base to indicate depth or distinct content areas.
- **Structural Outlines:** 1px hairlines are used to divide headers, navigate lists, or frame imagery. 
- **Z-Index Strategy:** If an overlay is required (e.g., a modal or menu), use a solid fill of Off-White with a 1px border. Do not use blurs or shadows; the "elevation" is created by the physical occlusion of the content behind it.

## Shapes

The shape language is strictly geometric and architectural. 

- **Sharp Edges:** All buttons, cards, and input fields must have a 0px border radius. This conveys a sense of permanence and precision.
- **Imagery:** Architecture photography should be cropped to strict rectangles. Avoid irregular shapes or circular frames.
- **Interactive States:** Use color fills or text weight changes to signal interactivity rather than shape manipulation or "squishy" physics.

## Components

### Buttons
Primary buttons are solid #1C1C1A with white text, or Terracotta (#B5573C) for primary conversion points. They must be rectangular with no radius. Secondary buttons are "Ghost" style: 1px border (#1C1C1A) with no fill.

### Input Fields
Inputs are defined by a bottom-border only (1px #DEDAD2). Labels use the `eyebrow-sm` style and sit 8px above the input line. On focus, the bottom border darkens to #1C1C1A.

### Cards & Project Previews
Project cards do not use borders or shadows. They consist of a full-bleed image followed by a `headline-lg` title and `label-md` metadata. Hovering over a card should trigger a subtle image scale (1.05x) but no shadow change.

### Lists
Lists (for services or contact info) are separated by horizontal hairlines. Each item should have a generous 24px - 32px vertical padding to maintain the editorial feel.

### Navigation
The header should be a fixed, high-z-index bar with a 1px bottom border. Links use `label-md` with an animated underline on hover, rather than a color change.
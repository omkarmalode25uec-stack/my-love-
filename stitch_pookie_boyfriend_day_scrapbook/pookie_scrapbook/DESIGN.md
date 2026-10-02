---
name: Pookie Scrapbook
colors:
  surface: '#fff8f7'
  surface-dim: '#efd3d6'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f1'
  surface-container: '#ffe9ea'
  surface-container-high: '#fee1e4'
  surface-container-highest: '#f8dcde'
  on-surface: '#261819'
  on-surface-variant: '#5c3f42'
  inverse-surface: '#3d2c2e'
  inverse-on-surface: '#ffeced'
  outline: '#906e71'
  outline-variant: '#e5bdc0'
  surface-tint: '#bd0041'
  primary: '#b9003f'
  on-primary: '#ffffff'
  primary-container: '#e51152'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb2ba'
  secondary: '#9c3f53'
  on-secondary: '#ffffff'
  secondary-container: '#fd8ca0'
  on-secondary-container: '#772237'
  tertiary: '#6a575d'
  on-tertiary: '#ffffff'
  tertiary-container: '#846f76'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9dc'
  primary-fixed-dim: '#ffb2ba'
  on-primary-fixed: '#400010'
  on-primary-fixed-variant: '#910030'
  secondary-fixed: '#ffd9dd'
  secondary-fixed-dim: '#ffb2bd'
  on-secondary-fixed: '#400013'
  on-secondary-fixed-variant: '#7e273c'
  tertiary-fixed: '#f6dce4'
  tertiary-fixed-dim: '#d9c0c8'
  on-tertiary-fixed: '#26171d'
  on-tertiary-fixed-variant: '#544248'
  background: '#fff8f7'
  on-background: '#261819'
  surface-variant: '#f8dcde'
typography:
  display:
    fontFamily: Comfortaa
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Comfortaa
    fontSize: 34px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Comfortaa
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Comfortaa
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Comfortaa
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Comfortaa
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 28px
  body-md:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-sm:
    fontFamily: Quicksand
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-lg:
    fontFamily: Quicksand
    fontSize: 15px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Quicksand
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Quicksand
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system captures high-spirited romantic whimsy through the lens of a personal, handmade digital scrapbook. Designed for celebrations of affection and warmth, the aesthetic pairs raw, collage-style tactile cues with polished interactive responsiveness.

Key emotional anchors include:
- **Maximum Softness:** Layered pastel tones, pillowy tap-targets, and organic rounded contours.
- **Handmade Tactility:** Trompe l'oeil washi tape strips, asymmetric card tilts, sticker outlines, and layered paper drop shadows that suggest physical decoupage.
- **Playful Romantic Chaos:** Micro-interactions peppered with floating sparkles, bow motifs, and heart badges without sacrificing compositional clarity or accessibility.

## Colors

The palette balances soft confectionary pastels against sharp cherry accents and deep, warm cocoa neutrals to ensure AA/AAA text legibility across all touchpoints.

### Application Roles
- **Canvas Base:** Soft Cream (`#FFF9F5` to `#FFF0F5`) supplies a warm, paper-grain-friendly ground rather than clinical stark white.
- **Containers & Cutouts:** Crisp White (`#FFFFFF`) represents polaroid frames, sticker badges, and cut paper layers.
- **Accents & CTAs:** Cherry Red (`#FF2E63` / `#E11D48`) drives active states, focal badges, hearts, and primary action triggers.
- **Atmosphere:** Baby Pink (`#FFE4EC`, `#FFD1DF`) and Blush Pink (`#FFB6C1`, `#FF8DA1`) form washi tapes, secondary fills, chip backgrounds, and soft gradients.
- **Typography & Outlines:** Warm Charcoal Cocoa (`#3D2C2E`, `#5C3D42`) replaces pure black for all structural borders, iconography, and text runs to prevent harsh visual clipping while retaining contrast.

## Typography

The type system blends the geometric softness of Comfortaa for headlines with the approachable readability of Quicksand for long-form reading and interface labels.

### Rules & Formatting
- **Headlines:** Use `Comfortaa` with tight letter spacing and prominent weights (600–700) to create a rounded, huggable typographic signature.
- **Body & Captions:** Rely on `Quicksand` at medium (500) and bold (700) weights. Quicksand's rounded terminals mirror the geometric quirks of the headers without compromising dense layout scanning.
- **Emphasized Callouts:** Short expressions, handwritten annotations, or sticker tags should utilize uppercase `label-md` or `label-sm` surrounded by badge padding.

## Layout & Spacing

Layouts follow a fluid, asymmetric grid system modeled after physical photo journals. Elements deliberately overlap grid boundaries by fractional increments to break rigid column alignments.

### Spatial Rhythms
- **Canvas Margins:** Fixed outer margins (`2rem` desktop, `1rem` mobile) frame the scrapbook stage.
- **Masonry & Offset Columns:** Desktop views utilize an 8 or 12-column layout with staggered vertical offsets between adjacent columns (`space-lg` to `space-xl` push) to give photo cards a casual, hand-placed rhythm.
- **Touch Targets:** Minimum interactive bounding box size is `44px x 44px`, padded internally with `space-sm` to `space-md`.

## Elevation & Depth

Visual depth avoids cold, neutral software dropshadows in favor of warm, saturated "paper-craft" shadows that simulate physically cut layers lying on top of each other.

### The Scrapbook Stacking Model
- **Level 1 (Paper Slips & Chips):** `0 2px 0 #5C3D4215, 0 4px 12px #FF8DA120` — Low-lying elements like notes and tags.
- **Level 2 (Polaroids & Content Cards):** `0 4px 0 #3D2C2E1A, 0 10px 24px #FF2E6318` — Floating card modules, slightly rotated.
- **Level 3 (Modal Sheets & Interactive Stickers):** `0 8px 0 #3D2C2E1F, 0 20px 32px #FF8DA135` — Popped states, lifted stickers, and overlays.

### Skeuomorphic Scrapbook Details
- **Washi Tape Strip:** Semi-translucent pink ribbons (`rgba(255, 182, 193, 0.75)`) placed at card corners with jagged or straight edges, casting a soft hairline shadow (`0 1px 2px rgba(61, 44, 46, 0.15)`).
- **Sticker Trim:** Pure white `3px` solid stroke with a tight, crisp drop shadow (`0 3px 0 #3D2C2E20`) framing illustration badges, emojis, and hearts.
- **Rotational Play:** Apply subtle random rotation classes (`-2deg`, `+1.5deg`, `-1deg`) to media frames, resetting to `0deg` smoothly on hover or focus.

## Shapes

The shape system is built around pill-shaped caps and exaggerated soft corners, removing any sharp edge from interactive elements while referencing organic paper cutouts.

### Corner Treatment Rules
- **Pills (`roundedness: 3`):** Buttons, chips, filter tabs, badge markers, and input fields use fully rounded caps (`9999px` / `3rem`).
- **Cards & Paper Panels:** Use `rounded-xl` (`1.5rem` to `2rem`) to maintain structural containment while matching the soft typography.
- **Polaroid Frames:** Exterior container uses `rounded-lg` (`1rem`) with an asymmetric bottom bezel to emulate classic instant film sheets.

## Components

### Buttons
- **Primary Pill:** Background in `#FF2E63`, text in `#FFFFFF`, with a bottom tactile edge (`box-shadow: 0 4px 0 #B81540`). On active press, the button translates down `2px` with shadow reduced to `0 2px 0`.
- **Secondary Bubble:** Background in `#FFE4EC`, text in `#3D2C2E`, border `2px solid #FF8DA1`. On hover, fills to `#FFD1DF`.
- **Bow & Heart Icon Adornments:** Iconography floats on the leading or trailing side within a circular white badge inset.

### Cards (Polaroid & Paper-Cut)
- **Polaroid Photo Tile:** Built with an inner photo canvas framed by `#FFFFFF` with padding (`12px 12px 36px 12px`). Includes a faux washi tape badge pinned over the top edge and an optional handwriting caption in the bottom margin.
- **Sticky Love Note:** Soft Cream or blush container with a dashed border (`2px dashed #FFB6C1`), tilted `-1.5deg`.

### Chips & Badges
- **Pookie Badge:** Pill container with Cherry Red fill, white bold text, and a tiny heart/ribbon leading glyph (`🎀`, `💖`).
- **Filter Tags:** Unselected chips use `#FFF0F5` with cocoa border (`1.5px solid #FFD1DF`); selected state pops with `#FF2E63` fill, white text, and sticker depth.

### Input Fields
- **Chatty Input:** Pill-shaped boundary with `#FFF9F5` fill, `2px solid #FFD1DF` border, and placeholder styled in muted cocoa (`#5C3D4280`). Focus switches border to `#FF2E63` with an outer pink halo (`0 0 0 4px #FFE4EC`).

### Selection Controls
- **Heart Checkboxes:** Replaces standard square boxes with an organic heart toggle. Checked state fills with `#FF2E63` and scales slightly with a bouncy spring transition.
- **Radio Buttons:** Circular concentric rings styled in baby pink and deep cherry.
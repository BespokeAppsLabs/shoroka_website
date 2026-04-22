# Shoroka UI Style Guide: The Fertile Foundation

This document defines the visual and interactive DNA of the Shoroka Creations digital experience.

## 1. Typography: "The Balance"
We use a high-contrast pairing to represent the **History (Soil)** and the **Future (Mind)**.

### Primary Display: Cormorant Garamond (Serif)
- **Role:** Main headings, hero statements, quotes.
- **Feel:** Elegant, timeless, authoritative, "First Class".
- **Weight:** 600 (Semi-bold) or 700 (Bold).

### Secondary UI: Inter (Sans-Serif)
- **Role:** Body text, navigation, buttons, labels.
- **Feel:** Precise, modern, industrial, clear.
- **Weight:** 400 (Regular) for body, 600 (Semi-bold) for CTAs.

### Accent: JetBrains Mono
- **Role:** Technical specs, fleet numbers, coordinates.
- **Feel:** Engineering-grade, precise, "Sons of the Soil" work ethic.

---

## 2. The Multi-State Palette

### Dark Mode: "The Deep Earth" (Primary Preference)
The site defaults to a luxurious dark mode to evoke the depth of the soil and the premium nature of the brand.

| Token | Color | Usage |
| :--- | :--- | :--- |
| `bg-primary` | `#0A0A0C` | Main page background |
| `bg-secondary` | `#16161D` (Deep Purple-Tinted Black) | Cards, section dividers |
| `text-primary` | `#F9FAFB` | Main headings |
| `text-accent` | `#C7A963` (Shoroka Gold) | Hero highlights, icons |
| `border-gold` | `#C7A963` | Premium borders |

### Light Mode: "The Polished Seed"
A high-clarity alternative for daylight viewing or formal proposal reading.

| Token | Color | Usage |
| :--- | :--- | :--- |
| `bg-primary` | `#FFFFFF` | Main page background |
| `bg-secondary` | `#F3F4F6` | Cards, alternating sections |
| `text-primary` | `#33206E` (Shoroka Purple) | Main headings (instead of black) |
| `text-accent` | `#A88930` (A deeper, readable gold) | Links, subheads |
| `border-purple` | `#33206E` | Structural lines |

---

## 3. UX Style & Interaction Patterns

### The "Shoroka Glass"
- **Style:** 15% opacity white/purple with a heavy (20px) backdrop blur.
- **Usage:** Navigation bars and hero overlays. It represents the "Mind" (clarity) hovering over the "Soil" (content).

### Curved Geometry
- **Patterns:** Soft, rounded shapes and cards that feel approachable yet premium.
- **Shadows:** Soft "Float" shadows (0px 10px 30px rgba(0,0,0,0.5)) to give the feeling of weightlessness.

### Micro-Animations (The "Life Force")
- **Entrance:** Content shouldn't just "appear"—it should "rise" from the bottom with a 50px y-offset, like a plant growing from soil.
- **Gold Pulse:** Buttons in dark mode have a very subtle, slow gold "breathing" outer glow.
- **Cursor interaction:** A small gold dot follows the cursor, leaving a "trace" over purple sections.

---

## 4. Component Rules

- **Buttons:** Rounded corners (pill-shape or large radius). High-gloss gold for primary, ghost purple for secondary. Hover effects should lift the element.
- **Images:** High-quality photography. In dark mode, images have a 10% purple tint until hovered.
- **Spacing:** Generous white space (or dark space) to maintain the "First Class" feel. Avoid "busy" layouts.

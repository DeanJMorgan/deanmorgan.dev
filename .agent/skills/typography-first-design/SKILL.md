# Typography-First Design

This skill codifies the design principles of the Dean Morgan portfolio, which prioritises content clarity and typographic elegance over heavy graphics.

## Design Principles

- **Typography First**: The layout should be driven by font choice, scale, and whitespace.
- **Font Stack**:
  - Sans-Serif: `Geist Sans` (Modern, clean, for body and headings).
  - Monospace: `Geist Mono` (Precision-focused, for labels, dates, and technical details).
- **Whitespace**: Use generous padding and margins to create a premium, balanced feel.
- **Colour Palette**:
  - Primary: Deep blacks and crisp whites (high contrast).
  - Accent: Vibrant Brand Blue (`#2563eb` / `blue-600`) used sparingly for highlights, icons, and CTA elements.

## Component Implementation

- **Bento-lite**: Use grid-based containers with subtle borders and no shadows for a flat, modern look.
- **Micro-animations**: Use subtle Framer Motion entrance animations (y-offset with opacity fade) to add life without distraction.
- **Interactive States**: Hover effects should be subtle—opacity changes or color shifts—never disruptive to the layout.

## Constraints

- AVOID gradients unless specifically requested.
- AVOID heavy shadows or rounded corners (keep it sharp/0px or subtle 4px).
- AVOID stock photography; use generated assets or clean SVGs.

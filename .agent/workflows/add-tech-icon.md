---
description: How to add a new technology icon to the Technographic Stack
---

# Workflow: Adding a Technology Icon

This workflow ensures that new brand icons are added consistently, self-hosted, and correctly integrated into the unified technology grid.

1. **Source the Icon**
   - Find the brand's official SVG logo (VectorLogo.zone or Simple Icons are preferred).
   - Ensure it is a clean SVG with a square aspect ratio or can be contained within a square.

2. **Download to Local Directory**
   // turbo
   - Run the following command to download the icon directly to the project:
     `curl -o public/icons/tech/[brand-slug].svg [svg-url]`

3. **Update the Technology Data**
   - Open `src/components/sections/technology.tsx`.
   - Add the new technology entry to the `categories` array under the appropriate title.
   - Format: `{ name: "[Brand Name]", logo: "/icons/tech/[brand-slug].svg" }`.

4. **Verify the Layout**
   - Check `localhost:3000` to ensure the icon renders correctly in the grid.
   - Hover over the icon to verify the category label appears as expected.
   - Ensure the icon is legible in both light and dark modes.

5. **Commit the Change**
   - Commit both the new SVG file and the updated component.

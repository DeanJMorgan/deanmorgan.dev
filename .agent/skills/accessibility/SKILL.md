# Skill: Accessibility (a11y) Standards

As a Senior Technical Consultant, Dean Morgan prioritises inclusive design. All digital experiences must be accessible by default.

## Principles
1. **Semantic HTML**: Use the correct HTML tags for their purpose (`<button>`, `<header>`, `<nav>`, `<main>`, `<footer>`).
2. **Keyboard Navigation**: All interactive elements must be focusable and operable via keyboard.
3. **Contrast**: Ensure text-to-background contrast ratios meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text).
4. **Focus States**: Never remove default focus indicators without providing a clear, high-visibility alternative.
5. **Screen Readers**: Use proper ARIA attributes where semantic HTML is insufficient (e.g., `aria-label`, `aria-expanded`, `aria-hidden`).

## Specific Patterns

### Forms
- All form inputs must have a clearly associated `<label>`.
- Use `aria-describedby` to link validation messages with their respective inputs.
- Indicate required fields clearly to both visual users and screen readers.

### Navigation
- Use `<nav>` with a descriptive `aria-label`.
- Ensure mobile menus (Sheet components) handle focus trapping and close on `Esc` key.

### Images & Icons
- Provide descriptive `alt` text for informative images.
- Use `aria-hidden="true"` or `alt=""` for purely decorative icons or images.
- Functional icons (e.g., a "Menu" button icon) must be wrapped in a labebled element or have an internal `aria-label`.

### Typography
- Ensure font sizes are responsive and never drop below `16px` for body text.
- Use line-heights that enhance readability (typically 1.5 - 1.6 for body).

## Automated Checks
1. Use `axe-core` as part of the development and testing process.
2. Manually verify keyboard tab order for all new UI components.

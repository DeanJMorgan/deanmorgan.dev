# Workflow: Add/Create UI Component

This workflow ensures consistency when expanding the design system using Shadcn/UI and bespoke components.

## Prerequisites
- Verify if a suitable primitive already exists in [/src/components/ui/](/src/components/ui/).
- Ensure the [Accessibility Skill](/.agent/skills/accessibility/SKILL.md) and [Typography Skill](/.agent/skills/typography-first-design/SKILL.md) are applied.

## Step 1: Install Primitive (if using Shadcn)
Use the Shadcn CLI to add the base component:
```bash
npx shadcn@latest add [component-name]
```

## Step 2: Styling Alignment
1. **Remove Non-Minimalist Styles**: Strip away heavy shadows, rounded corners, or gradients that clash with the "Engineering-first" look.
2. **Typography**: Ensure the component uses `font-sans` (Geist Sans) for text and `font-mono` (Geist Mono) for data/labels.
3. **Colours**: Use CSS variables with Tailwind 4 syntax. Stick to the high-contrast professional palette.
4. **Spacing**: Use standard Tailwind spacing scales (`gap-4`, `p-6`, etc.) ensuring generous white space.

## Step 3: Implement Custom Logic
- Add any required React state or effects.
- Ensure the component is a Server Component if it doesn't require interactivity.
- If it's a Client Component, add the `"use client"` directive.

## Step 4: Add Accessibility
- Follow the [Accessibility Skill](/.agent/skills/accessibility/SKILL.md) guidelines.
- Add ARIA labels and ensure keyboard focus behaviour is correct.

## Step 5: Testing
1. Create a Vitest file: [/src/test/](/src/test/)[component-name].test.tsx.
2. Write tests to verify rendering, prop behaviour, and interactions.
3. (Optional) Add a Playwright test if the component is a major feature.

## Step 6: Integration
- Export the component as necessary.
- Update relevant sections or pages where the component is used.

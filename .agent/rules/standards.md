# Dean Morgan - Project Standards & Rules

Always follow these rules when working on this project.

## Core Identity

- This is a professional portfolio and consultancy site for **Dean Morgan**.
- **Aesthetic**: Typography-First, minimalist, authoritative, premium.
- **Language**: British English (ise, our, bespoke, programme).

## Technical Requirements

- **Framework**: Next.js 16 (App Router), TypeScript, Tailwind CSS.
- **Components**: Shadcn/UI (standard primitives), Framer Motion (subtle entrance animations).
- **Icons**:
  - **Brand Icons**: Self-hosted SVGs in `/public/icons/tech/`.
  - **General UI**: Lucide React.
- **Localisation**: All user-facing text must use British English spelling and terms.

## Development Patterns

- **Services**: Use the "Bento-lite" grid pattern for service sections.
- **Technology**: All new techs must be added to the unified grid in `technology.tsx` with high-quality SVGs.
- **Performance**: Prioritize LCP and Core Web Vitals. Use `next/image` where appropriate (transitioning from `<img>`).

## Governance Artifacts

- **Workflows**: Reference `.agent/workflows/` for icon additions and blog posts.
- **Skills**: Use `british-english` and `typography-first-design` skills for content and UI generation.

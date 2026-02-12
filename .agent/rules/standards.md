# Dean Morgan - Project Standards & Rules

Always follow these rules when working on this project.

## Core Identity

- This is a professional portfolio and consultancy site for **Dean Morgan**.
- **Aesthetic**: Typography-First, minimalist, authoritative, premium.
- **Language**: British English (ise, our, bespoke, programme).

## Technical Requirements

- **Framework**: Next.js 16+ (App Router), React 19, React Compiler.
- **Styling**: Tailwind CSS 4 (using CSS variables, `@theme inline`, and `@utility`).
- **Components**: Shadcn/UI (standard primitives), Framer Motion (subtle entrance animations).
- **Icons**:
  - **Brand Icons**: Self-hosted SVGs in [/public/icons/tech/](/public/icons/tech/).
  - **General UI**: Lucide React.
- **Testing**: Test-Driven Development (TDD) approach is preferred. Vitest for components/hooks, Playwright for E2E user flows.
- **Localisation**: All user-facing text and code comments must use British English spelling and terms.

## Development Patterns

- **Services**: Use the "Bento-lite" grid pattern for service sections.
- **Technology**: All new techs must be added to the unified grid in [/src/components/sections/technology.tsx](/src/components/sections/technology.tsx) with high-quality SVGs.
- **Performance**: Prioritize LCP and Core Web Vitals. Use `next/image` where appropriate (transitioning from `<img>`).

## Governance Artifacts

- **Rules**:
  - [Standards & Rules](/.agent/rules/standards.md)
  - [Testing Standards](/.agent/rules/testing.md)
- **Workflows**:
  - [Add Tech Icon](/.agent/workflows/add-tech-icon.md)
  - [Add UI Component](/.agent/workflows/add-ui-component.md)
  - [Commit Work](/.agent/workflows/commit.md)
  - [Create Blog Post](/.agent/workflows/create-blog-post.md)
  - [Pull Request Standards](/.agent/workflows/pull-request.md)
  - [Run Dev Server](/.agent/workflows/run-dev-server.md)
- **Skills**:
  - [Accessibility](/.agent/skills/accessibility/SKILL.md)
  - [British English](/.agent/skills/british-english/SKILL.md)
  - [Performance](/.agent/skills/performance/SKILL.md)
  - [Typography-First Design](/.agent/skills/typography-first-design/SKILL.md)

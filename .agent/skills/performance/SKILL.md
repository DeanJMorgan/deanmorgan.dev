# Skill: High-Performance Engineering

Performance is a key differentiator for Dean Morgan. The goal is "best-in-class" Core Web Vitals (CWV) and a seamless, high-speed user experience.

## Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s.
- **FID (First Input Delay)**: < 100ms.
- **CLS (Cumulative Layout Shift)**: < 0.1.

## Best Practices

### Next.js Optimisation
1. **Server Components**: Favour Server Components to reduce the JavaScript bundle sent to the client.
2. **Next.js Image**: Always use `next/image` for images. Provide dimensions or `fill` with `sizes` to prevent CLS. Use the `priority` prop for LCP images (e.g., Hero images).
3. **Dynamic Imports**: Use `next/dynamic` for heavy client-side libraries or components that are not needed on initial load.
4. **Font Loading**: Use `next/font` (Geist Sans/Mono) to automate font optimisation and prevent FOIT/FOUT.

### Tailwind & CSS
1. **Utility-First**: Leverage Tailwind CSS 4's compiler for a minimal CSS footprint.
2. **Avoid Inline Styles**: Stick to Tailwind classes to ensure styles are purgeable and cached efficiently.
3. **Critical CSS**: Let Next.js handle critical CSS extraction; avoid manual configuration unless necessary.

### Data Fetching
1. **Incremental Static Regeneration (ISR)**: Use ISR for content like blog posts to balance freshness and speed.
2. **Streaming**: Implement `loading.tsx` and React Suspense boundaries to stream content and improve perceived load speed.

### Third-Party Scripts
1. **Next.js Script**: Use `next/script` with appropriate strategies (`beforeInteractive`, `afterInteractive`, `lazyOnload`).
2. **Minimalist Philosophy**: Audit every new dependency for its impact on performance. If it's too heavy, find a lightweight alternative or build a bespoke solution.

## Auditing
1. Regularly run Lighthouse reports in Incognito mode.
2. Monitor real-world performance metrics where possible.

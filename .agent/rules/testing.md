# Testing Standards - deanmorgan.dev

This project follows a "Test-First" or "Test-Accompanying" philosophy. Every new feature, component, or logic refactor must be accompanied by appropriate tests.

## Testing Stack
- **Unit/Component Testing**: Vitest + React Testing Library.
- **E2E Testing**: Playwright.
- **Assertions**: Vitest `expect`.
- **Mocking**: `vi` (Vitest).

## Vitest (Unit/Component)
Location: [/src/test/](/src/test/) - Follow the naming convention `[target-name].test.tsx`.

### Guidelines:
1. **Component Rendering**: Verify the component renders without crashing and displays the expected initial state.
2. **Prop Testing**: Ensure the component responds correctly to different prop values.
3. **User Interaction**: Simulate clicks, input changes, and other events to verify behaviour.
4. **Hook Testing**: Custom hooks should be tested in isolation using `@testing-library/react-hooks`.
5. **Coverage**: Favour meaningful assertions over 100% line coverage. Target critical business logic and complex UI states.

## Playwright (E2E)
Location: [/e2e/](/e2e/) - Naming convention `[feature].spec.ts`.

### Guidelines:
1. **Critical Paths**: Focus on user flows like the Contact Form, Navigation, and SEO visibility.
2. **Mobile/Desktop**: Ensure tests run against both Viewport sizes if relevant.
3. **Accessibility Integration**: Use `@axe-core/playwright` to catch regressions in accessibility during E2E runs.

## Running Tests
- `npm test`: Runs Vitest in watch mode.
- `npx playwright test`: Runs E2E tests.
- `npx playwright show-report`: Views detailed E2E results.

## PR Requirement
A Pull Request should ideally include:
- New Vitest tests for any added/modified components in [/src/components/](/src/components/).
- Updated or new Playwright specs for significant UI changes or new pages.

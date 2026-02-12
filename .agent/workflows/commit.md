# Workflow: Committing Work

This workflow ensures that every commit maintained in the repository history is of high quality, follows conventions, and does not break the build.

## Step 1: Quality Assurance
Before staging changes, ensure the codebase is stable:
1. **Linting**: Run `npm run lint` to identify and fix style or logic issues.
2. **Unit Tests**: Run `npm run test` to verify component and logic stability.
3. **E2E Tests**: Run `npx playwright test` if changes affect critical user flows.
4. **Build Verification**: Run `npm run build` to ensure the Next.js production build succeeds.

## Step 2: Conventional Commits
Use the **Conventional Commits** specification for all commit messages to ensure a readable and automated changelog.

### Format
`<type>(<scope>): <description>`

### Types
- `feat`: A new feature for the user.
- `fix`: A bug fix for the user.
- `docs`: Changes to documentation.
- `style`: Formatting, missing semi-colons, etc (no production code change).
- `refactor`: Refactoring production code (e.g. renaming a variable).
- `test`: Adding missing tests or correcting existing tests.
- `chore`: Updating build tasks, package manager configs, etc.

### Example
`feat(cta): add personalized call to action section to homepage`

## Step 3: Execution
Use the terminal to stage and commit:
```bash
git add .
git commit -m "type(scope): description"
```

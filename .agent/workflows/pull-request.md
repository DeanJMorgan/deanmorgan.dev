# Workflow: Pull Request Standards

To maintain a professional project history and high quality, follow these steps before and during the PR process.

## Step 1: Quality Check
1. **Linting**: Run `npm run lint` to catch style issues.
2. **Testing**: Run `npm test` and `npx playwright test` to ensure no regressions.
3. **Build**: Run `npm run build` locally to verify the Next.js production build succeeds.

## Step 2: Commits
- Use **Conventional Commits**:
  - `feat`: A new feature.
  - `fix`: A bug fix.
  - `docs`: Documentation changes.
  - `style`: Formatting, missing semi-colons, etc; no code change.
  - `refactor`: Refactoring production code.
  - `test`: Adding tests, refactoring tests; no production code change.
  - `chore`: Updating build tasks, package manager configs, etc; no production code change.
- Example: `feat(contact): add honeypot field to form`

## Step 3: Branch Naming
- Use descriptive branch names: `feature/form-validation` or `fix/mobile-nav-jumping`.

## Step 4: PR Description
Use the following structure for PR descriptions:

```markdown
### Summary
A brief description of the changes.

### Key Changes
- List item 1
- List item 2

### Testing Done
- List the tests run and their results.
- Include screenshots/videos if there are UI changes.

### Accessibility & Performance
- Confirm that accessibility and performance have been audited.
```

## Step 5: Review
- Address reviewer comments promptly.
- Ensure all CI/CD checks pass before requesting a final merge.

# Contributing Guide

Thank you for considering contributing!

## Development Flow

1. Fork & clone.
2. Install dependencies:
   ```bash
   npm run install:frontend
   npm run install:backend
   ```
3. Create a branch: `git checkout -b feature/my-feature`
4. Make changes (ensure TypeScript passes).
5. Run tests: `npm run test:frontend` / `npm run test:backend`
6. Commit with conventional commits (`feat:`, `fix:`, `docs:`).
7. Push & open PR.

## Code Style

- Prettier + ESLint enforced.
- Prefer functional React components.
- Keep Azure Function handlers small; move logic to shared utilities.

## Commits

Use conventional commit prefixes:
- feat:
- fix:
- docs:
- chore:
- refactor:
- test:

## Pull Requests

Include:
- Motivation
- Screenshots (if UI changes)
- Testing steps

## Security

Do not commit secrets. Use environment variables / Key Vault (future).

## License

By contributing you agree your code is under MIT License.
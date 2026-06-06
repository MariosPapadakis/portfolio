# Agent Instructions

## Development Servers

- Never start or restart development servers.
- Assume the relevant development server is already running.
- If a local preview is needed, use the already-running server and report if it is unreachable.

## Verification

- Do not run production builds by default.
- For routine code or data changes, run a lightweight verification pass:
  - `pnpm lint`
  - `pnpm exec tsc --noEmit`
- Run a production build only when the user explicitly asks for it or when the change specifically affects production build behavior.

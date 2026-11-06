# AGENTS.md

### Project Overview

This project is a personal portfolio optimized for deployment on Vercel. It is built for performance, SEO, and maintainability.

### Tech Stack

Refer to the `README.md` file for the canonical and up-to-date description of the technologies used in the project.

### Goals

- Maintain high performance.
- Professionalize the testing suite.
- Clean and consistent UI component structure.

### Style & Architectural Rules

1. **Component Structure**:
    - Every UI component must reside in its own folder: `src/components/ui/<ComponentName>/`.
    - Each component folder should contain the component file (`<ComponentName>.jsx`) and its corresponding test file (`<ComponentName>.test.jsx`).
    - Avoid flat structures in `src/components/ui/`.
2. **Naming Conventions**:
    - Use `PascalCase` for component names.
    - Names should be descriptive (e.g., `ExperienceItem` instead of `JobRole`).
3. **Restrictions**:
    - **Do NOT** create `hooks/` or `services/` directories without explicit architectural justification.
    - **Do NOT** reintroduce Docker-related files or configurations.
    - Maintain the existing CI/CD pipeline configuration (SAST/DAST).

### Testing & Dependency Standards

- All UI components must have unit tests.
- Tests should be deterministic.
- Use `src/utils/test-utils.jsx` for rendering components to ensure all necessary providers (Theme, i18next) are injected.
- Mock external network dependencies during tests. Avoid real network requests (especially for i18n backend).
- Ensure all tests pass with `bun run test` before finalizing any changes.
- Wrap state-updating events (like `fireEvent` clicks) in `act(...)`.
- Maintenance Lifecycle: Always check both project dependencies and pipeline configurations.
- Upon completing any assigned task, agents must execute the following maintenance flow:
    1. `bun run deps-update`
    2. `bun run fix`
    3. `bun run test`

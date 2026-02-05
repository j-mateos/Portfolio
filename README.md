# Portfolio

[![Main Workflow](https://github.com/j-mateos/Portfolio/actions/workflows/main.yml/badge.svg)](https://github.com/j-mateos/Portfolio/actions/workflows/main.yml)
[![Development Workflow](https://github.com/j-mateos/Portfolio/actions/workflows/development.yml/badge.svg)](https://github.com/j-mateos/Portfolio/actions/workflows/development.yml)

## Description

This is my personal web portfolio, showcasing my skills, professional experience, and the technologies I am familiar with. It includes support for multiple languages (Spanish and English), theme modes (light, dark, and system), and it is designed to provide a fully responsive experience on any device.

## Features

- **Responsive design**: Adaptable to both mobile and desktop devices.
- **Visual themes**: Support for light, dark, and system-based automatic themes.
- **Multilingual support**: Content available in Spanish and English.
- **Optimized performance**: Built with Vite for fast and efficient builds.

## Technologies Used

### Frontend

- **React**: Main library for building the user interface.
- **Vite**: Efficient development and build tool.
- **CSS variables**: Used for dynamic theme management.
- **React i18next**: Implementation of multiple languages.

### Development Tools

- **Node**: Runtime environment for development.
- **Bun**: Dependency management.
- **ESLint**: Code analysis and formatting.
- **Vitest**: Testing framework with React integration.
- **Docker**: Container management for development and deployment.
- **GitHub Actions**: CI/CD pipelines for linting, testing, building, and static application security testing (SAST).

## How to install

1. Clone the repository:

    ```bash
    git clone https://github.com/j-mateos/Portfolio
    cd Portfolio
    ```

2. Install dependencies:

    ```bash
    bun install
    ```

3. Check vulnerabilites:

    ```bash
    bun install
    ```

4. Check dependencies:
    ```bash
    bunx depcheck
    ```

## How to run

1. Locally:

    ```bash
    bun run dev
    ```

    The server will start at `http://localhost:5173`.

2. With Docker:

    ```bash
    docker compose -f ./docker/compose.yml up
    ```

### Available Scripts

- `bun run dev`: Starts the development server.
- `bun run lint`: Runs ESLint for linting and automatic fixes.
- `bun run test`: Runs tests with Vitest.
- `bun run build`: Builds the project for production.
- `bun run preview`: Previews the production build.
- `bun run clean-build`: Removes the `dist` folder.
- `bun run clean-bun`: Removes the `node_modules` and `bun-lockb` folders.

```

```

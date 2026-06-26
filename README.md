# Portfolio

[![Main Workflow](https://github.com/j-mateos/Portfolio/actions/workflows/main.yml/badge.svg)](https://github.com/j-mateos/Portfolio/actions/workflows/main.yml)
[![Develop Workflow](https://github.com/j-mateos/Portfolio/actions/workflows/dev.yml/badge.svg)](https://github.com/j-mateos/Portfolio/actions/workflows/dev.yml)

## Description

This is my personal web portfolio, showcasing my skills, professional experience, and the technologies I am familiar with. It includes support for multiple languages (Spanish and English), theme modes (light, dark, and system), and it is designed to provide a fully responsive experience on any device.

## Features

- **Responsive design**: Adaptable to both mobile and desktop devices.
- **Visual themes**: Support for light, dark, and system-based automatic themes.
- **Multilingual support**: Content available in Spanish and English.
- **Optimized performance**: Built with Vite for fast and efficient builds.

## Technologies used

### Frontend

- **React**: Main library for building the user interface.
- **Vite**: Efficient development and build tool.
- **CSS variables**: Used for dynamic theme management.
- **React i18next**: Implementation of multiple languages.

### Development tools

- **Bun**: Runtime environment and dependency management.
- **Prettier**: Code formatting.
- **ESLint**: Code analysis.
- **Vitest**: Testing framework with React integration.
- **Docker**: Container management for development and deployment.
- **GitHub Actions**: CI/CD pipelines for linting, testing, building, static security testing (SAST) and dynamic security testing (DAST).

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

    The server will start at `http://localhost:3000`.

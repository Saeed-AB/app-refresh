# App Refresh

A React application built with Vite and TypeScript for managing app refresh controls and version management. This project provides components for handling refresh behaviors, version cards, and APIs for checking refresh information.

## Features

- **Refresh Control**: Interactive component for managing app refresh states
- **Version Cards**: Display and manage application versions
- **Refresh Behavior Utils**: Utilities for handling refresh logic
- **API Integration**: Axios-based API client for refresh information checks
- **Modern UI**: Styled with Tailwind CSS for a responsive design

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: TanStack React Query
- **HTTP Client**: Axios
- **Linting**: ESLint with TypeScript support

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd app-refresh
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Build

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── apis/
│   └── checkRefreshInfo/
│       ├── checkRefreshInfo.type.ts
│       └── index.ts
├── assets/
├── components/
│   ├── refresh-control.tsx
│   └── version-card.tsx
├── utils/
│   └── refresh-behavior.ts
├── App.css
├── App.tsx
├── index.css
└── main.tsx
```

- `apis/`: API client and type definitions for refresh information
- `components/`: React components for refresh control and version display
- `utils/`: Utility functions for refresh behavior logic

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run preview`: Preview production build

## Linting

The project uses ESLint for code quality. Run linting with:
```bash
npm run lint
```

For production applications, consider enabling type-aware lint rules as described in the ESLint configuration.

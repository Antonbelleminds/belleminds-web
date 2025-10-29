# Next.js 14+ Web Application

## Overview
This is a Next.js web application created using the official Next.js template (create-next-app). The project is configured with TypeScript, ESLint, Tailwind CSS, and the App Router.

## Project Setup
- **Framework**: Next.js 16.0.1 (latest stable)
- **React Version**: 19.2.0
- **TypeScript**: Yes
- **ESLint**: Yes
- **Tailwind CSS**: Yes (v4)
- **App Router**: Yes
- **src directory**: No
- **Import alias**: No

## Configuration
The application is configured to run in the Replit environment with the following customizations:

1. **Dev Server**: Configured to bind to `0.0.0.0:5000` to work with Replit's proxy
2. **Cache Control**: Headers configured to disable caching for proper hot-reload in the Replit iframe
3. **Allowed Origins**: Configured to allow cross-origin requests from Replit domains

## Running the Application
The application runs automatically via the configured workflow:
- Command: `npm run dev -- -H 0.0.0.0 -p 5000`
- Port: 5000

## Project Structure
```
/
├── app/              # Next.js App Router directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── public/           # Static assets
├── next.config.ts    # Next.js configuration
├── tsconfig.json     # TypeScript configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── package.json      # Dependencies and scripts
```

## Recent Changes
- **2025-10-29**: Initial Next.js application setup with TypeScript, ESLint, Tailwind CSS, and App Router

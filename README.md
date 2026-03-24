# Taking Stock Website

Marketing website for Taking Stock, built with Next.js and exported as a static site for Azure Static Web Apps.

This README was lightly updated to trigger CI validation.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui-based components

## Local Development

Prerequisites:

- Node.js 20 or newer
- npm

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

This project uses static export via [next.config.mjs](/c:/Private%20-%20use/Taking%20Stock/taking-stock-website/next.config.mjs):

```js
output: "export"
```

Production build:

```bash
npm run build
```

The generated static files are written to `out/`.

## Deployment

The site is configured for Azure Static Web Apps.

Primary workflow:

- [.github/workflows/azure-static-web-apps.yml](/c:/Private%20-%20use/Taking%20Stock/taking-stock-website/.github/workflows/azure-static-web-apps.yml)

Expected deployment settings:

- `app_location: "/"`
- `api_location: ""`
- `output_location: "out"`
- `app_artifact_location: "out"`
- `app_build_command: "npm run build"`

Required GitHub Actions secret:

- `AZURE_STATIC_WEB_APPS_API_TOKEN`

If the deployment token was exposed, rotate it in Azure and update the GitHub secret before deploying again.

## Project Structure

```text
app/                Next.js app router pages
components/         Reusable UI and feature components
hooks/              Custom React hooks
lib/                Shared utilities and state helpers
public/             Static assets
.github/workflows/  GitHub Actions workflows
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Notes

- This repo already contains an exported `out/` directory locally after a successful build.
- If Azure reports that it expects a `build/` directory, check for older workflow files that still reference `build`.

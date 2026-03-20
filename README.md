# react-web-extension

A browser extension starter built with **React**, **TypeScript**, and **Vite** using Manifest V3.

## Features

- ⚛️ **React 18** for popup and options UI
- 🔷 **TypeScript** for type safety
- ⚡ **Vite** for fast builds and HMR-like watch mode
- 📦 **Manifest V3** (Chrome / Edge compatible)
- 🎨 Popup with a click counter and a settings link
- ⚙️ Options page with theme and notification settings
- 🔄 Background service worker for extension lifecycle events
- 📄 Content script injected into every web page

## Project Structure

```
react-web-extension/
├── icons/                  # Extension icons (16, 32, 48, 128 px)
├── src/
│   ├── manifest.json       # Extension manifest (Manifest V3)
│   ├── background/
│   │   └── index.ts        # Background service worker
│   ├── content/
│   │   └── index.ts        # Content script
│   ├── popup/
│   │   ├── index.html      # Popup HTML entry point
│   │   ├── main.tsx        # React entry
│   │   ├── Popup.tsx       # Popup component
│   │   └── popup.css       # Popup styles
│   └── options/
│       ├── index.html      # Options page HTML entry point
│       ├── main.tsx        # React entry
│       ├── Options.tsx     # Options component
│       └── options.css     # Options styles
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later

### Installation

```bash
npm install
```

### Development

Watch for changes and rebuild automatically:

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

The extension is output to the `dist/` folder.

### Firefox Build

```bash
npm run build:firefox
```

### Lint & Type-check

```bash
npm run lint
npm run type-check
```

## Loading the Extension in Chrome / Edge

1. Run `npm run build` to generate the `dist/` folder.
2. Open **chrome://extensions** (or **edge://extensions**).
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the `dist/` folder.
5. The extension icon appears in the browser toolbar — click it to open the popup.

## Customizing Icons

Replace the placeholder PNG files in the `icons/` directory with your own artwork at the following sizes: **16×16**, **32×32**, **48×48**, **128×128**.
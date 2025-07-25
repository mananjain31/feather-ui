# 🪶 Feather UI

A lightweight, minimal React + Tailwind CSS UI component library for fast development.

[![npm version](https://img.shields.io/npm/v/@mananjain31/feather-ui)](https://www.npmjs.com/package/@mananjain31/feather-ui)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/mananjain31/feather-ui/pulls)

---

## ✨ Features

- ⚡ Super lightweight
- 🎨 Tailwind CSS-based design tokens (theme, spacing, typography)
- ⚛️ Built with React and TypeScript
- 🧱 Composable and customizable
- 🎯 Developer-friendly setup with theming preset

---

## 📦 Installation

```bash
npm install @mananjain31/feather-ui
# or
yarn add @mananjain31/feather-ui
```

---

## 🔧 Peer Dependencies

Ensure the following are installed in your project:

```bash
npm install react react-dom tailwindcss@3 @tailwindcss/forms @tailwindcss/typography autoprefixer postcss
```

---

## 🧪 Mandatory Tailwind Setup

To ensure full theming support (like `bg-muted`, `text-primary`, etc.), **you must add Feather UI’s preset** and import its CSS in your `tailwind.config.js` and your main CSS entry:

### 1. Add Preset in Tailwind Config

```js
// tailwind.config.js
const featherPreset = require("@mananjain31/feather-ui/preset");

module.exports = {
  presets: [featherPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@mananjain31/feather-ui/**/*.{js,ts,jsx,tsx}"
  ]
};
```

### 2. Import Component Styles

In your `src/index.css` or `src/globals.css`:

```css
@import "@mananjain31/feather-ui/styles.css";
```

> 🔁 Don’t forget to restart your dev server after editing Tailwind config or CSS files.

---

## 🛠️ Usage

```tsx
import { Button } from "@mananjain31/feather-ui";

function App() {
  return <Button onClick={() => alert("Hello!")}>Click Me</Button>;
}
```

---

## 📚 Available Components

- `Button`
- *(More coming soon...)*

> Suggest a component? [Open an issue](https://github.com/mananjain31/feather-ui/issues).

---

## 📁 File Structure

```
feather-ui/
├── src/
│   ├── components/
│   │   └── Button.tsx
│   ├── tailwind.css
│   └── index.ts
├── dist/              ← Compiled output
├── tailwind.preset.js          ← Theme and tokens
├── package.json
└── tsconfig.json
```

---

## 🔗 Live Demo

_Coming soon on CodeSandbox or StackBlitz!_

---

## 🧪 Local Development

```bash
git clone https://github.com/mananjain31/feather-ui.git
cd feather-ui
npm install
npm run dev
```

---

## 📤 Build

```bash
npm run build
```

---

## 🤝 Contributing

Contributions, suggestions, and PRs are welcome!

1. Fork the repo
2. Make your changes
3. Submit a pull request

📋 Check open [issues](https://github.com/mananjain31/feather-ui/issues)

---

## 🧩 License

MIT © Manan Jain
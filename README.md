# 🪶 Feather UI

A lightweight, minimal React + Tailwind CSS UI component library for fast development.

## ✨ Features

- ⚡ Super lightweight
- 🎨 Styled with Tailwind CSS utility classes
- ⚛️ Built with React and TypeScript
- 🧱 Easily composable and customizable

## 📦 Installation

```bash
npm install @mananjain31/feather-ui
# or
yarn add @mananjain31/feather-ui
```

## 🔧 Peer Dependencies

Ensure the following are installed in your project:

```bash
npm install react react-dom tailwindcss
```

## 🛠️ Usage

```tsx
import { Button } from "@mananjain31/feather-ui";

function App() {
  return <Button onClick={() => alert("Hello!")}>Click Me</Button>;
}
```

## 🎨 Tailwind Setup

To ensure the components are styled correctly, update your `tailwind.config.js`:

```js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@mananjain31/feather-ui/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
```

> ⚠️ Don’t forget to restart your dev server after editing Tailwind config.

## 📁 File Structure

```
feather-ui/
├── src/
│   ├── components/
│   │   └── Button.tsx
│   └── index.ts
├── dist/  ← Compiled output
├── package.json
├── tsconfig.json
└── tailwind.config.js (for development preview)
```

## 🧪 Local Development

```bash
git clone https://github.com/mananjain31/feather-ui.git
cd feather-ui
npm install
npm run dev
```

## 📤 Build

```bash
npm run build
```

## 🧩 License

MIT © Manan Jain
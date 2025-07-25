// feather-ui/tailwind.preset.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        primaryHover: "#1d4ed8",
        secondary: "#6b7280",
        muted: "#f3f4f6",
        danger: "#dc2626",
        success: "#16a34a",
        warning: "#f59e0b",
        background: "#ffffff",
        foreground: "#111827",
        border: "#e5e7eb",
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        sm: "0.375rem",
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
      spacing: {
        1.5: "0.375rem",
        2.5: "0.625rem",
        4.5: "1.125rem",
        18: "4.5rem",
      },
      fontSize: {
        xs: ["0.75rem", "1rem"],
        sm: ["0.875rem", "1.25rem"],
        base: ["1rem", "1.5rem"],
        lg: ["1.125rem", "1.75rem"],
        xl: ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["1.875rem", "2.25rem"],
        "4xl": ["2.25rem", "2.5rem"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};

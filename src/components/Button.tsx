import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export const Button = ({ children, variant = "primary", onClick }: Props) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 rounded font-semibold transition-colors duration-200",
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-200 text-black hover:bg-gray-300"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

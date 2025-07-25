import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
  style,
  ...rest
}) => {
  function getBtnStyle(variant: string): string {
    switch (variant) {
      case "primary":
        return "btn-primary";
      case "secondary":
        return "btn-secondary";
      default:
        return "btn";
    }
  }

  return (
    <button
      className={clsx(
        getBtnStyle(variant),
        className // allow overrides/additions,
      )}
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
};

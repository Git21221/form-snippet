import * as React from "react";
import { ReactNode } from "react";
import { Button as MUIButton } from "@mui/material";

/**
 * @typedef {Object} ButtonProps
 * @property {React.ReactNode} content - The content of the Button component
 * @property {boolean} [disabled] - Whether the Button component is disabled
 * @property {string} [href] - The URL to link to when the Button component is clicked
 * @property {"text" | "outlined" | "contained"} [variant] - The variant of the Button component
 * @property {"small" | "medium" | "large"} [size] - The size of the Button component
 * @property {"inherit" | "primary" | "secondary" | "success" | "error" | string} [color] - The color of the Button component
 * @property {boolean} [disableElevation] - Whether to disable the button elevation
 * @property {React.ReactNode} [startIcon] - The icon to display at the start of the Button component
 * @property {React.ReactNode} [endIcon] - The icon to display at the end of the Button component
 * @returns {JSX.Element} - The JSX element of the Button component
 */

type PropsType = {
  children: ReactNode;
  disabled?: boolean;
  href?: string;
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | string;
  disableElevation?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: (e: any) => void;
};

const Button = ({
  children,
  disabled,
  href,
  variant,
  size = "medium",
  color = "primary",
  disableElevation,
  startIcon,
  endIcon,
  ...props
}: PropsType) => {
  const isStandardColor = [
    "inherit",
    "primary",
    "secondary",
    "success",
    "error",
  ].includes(color);
  return (
    <MUIButton
      type="submit"
      variant={variant}
      size={size}
      color={isStandardColor ? (color as any) : undefined}
      href={href}
      disabled={disabled}
      disableElevation={disableElevation}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {children}
    </MUIButton>
  );
};

export { Button };

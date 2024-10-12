import * as React from "react";
import { ReactNode } from "react";
import { CircularProgress, Button as MUIButton } from "@mui/material";

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
 * @property {(e: any) => void} [onClick] - The function to call when the Button component is clicked
 * @returns {JSX.Element} - The JSX element of the Button component
 */

export type PropsType = {
  children: ReactNode;
  isLoading: boolean;
  disabled?: boolean;
  href?: string;
  variant?: "text" | "outlined" | "contained";
  size?: "small" | "medium" | "large";
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | string;
  disableElevation?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: "button" | "submit" | "reset";
  loadingPosition?: "start" | "end";
  onClick?: (e: any) => void;
};

const Button:React.FC<PropsType>  = ({
  children,
  disabled,
  href,
  isLoading,
  variant,
  size = "medium",
  color = "primary",
  type="button",
  disableElevation,
  loadingPosition = "end",
  ...props
}: PropsType) => {
  const isStandardColor = [
    "inherit",
    "primary",
    "secondary",
    "success",
    "error",
  ].includes(color);

  const loader = (
    <CircularProgress
      size={20}
      color={isStandardColor ? "inherit" : "primary"}
    />
  );
  const startIcon =isLoading && loadingPosition === "start" ? loader : undefined;
  const endIcon = isLoading && loadingPosition === "end" ? loader : undefined;
  return (
    <MUIButton
      type={type}
      variant={variant}
      size={size}
      color={isStandardColor ? (color as any) : undefined}
      href={href}
      disabled={disabled || isLoading}
      disableElevation={disableElevation}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {isLoading ? "Loading" : children}
    </MUIButton>
  );
};

export { Button };

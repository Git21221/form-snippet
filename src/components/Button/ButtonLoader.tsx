import * as React from "react";
import { Button, CircularProgress, ButtonProps } from "@mui/material";

export interface ButtonLoaderProps
  extends Omit<
    ButtonProps,
    | "children"
    | "startIcon"
    | "endIcon"
    | "disabled"
    | "color"
    | "variant"
    | "size"
  > {
  children: React.ReactNode;
  isLoading: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "success" | "error" | "inherit" | string;
  variant?: "text" | "outlined" | "contained";
  disableElevation?: boolean;
  type?: "button" | "submit" | "reset";
  loadingPosition?: "start" | "end";
}

const ButtonLoader: React.FC<ButtonLoaderProps> = ({
  children,
  isLoading,
  disabled = false,
  size = "medium",
  color = "primary",
  variant = "contained",
  disableElevation,
  type = "button",
  loadingPosition = "end",
  ...rest
}) => {
  const isStandardColor = [
    "inherit",
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
  ].includes(color);

  const loader = (
    <CircularProgress
      size={20}
      color={isStandardColor ? "inherit" : "primary"}
    />
  );

  const startIcon =
    isLoading && loadingPosition === "start" ? loader : undefined;
  const endIcon = isLoading && loadingPosition === "end" ? loader : undefined;

  return (
    <Button
      type={type}
      variant={variant}
      disabled={disabled || isLoading}
      size={size}
      disableElevation={disableElevation}
      color={isStandardColor ? (color as ButtonProps["color"]) : "inherit"}
      startIcon={startIcon}
      endIcon={endIcon}
      {...rest}
    >
      {isLoading ? "Loading" : children}
    </Button>
  );
};

export { ButtonLoader };
